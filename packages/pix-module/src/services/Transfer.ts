import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import transferMock from "../mocks/transfers";
import yup from "../config/yup";
import { REQUIRED_LABEL, KEYTYPES } from "../utils/constants";
import keyTypeValidator from "../utils/keyTypeValidator";

export interface Post {
  amount: number;
  receiver_key: string | number;
  type_receiver_key: string;
  type_origin_account: string;
}

export type PostReturn = {
  id: any;
  status?: string;
  created_at: string;
  updated_at: string;
} & Post;

const PayloadSchema = yup.object().shape({
  amount: yup.number().required(REQUIRED_LABEL),
  receiver_key: yup.string().test("key-error", "", function (value: string) {
    const { type_receiver_key: type } = this.parent;
    const { path, createError } = this;

    const isValid = keyTypeValidator(type, value);
    console.log("TYPE");
    console.log("isValid: ", isValid ? "VALID" : "NOT VALID");

    return (
      isValid ||
      createError({
        path,
        message: `Chave do tipo ${type} não está no formato válido`,
      })
    );
  }),
  type_receiver_key: yup.mixed().oneOf(KEYTYPES).required(REQUIRED_LABEL),
  type_origin_account: yup
    .mixed()
    .oneOf(["corrente", "poupança"])
    .required(REQUIRED_LABEL),
});

const initializeService = (fetcher: AxiosInstance, isMock: boolean) => {
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
      const { id, status, created_at, updated_at } = transferMock;
      return formatResponse<PostReturn>(
        {
          id,
          ...payload,
          status,
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
        url: `/transfer`,
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
    post,
  };
};

export default initializeService;
