import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/UserServices";
import { UserData } from "../models/UserData/UserData";
import { UserPerformanceData } from "../models/UserPerformance/UserPerformance";
import { UserActivityData } from "../models/UserActivity/UserActivity";
import { UserAvgSessionData } from "../models/UserAverage/UserAverage";

function useFetchData(mock) {
  // logique de récupération de données asynchrones
  const { id } = useParams();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = parseInt(id);
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

  return {
    userData,
    userActivityData,
    userPerformance,
    userAverageSession,
    isLoading,
  };
}

export default useFetchData;
