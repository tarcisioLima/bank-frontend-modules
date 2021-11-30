import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
} from "../utils/formatResponse";
import { PAGINATION_LIMIT } from "../utils/constants";
import { AxiosInstance } from "axios";

export interface GetReturn {}

const initializeService = (fetcher: AxiosInstance) => {
  return {
    get: async () => {
      try {
        const { data } = await fetcher.request<GetReturn[]>({
          url: `/extract`,
          method: "get",
          params: {
            limit: PAGINATION_LIMIT,
            ordering: "-id",
          },
        });

        if (!data) {
          return formatMessageErrors("Erro de api");
        }

        return formatResponse<GetReturn[]>(data, false, "Listado com sucesso");
      } catch (err) {
        return formatAxiosErrors(err);
      }
    },
  };
};

export default initializeService;
