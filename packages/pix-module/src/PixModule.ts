import api from "./config/api";
import loadServices, { AllServices } from "./services";

export type InitPixModule = {
  baseURL: string;
  accessToken: string;
};

export type PixModule = {
  activeBaseURL: string;
  activeAccessToken: string;
  services: AllServices;
};

const PixModule = (config: InitPixModule): PixModule => {
  const { baseURL, accessToken } = config;
  const initializedApi = api(baseURL, accessToken);

  return {
    activeBaseURL: baseURL,
    activeAccessToken: accessToken,
    services: loadServices(initializedApi),
  };
};

export default PixModule;
