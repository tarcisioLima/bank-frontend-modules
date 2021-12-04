import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import chargeMock from "../mocks/charge_someone";
import * as yup from "yup";
import { REQUIRED_LABEL, PAGINATION_LIMIT } from "../utils/constants";

export interface Post {
  key_id: number;
  amount?: number;
  description: string;
}

export type GetReturn = {
  qr_code: string;
} & Post;

export type PostReturn = GetReturn;

const PayloadSchema = yup.object().shape({
  key_id: yup.number().required(REQUIRED_LABEL),
  amount: yup.number(),
  description: yup.string(),
});

const initializeService = (fetcher: AxiosInstance, isMock: boolean) => {
  const get = async () => {
    // MOCK TRUE
    if (isMock) {
      return formatResponse<GetReturn[]>(
        chargeMock,
        false,
        "Listado com sucesso"
      );
    }
    // MOCK FALSE
    try {
      const { data } = await fetcher.request<GetReturn[]>({
        url: `/charge-someone`,
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

  const post = async (payload: Post) => {
    // YUP VALIDATION
    if (!PayloadSchema.isValidSync(payload)) {
      const validationResult = await PayloadSchema.validate(payload, {
        abortEarly: false,
      }).catch((err) => err);
      return formatYupErrors(validationResult.errors);
    }

    // MOCK TRUE
    if (isMock) {
      return formatResponse<PostReturn>(
        { ...payload, qr_code: chargeMock[0].qr_code },
        false,
        "Criado com sucesso"
      );
    }

    // MOCK FALSE
    try {
      const { data } = await fetcher.request<PostReturn>({
        url: `/charge-someone`,
        method: "post",
        data: payload,
      });

      if (!data) {
        return formatMessageErrors("Erro na chamada");
      }

      return formatResponse<PostReturn>(data, false, "Criado com sucesso");
    } catch (err) {
      return formatAxiosErrors(err);
    }
  };

  return {
    get,
    post,
  };
};

export default initializeService;
