import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/ApiCall";
import BarsChart from "../components/BarsChart";
import LineChart from "../components/LineChart";
import RadarChart from "../components/RadarChart";
import "../style/style.scss";
import  { UserData, UserPerformanceData, UserAvgSessionData, UserActivityData }from "../services/UserModels"; 

const Home = () => {
	document.title = "SportSee - Home";
      
	const { id } = useParams(); // Obtenir l'ID de l'URL
      
	const [userData, setUserData] = useState(new UserData());
	const [userActivityData, setUserActivityData] = useState(new UserActivityData());
	const [userPerformance, setUserPerformance] = useState(new UserPerformanceData());
	const [userAverageSession, setUserAverageSession] = useState(new UserAvgSessionData());
	const [isLoading, setIsLoading] = useState(true);
	const mock = false;
      
	useEffect(() => {
	  const fetchData = async () => {
	    try {
	      const userId = parseInt(id); // Convertir l'ID en nombre
	      const userD = await getData(mock, userId, "");
	      const userAct = await getData(mock, userId, "activity");
	      const userPerf = await getData(mock, userId, "performance");
	      const userAvg = await getData(mock, userId, "average-sessions");
      
	      setUserData(new UserData(userD.id, userD.userInfos, userD.todayScore, userD.keyData));
	      setUserActivityData(new UserActivityData(userAct.userId, userAct.sessions));
	      setUserPerformance(new UserPerformanceData(userPerf.userId, userPerf.data, userPerf.kind));
	      setUserAverageSession(new UserAvgSessionData(userAvg.userId, userAvg.sessions));
	      setIsLoading(false);
	    } catch (error) {
	      console.error("Une erreur a eu lieu lors du chargement des données", error);
	    }
	  };
      
	  fetchData();
	}, [mock, id]);
      
	if (!userData || !userActivityData || !userPerformance || !userAverageSession) {
	  return (
	    <div className="error">
	      <h2>Une erreur est survenue lors du chargement des données</h2>
	    </div>
	  );
	}

  return (
    <>
      {!isLoading && (
        <div className="profile">
          <h1 className="profile__hello">
            Bonjour <span>{userData.userInfos?.firstName}</span>
          </h1>
          <p className="profile__congrats">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="profile__data-container">
            <section className="profile__data-charts">
              <article className="profile__charts">
                <div className="chart barChart">
                  <BarsChart data={userActivityData} />
                </div>
                <div className="profile__charts-miniGraph">
                  <div className="chart lineChart">
                    <LineChart data={userAverageSession} />
                  </div>
                  <div className="chart radarChart">
                    <RadarChart data={userPerformance} />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
