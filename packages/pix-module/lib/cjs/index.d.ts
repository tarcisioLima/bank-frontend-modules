declare type InitPixModule = {
    baseURL: string;
    accessToken: string;
    isMock?: boolean;
};
declare const PixModule: (config: InitPixModule) => {
    activeBaseURL: string;
    activeAccessToken: string;
    services: {
        extract: {
            get: () => Promise<import("./@types").ApiResponse<import("./services/Extract").GetReturn[]> | import("./@types").ApiResponse<undefined>>;
        };
        charge_someone: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/ChargeSomeone").GetReturn[]>>;
            post: (payload: import("./services/ChargeSomeone").Post) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/ChargeSomeone").GetReturn>>;
        };
        key: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Key").GetReturn[]>>;
            post: (payload: import("./services/Key").Post) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Key").GetReturn>>;
        };
    };
};
export default PixModule;
