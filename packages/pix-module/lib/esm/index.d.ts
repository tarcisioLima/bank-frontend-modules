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
            put: (key_id: string | number, payload: import("./services/Key").Put) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Key").GetReturn>>;
            remove: (key_id: string | number) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Key").GetReturn>>;
        };
        limit: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Limit").GetReturn>>;
            post: (payload: import("./services/Limit").Post) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Limit").GetReturn>>;
        };
        checkqrcode: {
            post: (payload: import("./services/CheckQRCode").Post) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/CheckQRCode").PostReturn>>;
        };
        payqrcode: {
            post: (payload: import("./services/PayQRCode").Post) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/PayQRCode").PostReturn>>;
        };
        receipt: {
            get: () => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Receipt").GetReturn[]>>;
        };
        transfer: {
            post: (payload: import("./services/Transfer").Post) => Promise<import("./@types").ApiResponse<undefined> | import("./@types").ApiResponse<import("./services/Transfer").PostReturn>>;
        };
    };
};
export default PixModule;
