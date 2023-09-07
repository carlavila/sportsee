import Axios from "./Axios";

function PerformancesData () {
  const { data, loading } = Axios(`performance`);
  if (data.data) {
    let result = data.data.map(item => {
      item.kind = isNaN(item.kind) ? item.kind : data.kind[item.kind]
      return item
    })
    return { result };
  }
  return { data, loading };
};

export default PerformancesData;