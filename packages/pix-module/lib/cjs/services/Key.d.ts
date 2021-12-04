import { AxiosInstance } from "axios";
export interface Post {
    key?: any;
    key_type: string;
    type_origin_account: string;
}
export declare type GetReturn = {
    id: any;
    active: boolean;
    created_at: string;
    updated_at: string;
} & Post;
export declare type PostReturn = GetReturn;
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    get: () => Promise<import("../@types").ApiResponse<GetReturn[]> | import("../@types").ApiResponse<undefined>>;
    post: (payload: Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<GetReturn>>;
};
export default initializeService;
