import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2EwZDgxNTg4MmNhOGYzNDZhZTcwZGI4YWE1OTU3NyIsInN1YiI6IjY1N2E5ODMzZTkzZTk1MjE5MDBkYmIxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gBDgzZcWNOa3UCH4THTSDBqOpSxq4gAs9zE6FmqyLsU";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
