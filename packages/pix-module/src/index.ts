import api from "./config/api";
import loadServices from "./services";

type InitPixModule = {
  baseURL: string;
  accessToken: string;
};

const PixModule = (config: InitPixModule) => {
  const { baseURL, accessToken } = config;
  const initializedApi = api(baseURL, accessToken);

  return {
    activeBaseURL: baseURL,
    activeAccessToken: accessToken,
    services: loadServices(initializedApi),
  };
};

export default PixModule;
