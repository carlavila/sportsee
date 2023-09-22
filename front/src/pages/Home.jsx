import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/ApiCall";
import BarsChart from "../components/BarsChart";
import LineChart from "../components/LineChart";
import "../style/style.scss";
import {
  UserModel,
  ActivityModel,
  PerformanceModel,
  AvgSessionModel,
} from "../services/UserModels"; // Adjust the import path as needed

const Home = () => {
  document.title = "SportSee - Home";
  const { id } = useParams(); // Obtain the ID from the URL
  const [userData, setUserData] = useState({});
  const [userActivityData, setUserActivityData] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [userAverageSession, setUserAverageSession] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const mock = false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = parseInt(id); // Convert the ID to a number
        const userD = new UserModel(await getData(mock, userId, ""));
        const userAct = new ActivityModel(
          await getData(mock, userId, "activity")
        );
        const userPerf = new PerformanceModel(
          await getData(mock, userId, "performance")
        );
        const userAvg = new AvgSessionModel(
          await getData(mock, userId, "average-sessions")
        );

        setUserData(userD);
        setUserActivityData(userAct);
        setUserPerformance(userPerf);
        setUserAverageSession(userAvg);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred while loading data", error);
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
        <h2>An error occurred while loading data</h2>
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
		<div className='chart lineChart'>
                                    <LineChart data={userAverageSession}/>
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
