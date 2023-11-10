import axios from "axios";

const https = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});

https.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  return config;
});

https.interceptors.response.use(
  (response) => {
    const resDto = response.data;
    if (resDto.error) {
      window.location.href = "/error/" + resDto.error.status;
    }
    return response.data;
  },
  (error) => {
    const resDto = error?.response?.data;
    if (resDto) {
      window.location.href = "/error/404";
    }
    if (resDto.reason === "login_unauthenticated_user") {
      alert("로그인이 필요합니다.");
      location.href = "/signin";
    }
    if (error.response.status >= 500) {
      window.location.href = "/error/500";
    }
    if (error.response.status >= 404) {
      alert("잘못된 접근입니다.");
      window.location.href = "/error/404";
    }
    return Promise.reject(error.response.data);
  }
);

export { https };
