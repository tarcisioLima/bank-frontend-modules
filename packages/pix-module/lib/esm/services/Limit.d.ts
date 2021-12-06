import { AxiosInstance } from "axios";
export interface Post {
    limit_day_amount?: number;
    limit_night_amount?: number;
}
export declare type GetReturn = {
    id: any;
    updated_at: string;
} & Post;
export declare type PostReturn = GetReturn;
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    get: () => Promise<import("../@types").ApiResponse<GetReturn> | import("../@types").ApiResponse<undefined>>;
    post: (payload: Post) => Promise<import("../@types").ApiResponse<GetReturn> | import("../@types").ApiResponse<undefined>>;
};
export default initializeService;
