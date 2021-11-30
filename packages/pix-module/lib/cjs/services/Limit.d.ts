import { NotificationType } from "../utils/showResponseErrors";
import { AxiosInstance } from "axios";
export interface GetReturn {
}
declare type LimitService = {
    get: () => Promise<GetReturn[] | NotificationType>;
};
declare const initializeService: (fetcher: AxiosInstance) => LimitService;
export default initializeService;
