import axios from "axios";

const fetchData = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = "https://api.nasa.gov/planetary/apod?api_key=";
  const request = axios.get(API_URL + API_KEY);

  return {
    type: "FETCH_DATA",
    payload: request
  };
};

export default fetchData;
