import { AxiosInstance } from "axios";
export interface Post {
    key?: string | number;
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
export declare type DeleteReturn = GetReturn;
export declare type Put = {
    type_origin_account?: string;
};
export declare type PutReturn = GetReturn;
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    get: () => Promise<import("../@types").ApiResponse<GetReturn[]> | import("../@types").ApiResponse<undefined>>;
    post: (payload: Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<GetReturn>>;
    put: (key_id: number | string, payload: Put) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<GetReturn>>;
    remove: (key_id: number | string) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<GetReturn>>;
};
export default initializeService;
