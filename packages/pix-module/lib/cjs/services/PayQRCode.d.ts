import { AxiosInstance } from "axios";
export interface Post {
    code: string;
}
export declare type PostReturn = {
    id: any;
    authentication: string;
    created_at: string;
} & Post;
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    post: (payload: Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<PostReturn>>;
};
export default initializeService;
