import showResponseErrors, {
  NotificationType,
} from "../utils/showResponseErrors";
import { PAGINATION_LIMIT } from "../utils/constants";
import { AxiosInstance } from "axios";

export interface GetReturn {}

type ReceiptService = {
  get: () => Promise<GetReturn[] | NotificationType>;
};

const initializeService = (fetcher: AxiosInstance): ReceiptService => {
  return {
    get: async () => {
      try {
        const { data } = await fetcher({
          url: `/limits`,
          method: "get",
          params: {
            limit: PAGINATION_LIMIT,
            ordering: "-id",
          },
        });

        if (!data) {
          return false;
        }

        return data;
      } catch (err) {
        return showResponseErrors(err);
      }
    },
  } as ReceiptService;
};

export default initializeService;
