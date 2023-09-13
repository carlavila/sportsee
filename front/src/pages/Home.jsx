import React, { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../services/ApiCall';
import BarsChart from '../components/BarsChart';
import '../style/style.scss';

const Home = () => {
	document.title = "SportSee - Home"
    
	const [userData, setUserData] = useState({});
	const [userActivityData, setUserActivityData] = useState({})
	console.log(userActivityData)
	const [userPerformance, setUserPerformance] = useState({})
	const [userAverageSession, setUserAverageSession] = useState({})
    
	const [isLoading, setIsLoading] = useState(true);
	const mock = false;
    
	useEffect( () => {
	    const data = async (mock, userId) => {
		const userD = await getData(mock, userId, "");
		const userAct = await getData(mock, userId, "activity");
		const userPerf = await getData(mock, userId, "performance");
		const userAvg = await getData(mock, userId, "average-sessions");
    
		setUserData(userD);
		setUserActivityData(userAct);
		setUserPerformance(userPerf);
		setUserAverageSession(userAvg);
		setIsLoading(false);
	    };
	    data(mock, 12);
	}, [mock])

	if(!userData || !userActivityData || !userPerformance || !userAverageSession){
		console.error("Une erreur a eu lieu lors du chargement des données");
		return(
		    <div className='error'>
			<h2>Une erreur est survenue lors du chargement des données</h2>
		    </div>
		);
	    }

	    return (
		<>
		{!isLoading && (
		    <div className='profile'>
			<h1 className='profile__hello'>Bonjour <span>{userData.userInfos?.firstName}</span></h1>
			<p className='profile__congrats'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			<div className='profile__data-container'>
			    <section className='profile__data-charts'>
				<article className="profile__charts">
				    <div className='chart barChart'>
					<BarsChart data={userActivityData}/>
				    </div>
				    <div className="profile__charts-miniGraph">
                        
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