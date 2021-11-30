import api from "./config/api";
import services from "./services";

export type InitPixModule = {
  baseURL: string;
  accessToken: string;
};

export type PixModule = {};

const PixModule = (config: InitPixModule): PixModule => {
  const initializedApi = api(config.baseURL, config.accessToken);
};

export default PixModule;
