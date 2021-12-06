import { AxiosInstance } from "axios";
declare const all: (fetcher: AxiosInstance, isMock: boolean) => {
    extract: {
        get: () => Promise<import("../@types").ApiResponse<import("./Extract").GetReturn[]> | import("../@types").ApiResponse<undefined>>;
    };
    charge_someone: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./ChargeSomeone").GetReturn[]>>;
        post: (payload: import("./ChargeSomeone").Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./ChargeSomeone").GetReturn>>;
    };
    key: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Key").GetReturn[]>>;
        post: (payload: import("./Key").Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Key").GetReturn>>;
        put: (key_id: string | number, payload: import("./Key").Put) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Key").GetReturn>>;
        remove: (key_id: string | number) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Key").GetReturn>>;
    };
    limit: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Limit").GetReturn>>;
        post: (payload: import("./Limit").Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Limit").GetReturn>>;
    };
    payqrcode: {
        post: (payload: import("./PayQRCode").Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./PayQRCode").PostReturn>>;
    };
    receipt: {
        get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Receipt").GetReturn[]>>;
    };
    transfer: {
        post: (payload: import("./Transfer").Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<import("./Transfer").PostReturn>>;
    };
};
export default all;
