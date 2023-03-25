import { InternalAxiosRequestConfig } from "axios";
import { getCookie, deleteCookie } from "cookies-next";

// 임시

export async function verifySession(config: InternalAxiosRequestConfig) {
  const pathname = window.location.pathname;
  const sessionId = getCookie("sessionId") as string;

  if (pathname !== "/login" && pathname !== "/join") {
    if (!sessionId) return (window.location.href = "../login");
    config.headers.Authorization = sessionId;
  }

  return config;
}

export function verifySessionErrorHandler() {
  doSignOut();
}

export function doSignOut() {
  deleteCookie("sessionId");
}
