import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import keysMock from "../mocks/keys";
import * as yup from "yup";
import { REQUIRED_LABEL, PAGINATION_LIMIT } from "../utils/constants";

export interface Post {
  key?: any;
  key_type: string;
  type_origin_account: string;
}

export type GetReturn = {
  id: any;
  active: boolean;
  created_at: string;
  updated_at: string;
} & Post;

export type PostReturn = GetReturn;

const PayloadSchema = yup.object().shape({
  key: yup.string(),
  key_type: yup
    .mixed()
    .oneOf(["PHONE", "DOCUMENT_NUMBER", "EMAIL", "RANDOM"])
    .required(REQUIRED_LABEL),
  type_origin_account: yup
    .mixed()
    .oneOf(["corrente", "poupança"])
    .required(REQUIRED_LABEL),
});

const initializeService = (fetcher: AxiosInstance, isMock: boolean) => {
  const get = async () => {
    // MOCK TRUE
    if (isMock) {
      return formatResponse<GetReturn[]>(
        keysMock,
        false,
        "Listado com sucesso"
      );
    }
    // MOCK FALSE
    try {
      const { data } = await fetcher.request<GetReturn[]>({
        url: `/keys`,
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
      const { id, active, created_at, updated_at } = keysMock[0];
      return formatResponse<PostReturn>(
        {
          id,
          ...payload,
          active,
          created_at,
          updated_at,
        },
        false,
        "Criado com sucesso"
      );
    }

    // MOCK FALSE
    try {
      const { data } = await fetcher.request<PostReturn>({
        url: `/keys`,
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
