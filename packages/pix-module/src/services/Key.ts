import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import keysMock from "../mocks/keys";
import yup from "../config/yup";
import { REQUIRED_LABEL, PAGINATION_LIMIT, KEYTYPES } from "../utils/constants";
import keyTypeValidator from "../utils/keyTypeValidator";

export interface Post {
  key?: string | number;
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

export type DeleteReturn = GetReturn;

export type Put = {
  type_origin_account?: string;
};

export type PutReturn = GetReturn;

const PayloadSchema = yup.object().shape({
  key: yup.string().test("key-error", "", function (value: string) {
    const { key_type: type } = this.parent;
    const { path, createError } = this;

    const isValid = keyTypeValidator(type, value);

    return (
      isValid ||
      createError({
        path,
        message: `Chave do tipo ${type} não está no formato válido`,
      })
    );
  }),
  key_type: yup.mixed().oneOf(KEYTYPES).required(REQUIRED_LABEL),
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
      return formatYupErrors(validationResult);
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

  const put = async (key_id: number | string, payload: Put) => {
    const PayloadSchemaUpdate = yup.object().shape({
      type_origin_account: yup.mixed().oneOf(["corrente", "poupança"]),
    });

    // YUP VALIDATION
    if (!PayloadSchema.isValidSync(payload)) {
      const validationResult = await PayloadSchemaUpdate.validate(payload, {
        abortEarly: false,
      }).catch((err) => err);
      return formatYupErrors(validationResult);
    }

    // MOCK TRUE
    if (isMock) {
      return formatResponse<PutReturn>(
        {
          ...keysMock[0],
          ...payload,
          id: key_id,
        },
        false,
        "Criado com sucesso"
      );
    }

    // MOCK FALSE
    try {
      const { data } = await fetcher.request<PutReturn>({
        url: `/keys/${key_id}`,
        method: "put",
        data: payload,
      });

      if (!data) {
        return formatMessageErrors("Erro na chamada");
      }

      return formatResponse<PutReturn>(data, false, "Criado com sucesso");
    } catch (err) {
      return formatAxiosErrors(err);
    }
  };

  const remove = async (key_id: number | string) => {
    // MOCK TRUE
    if (isMock) {
      return formatResponse<PostReturn>(
        {
          ...keysMock[0],
          id: key_id,
        },
        false,
        "Deletado com sucesso"
      );
    }

    // MOCK FALSE
    try {
      const { data } = await fetcher.request<DeleteReturn>({
        url: `/keys/${key_id}`,
        method: "delete",
      });

      if (!data) {
        return formatMessageErrors("Erro na chamada");
      }

      return formatResponse<DeleteReturn>(data, false, "Deletado com sucesso");
    } catch (err) {
      return formatAxiosErrors(err);
    }
  };

  return {
    get,
    post,
    put,
    remove,
  };
};

export default initializeService;
