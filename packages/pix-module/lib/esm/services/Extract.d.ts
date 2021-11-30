import { NotificationType } from "../utils/showResponseErrors";
import { AxiosInstance } from "axios";
export interface GetReturn {
}
declare type ExtractService = {
    get: () => Promise<GetReturn[] | NotificationType>;
};
declare const initializeService: (fetcher: AxiosInstance) => ExtractService;
export default initializeService;
