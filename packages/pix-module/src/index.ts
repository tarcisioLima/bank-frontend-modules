import api from "./config/api";
import loadServices from "./services";

type InitPixModule = {
  baseURL: string;
  accessToken: string;
  isMock?: boolean;
};

const PixModule = (config: InitPixModule) => {
  const { baseURL, accessToken } = config;
  const initializedApi = api(baseURL, accessToken);
  const isMock = config.isMock || false;

  return {
    activeBaseURL: baseURL,
    activeAccessToken: accessToken,
    services: loadServices(initializedApi, isMock),
  };
};

export default PixModule;
