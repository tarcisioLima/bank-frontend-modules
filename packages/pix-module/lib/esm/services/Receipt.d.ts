import { NotificationType } from "../utils/showResponseErrors";
import { AxiosInstance } from "axios";
export interface GetReturn {
}
declare type ReceiptService = {
    get: () => Promise<GetReturn[] | NotificationType>;
};
declare const initializeService: (fetcher: AxiosInstance) => ReceiptService;
export default initializeService;
