import axios from "axios";
import { REACT_APP_BACKEND_URL } from "./backend";

const instance = axios.create({
  baseURL: REACT_APP_BACKEND_URL,
});

export default instance;
