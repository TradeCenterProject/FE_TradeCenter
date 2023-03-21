import axios from "axios";
import { verifySession, verifySessionErrorHandler } from "@utils/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

api.interceptors.request.use(verifySession, verifySessionErrorHandler);

export default api;
