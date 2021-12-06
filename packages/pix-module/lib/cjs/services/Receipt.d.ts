import { AxiosInstance } from "axios";
export interface GetReturn {
    id: any;
    amount: number;
    description: string;
    created_at: string;
    payment_date: string;
    authentication: string;
    type_origin_account: string;
}
declare const initializeService: (fetcher: AxiosInstance, isMock: boolean) => {
    get: () => Promise<import("../@types").ApiResponse<GetReturn[]> | import("../@types").ApiResponse<undefined>>;
};
export default initializeService;
