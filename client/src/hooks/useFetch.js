import React from 'react'
// import { makeRequest } from '../makeRequest'
import axios from 'axios'

const useFetch = (url) => {

   const [data, setData] = React.useState([])
   const [loading, setLoading] = React.useState(false)
   const [error, setError] = React.useState(false)

   React.useEffect(()=> {
      const fetchData = async () => {
         try {
            setLoading(true)
            const res = await axios.get(url ,{
               headers : {
                  Authorization : "Bearer" + process.env.REACT_APP_API_TOKEN,
               },
            });
            setData(res.data.data);
         }
         catch(err) {
            setError(true)
         }
         setLoading(false)
      };
      fetchData();
   }, [url]);

   return {data, loading, error};
}

export default useFetch;