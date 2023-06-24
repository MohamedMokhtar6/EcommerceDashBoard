import axios from "axios";
const baseUrl = axios.create({

  // baseURL: "http://www.learnmachinelearning.somee.com/",

  baseURL: "https://localhost:7238/",
});
export default baseUrl;
