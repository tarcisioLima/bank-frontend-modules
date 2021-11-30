import showResponseErrors, {
  NotificationType,
} from "../utils/showResponseErrors";
import { PAGINATION_LIMIT } from "../utils/constants";
import { AxiosInstance } from "axios";

export interface GetReturn {}

type ExtractService = {
  get: () => Promise<GetReturn[] | NotificationType>;
};

const initializeService = (fetcher: AxiosInstance): ExtractService => {
  return {
    get: async () => {
      try {
        const { data } = await fetcher({
          url: `/extract`,
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
  } as ExtractService;
};

export default initializeService;
