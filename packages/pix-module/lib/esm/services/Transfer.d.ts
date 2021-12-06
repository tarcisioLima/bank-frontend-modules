import { AxiosInstance } from "axios";
export interface Post {
    amount: number;
    receiver_key: number;
    type_origin_account: string;
}
export declare type PostReturn = {
    id: any;
    status?: string;
    created_at: string;
    updated_at: string;
} & Post;
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    post: (payload: Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<PostReturn>>;
};
export default initializeService;
