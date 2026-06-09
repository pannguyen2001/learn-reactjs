import logger from "@/helpers/logger";
import axios from "axios";
import { ENV } from "@/configs/env";

const axiosInstance = axios.create({
  baseURL: ENV.API_URL ?? "",
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor — inject auth token, log outgoing requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    // logger.info(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — normalize errors into a consistent shape
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status  = error.response?.status;
    const message = error.response?.data?.message ?? error.message;
    const data    = error.response?.data ?? null;
    logger.error(`[Response Error] ${status} — ${message} - ${data}`);
    return Promise.reject({ status, message, data, raw: error });
  }
);

export default axiosInstance;