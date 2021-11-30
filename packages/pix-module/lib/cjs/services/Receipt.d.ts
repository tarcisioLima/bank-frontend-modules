import { AxiosInstance } from "axios";
export interface GetReturn {
}
declare const initializeService: (fetcher: AxiosInstance) => {
    get: () => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<GetReturn[]>>;
};
export default initializeService;
