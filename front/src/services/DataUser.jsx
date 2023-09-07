import Axios from './Axios';

function DataUser () {
  const { data, loading, error } = Axios(``)
  // console.log(data);
  const score = data.score? data.score : data.todayScore;
  const { userInfos, keyData } = data;

  return { userInfos, keyData, score, loading, error };
  };

export default DataUser;