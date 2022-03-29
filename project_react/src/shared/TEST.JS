import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.130.88",
});

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;
