import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import limitsMock from "../mocks/limits";
import yup from "../config/yup";
import { REQUIRED_LABEL } from "../utils/constants";

export interface Post {
  limit_day_amount?: number;
  limit_night_amount?: number;
}

export type GetReturn = {
  id: any;
  updated_at: string;
} & Post;

export type PostReturn = GetReturn;

const PayloadSchema = yup.object().shape({
  limit_day_amount: yup.number().required(REQUIRED_LABEL),
  limit_night_amount: yup.number().required(REQUIRED_LABEL),
});

const initializeService = (fetcher: AxiosInstance, isMock: boolean) => {
  const get = async () => {
    // MOCK TRUE
    if (isMock) {
      return formatResponse<GetReturn>(
        limitsMock,
        false,
        "Listado com sucesso"
      );
    }
    // MOCK FALSE
    try {
      const { data } = await fetcher.request<GetReturn>({
        url: `/limitation`,
        method: "get",
      });

      if (!data) {
        return formatMessageErrors("Erro de api");
      }

      return formatResponse<GetReturn>(data, false, "Listado com sucesso");
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
      return formatYupErrors(validationResult);
    }

    // MOCK TRUE
    if (isMock) {
      const { id, updated_at } = limitsMock;
      return formatResponse<PostReturn>(
        {
          id,
          ...payload,
          updated_at,
        },
        false,
        "Criado com sucesso"
      );
    }

    // MOCK FALSE
    try {
      const { data } = await fetcher.request<PostReturn>({
        url: `/limitation`,
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
