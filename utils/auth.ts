import { InternalAxiosRequestConfig } from "axios";
import { getCookie, deleteCookie } from "cookies-next";

// 임시

export async function verifySession(config: InternalAxiosRequestConfig) {
  const pathname = window.location.pathname;
  const sessionId = getCookie("sessionId") as string;

  if (!sessionId) window.location.href = "login";
  if (pathname !== "login" && pathname !== "join")
    config.headers.Authorization = sessionId;

  return config;
}

export function verifySessionErrorHandler() {
  doSignOut();
}

export function doSignOut() {
  deleteCookie("sessionId");
}
