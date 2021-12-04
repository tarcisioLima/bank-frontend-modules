import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
} from "../utils/formatResponse";
import { PAGINATION_LIMIT } from "../utils/constants";
import { AxiosInstance } from "axios";
import extractMock from "../mocks/extract";

export interface GetReturn {
  id: any;
  amount: number;
  description: string;
  created_at: string;
  transaction_type: string;
  type_origin_account: string;
}

const initializeService = (fetcher: AxiosInstance, isMock: boolean) => {
  const get = async () => {
    // MOCK TRUE
    if (isMock) {
      return formatResponse<GetReturn[]>(
        extractMock,
        false,
        "Listado com sucesso"
      );
    }
    // MOCK FALSE
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
  };

  return {
    get,
  };
};

export default initializeService;
