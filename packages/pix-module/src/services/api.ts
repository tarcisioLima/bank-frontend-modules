import axios from "axios";

const api = (baseURL: string, accessToken = "") => {
  const object = axios.create({
    baseURL,
  });

  object.interceptors.request.use((config: any) => {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  });

  object.interceptors.response.use(undefined, (error) => {
    if (error.response) {
      return error.response;
    }

    return error;
  });

  return object;
};

export default api;
