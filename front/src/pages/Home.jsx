import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/ApiCall";
import BarsChart from "../components/BarsChart/BarsChart";
import LineChart from "../components/LineChart/LineChart";
import RadarChart from "../components/RadarChart/RadarChart";
import RadialChart from "../components/RadialChart/RadialChart";
import NutritionCard from "../components/NutritionCard/NutritionCard";
import {UserData} from "../models/UserData/UserData";
import {UserPerformanceData} from "../models/UserPerformance/UserPerformance";
import {UserActivityData} from "../models/UserActivity/UserActivity";
import {UserAvgSessionData} from "../models/UserAverage/UserAverage";
import calories from '../assets/calories.png'
import proteins from '../assets/proteins.png'
import glucides from '../assets/glucides.png'
import lipids from '../assets/lipids.png'
import "../style/pages/home.scss";


const Home = () => {
  document.title = "SportSee - Home";

  const { id } = useParams(); // Obtenir l'ID de l'URL

  const [userData, setUserData] = useState(new UserData());
  const [userActivityData, setUserActivityData] = useState(
    new UserActivityData()
  );
  const [userPerformance, setUserPerformance] = useState(
    new UserPerformanceData()
  );
  const [userAverageSession, setUserAverageSession] = useState(
    new UserAvgSessionData()
  );
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

        setUserData(
          new UserData(
            userD.id,
            userD.userInfos,
            userD.todayScore,
            userD.keyData
          )
        );
        setUserActivityData(
          new UserActivityData(userAct.userId, userAct.sessions)
        );
        setUserPerformance(
          new UserPerformanceData(userPerf.userId, userPerf.data, userPerf.kind)
        );
        setUserAverageSession(
          new UserAvgSessionData(userAvg.userId, userAvg.sessions)
        );
        setIsLoading(false);
      } catch (error) {
        console.error(
          "Une erreur a eu lieu lors du chargement des données",
          error
        );
      }
    };

    fetchData();
  }, [mock, id]);

  if (
    !userData ||
    !userActivityData ||
    !userPerformance ||
    !userAverageSession
  ) {
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
                  <div>
                    <RadialChart data={userData} />
                  </div>
                </div>
              </article>
	      <aside className="profile__nutritionCard">
                            <NutritionCard 
                                icon={calories}
                                dataType={'Calories'}
                                dataCard={[`${userData.keyData?.calorieCount}`, 'kCal']}
                                id={userData.id}
                            />
                            <NutritionCard 
                                icon={proteins}
                                dataType={'Proteines'}
                                dataCard={[`${userData.keyData?.proteinCount}`, 'g']}
                                id={userData.id}
                            />
                            <NutritionCard 
                                icon={glucides}
                                dataType={'Glucides'}
                                dataCard={[`${userData.keyData?.carbohydrateCount}`, 'g']}
                                id={userData.id}
                            />
                            <NutritionCard 
                                icon={lipids}
                                dataType={'Lipides'}
                                dataCard={[`${userData.keyData?.lipidCount}`, 'g']}
                                id={userData.id}
                            />
                        </aside>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
