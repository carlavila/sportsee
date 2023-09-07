import axios from 'axios';
import { useEffect, useState } from 'react';

function Axios (endpoint){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const userId = window.location.pathname

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:3000${userId}/` + endpoint)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        console.error(err);
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [userId, endpoint])
    return ({ data, loading, error });
  };

export default Axios;