declare type InitPixModule = {
    baseURL: string;
    accessToken: string;
};
declare const PixModule: (config: InitPixModule) => {
    activeBaseURL: string;
    activeAccessToken: string;
    services: {
        extract: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Extract").GetReturn[]>>;
        };
        chargeSomeone: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/ChargeSomeone").GetReturn[]>>;
        };
        key: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Key").GetReturn[]>>;
        };
        limit: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Limit").GetReturn[]>>;
        };
        payQRCode: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/PayQRCode").GetReturn[]>>;
        };
        receipt: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Receipt").GetReturn[]>>;
        };
        transfer: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Transfer").GetReturn[]>>;
        };
    };
};
export default PixModule;
