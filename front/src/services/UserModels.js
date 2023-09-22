// User data model
class UserData {
	constructor(id, userInfos, todayScore, keyData) {
	  this.id = id;
	  this.userInfos = userInfos;
	  this.todayScore = todayScore;
	  this.keyData = keyData;
	}
      }
      
      // User Performance data model
      class UserPerformanceData {
	constructor(userId, data,kind) {
	  this.userId = userId;
	  this.data = data;
	  this.kind = kind
	}
      }
      
      // User Average Session data model
      class UserAvgSessionData {
	constructor(userId, sessions) {
	  this.userId = userId;
	  this.sessions = sessions;
	}
      }
      
      // User Activity data model
      class UserActivityData {
	constructor(userId, sessions) {
	  this.userId = userId;
	  this.sessions = sessions;
	}
      }

      export { UserData, UserPerformanceData, UserAvgSessionData, UserActivityData };
      