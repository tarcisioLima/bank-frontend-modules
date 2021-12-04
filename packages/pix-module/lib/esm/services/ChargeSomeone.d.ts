import { AxiosInstance } from "axios";
export interface Post {
    key_id: number;
    amount?: number;
    description: string;
}
export declare type GetReturn = {
    qr_code: string;
} & Post;
export declare type PostReturn = GetReturn;
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    get: () => Promise<import("../@types").ApiResponse<GetReturn[]> | import("../@types").ApiResponse<undefined>>;
    post: (payload: Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<GetReturn>>;
};
export default initializeService;
