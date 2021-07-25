import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-21.herokuapp.com",
});

export default instance;
