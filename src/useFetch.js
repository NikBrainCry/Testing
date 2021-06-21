import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {

    const [data,setData]=useState([])

   useEffect(() => {

  const fetchCountryData = async () => {

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  fetchCountryData()
  }, [url])
  return data
}
export default useFetch