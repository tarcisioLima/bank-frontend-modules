import { AxiosInstance } from "axios";
declare const all: (fetcher: AxiosInstance) => {
    extract: {
        get: () => Promise<import("./Extract").GetReturn[] | import("../utils/showResponseErrors").NotificationType>;
    };
    chargeSomeone: {
        get: () => Promise<import("../utils/showResponseErrors").NotificationType | import("./ChargeSomeone").GetReturn[]>;
    };
    key: {
        get: () => Promise<import("../utils/showResponseErrors").NotificationType | import("./Key").GetReturn[]>;
    };
    limit: {
        get: () => Promise<import("../utils/showResponseErrors").NotificationType | import("./Limit").GetReturn[]>;
    };
    payQRCode: {
        get: () => Promise<import("../utils/showResponseErrors").NotificationType | import("./PayQRCode").GetReturn[]>;
    };
    receipt: {
        get: () => Promise<import("../utils/showResponseErrors").NotificationType | import("./Receipt").GetReturn[]>;
    };
    transfer: {
        get: () => Promise<import("../utils/showResponseErrors").NotificationType | import("./Transfer").GetReturn[]>;
    };
};
export declare type AllServices = ReturnType<typeof all>;
export default all;
