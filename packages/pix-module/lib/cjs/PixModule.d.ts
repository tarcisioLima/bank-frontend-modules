export declare type InitPixModule = {
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
            get: () => Promise<Boolean | {
                title: string;
                description: string;
            } | import("./services/ChargeSomeone").GetReturn[]>;
        };
        key: {
            get: () => Promise<import("./utils/showResponseErrors").NotificationType | import("./services/Key").GetReturn[]>;
        };
        limit: {
            get: () => Promise<import("./utils/showResponseErrors").NotificationType | import("./services/Limit").GetReturn[]>;
        };
        payQRCode: {
            get: () => Promise<import("./utils/showResponseErrors").NotificationType | import("./services/PayQRCode").GetReturn[]>;
        };
        receipt: {
            get: () => Promise<import("./utils/showResponseErrors").NotificationType | import("./services/Receipt").GetReturn[]>;
        };
        transfer: {
            get: () => Promise<import("./utils/showResponseErrors").NotificationType | import("./services/Transfer").GetReturn[]>;
        };
    };
};
export default PixModule;
