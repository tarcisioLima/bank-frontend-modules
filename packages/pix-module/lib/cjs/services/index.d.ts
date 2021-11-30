import { AxiosInstance } from "axios";
declare const all: (fetcher: AxiosInstance) => {
    extract: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Extract").GetReturn[]>>;
    };
    chargeSomeone: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./ChargeSomeone").GetReturn[]>>;
    };
    key: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Key").GetReturn[]>>;
    };
    limit: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Limit").GetReturn[]>>;
    };
    payQRCode: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./PayQRCode").GetReturn[]>>;
    };
    receipt: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Receipt").GetReturn[]>>;
    };
    transfer: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Transfer").GetReturn[]>>;
    };
};
export default all;
