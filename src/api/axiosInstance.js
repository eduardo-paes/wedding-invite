import axios from "axios"
import { env } from "../environment";

export default axios.create({
  baseURL: env.urlApi,
});