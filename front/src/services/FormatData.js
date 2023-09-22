export default class formatData {
	formatDataBarsChart = (data) => {
	    let formatedSessions = [];
	    for(let i = 0; i < data.sessions.length; i++){
	      const sessions = data.sessions[i];
	      const { kilogram, calories } = sessions;
	      formatedSessions.push({
		day: i+1,
		kg: kilogram,
		calories: calories
	      })
	    }
	    return formatedSessions
	}

	formatDataLineChart = (data) => {
		const sessionsDay = ["L", "M", "M", "J", "V", "S", "D"];
		let formatedSessions = [];
		for(let i = 0; i < data.sessions.length; i++){
		const sessions = data.sessions[i];
		const { day, sessionLength } = sessions;
		
		formatedSessions.push({
		    day: sessionsDay[day],
		    sessionL: sessionLength
		})
		}
		return formatedSessions
	    }
    }

    
    