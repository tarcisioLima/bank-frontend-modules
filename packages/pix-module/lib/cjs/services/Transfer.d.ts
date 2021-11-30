import { NotificationType } from "../utils/showResponseErrors";
import { AxiosInstance } from "axios";
export interface GetReturn {
}
declare type TransferService = {
    get: () => Promise<GetReturn[] | NotificationType>;
};
declare const initializeService: (fetcher: AxiosInstance) => TransferService;
export default initializeService;
