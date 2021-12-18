import { AxiosInstance } from "axios";
export interface Post {
    code: string;
}
export declare type PostReturn = {
    id?: any;
    receiver_name: string;
    receiver_document: string;
    receiver_bank: string;
    description?: string;
    amount?: number;
} & Post;
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    post: (payload: Post) => Promise<import("../@types").ApiResponse<undefined> | import("../@types").ApiResponse<PostReturn>>;
};
export default initializeService;
