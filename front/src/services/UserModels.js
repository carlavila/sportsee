// UserModel.js
class UserModel {
	constructor(data) {
	  this.userId = data.userId;
	  this.userInfos = data.userInfos;
	  this.todayScore = data.todayScore;
	  this.keyData = data.keyData;
	}
      }
      
      // ActivityModel.js
      class ActivityModel {
	constructor(data) {
	  this.userId = data.userId;
	  this.sessions = data.sessions.map(session => ({
	    day: session.day,
	    kilogram: session.kilogram,
	    calories: session.calories,
	  }));
	}
      }
      
      // PerformanceModel.js
      class PerformanceModel {
	constructor(data) {
	  this.userId = data.userId;
	  this.data = data.data.map(item => ({
	    value: item.value,
	    kind: item.kind,
	  }));
	}
      }
      
      // AvgSessionModel.js
      class AvgSessionModel {
	constructor(data) {
	  this.userId = data.userId;
	  this.sessions = data.sessions.map(session => ({
	    day: session.day,
	    sessionLength: session.sessionLength,
	  }));
	}
      }
      
      export { UserModel, ActivityModel, PerformanceModel, AvgSessionModel };
      