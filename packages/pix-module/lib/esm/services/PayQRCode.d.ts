import { NotificationType } from "../utils/showResponseErrors";
import { AxiosInstance } from "axios";
export interface GetReturn {
}
declare type PayQRCodeService = {
    get: () => Promise<GetReturn[] | NotificationType>;
};
declare const initializeService: (fetcher: AxiosInstance) => PayQRCodeService;
export default initializeService;
