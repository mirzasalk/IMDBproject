import axios from "axios";

const newApi = axios.create({
  baseURL: "https://imdb-api.com/en/API",
});

export default newApi;
