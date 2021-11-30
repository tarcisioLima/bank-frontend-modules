import { AllServices } from "./services";
export declare type InitPixModule = {
    baseURL: string;
    accessToken: string;
};
export declare type PixModule = {
    activeBaseURL: string;
    activeAccessToken: string;
    services: AllServices;
};
declare const PixModule: (config: InitPixModule) => PixModule;
export default PixModule;
