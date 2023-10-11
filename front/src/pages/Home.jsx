import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import BarsChart from "../components/BarsChart/BarsChart";
import LineChart from "../components/LineChart/LineChart";
import RadarChart from "../components/RadarChart/RadarChart";
import RadialChart from "../components/RadialChart/RadialChart";
import NutritionCard from "../components/NutritionCard/NutritionCard";
import calories from "../assets/calories.png";
import proteins from "../assets/proteins.png";
import glucides from "../assets/glucides.png";
import lipids from "../assets/lipids.png";
import "../style/pages/home.scss";
import useFetchData from "../services/UseFetchData";

const Home = () => {
  document.title = "SportSee - Home";

  const {
    userData,
    userActivityData,
    userPerformance,
    userAverageSession,
    isLoading,
  } = useFetchData(false);

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
      <Header />
      <div className="body-container">
        <SideBar />
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
                    dataType={"Calories"}
                    dataCard={[`${userData.keyData?.calorieCount}`, "kCal"]}
                    id={userData.id}
                  />
                  <NutritionCard
                    icon={proteins}
                    dataType={"Proteines"}
                    dataCard={[`${userData.keyData?.proteinCount}`, "g"]}
                    id={userData.id}
                  />
                  <NutritionCard
                    icon={glucides}
                    dataType={"Glucides"}
                    dataCard={[`${userData.keyData?.carbohydrateCount}`, "g"]}
                    id={userData.id}
                  />
                  <NutritionCard
                    icon={lipids}
                    dataType={"Lipides"}
                    dataCard={[`${userData.keyData?.lipidCount}`, "g"]}
                    id={userData.id}
                  />
                </aside>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
