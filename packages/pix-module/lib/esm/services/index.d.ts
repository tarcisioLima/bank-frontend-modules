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
    };
};
export default all;
