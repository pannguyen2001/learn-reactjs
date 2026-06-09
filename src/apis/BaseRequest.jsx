import logger from "@/helpers/logger";
import axiosInstance from "./axiosInstance";

const SUPPORTED_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"];

/**
 * @param {string}  url
 * @param {string}  [method="GET"]
 * @param {object}  [data=null]       — request body (POST/PUT/PATCH)
 * @param {object}  [params={}]       — query string params (GET)
 * @param {object}  [headers={}]      — per-request header overrides
 * @returns {Promise<any>}            — response.data directly
 * @throws {{ status, message, data, raw }}
 */
export const baseRequest = async ({
  url,
  method = "GET",
  data = null,
  params = {},
  headers = {},
}) => {
  if (!url) throw new Error("[${baseRequest.name}] url is required");

  const upperMethod = method.toUpperCase();
  if (!SUPPORTED_METHODS.includes(upperMethod)) {
    throw new Error(`[${baseRequest.name}] Unsupported HTTP method: ${method}`);
  }

  // Axios config — clean separation of body vs query params vs headers
  const config = {
    url,
    method: upperMethod,
    headers,
    params,   // appended to URL as ?key=value
    data,     // request body (ignored by axios for GET/DELETE automatically)
  };

  const start = performance.now();

  const response = await axiosInstance(config); // throws on 4xx/5xx via interceptor
  const duration = Math.round(
    performance.now() - start
  );

  logger.info(`[${baseRequest.name}] ${upperMethod} ${url} → ${response.status} (${duration} ms)`);

  return response.data;
};