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
    
	formatKind(kind){ 
	    if(!kind){
		console.error("Le type performance n'existe pas");
	    }
	    switch(kind){
		case "cardio":
		    return "Cardio"
		case "energy":
		    return "Energie"
		case "endurance":
		    return "Endurance"
		case "strength": 
		    return "Force"
		case "speed":
		    return "Vitesse"
		case "intensity":
		    return "Intensité"
		default:
		    return "N/A"
	    }
	}
	formatDataRadarChart = (data) => {
	    let dataRadarChart = []
	    for(let i = 0; i < data.data.length; i++){
	    const perf = data.data[i];
	    dataRadarChart.push({
		subject: this.formatKind(data.kind[perf.kind]),
		grade: perf.value,
		fullMark: 250
	    })
	    }
	    return dataRadarChart
	}
	formatedDataRadial = (score) => {
	    return [{ value : score * 100}];
	}
    }