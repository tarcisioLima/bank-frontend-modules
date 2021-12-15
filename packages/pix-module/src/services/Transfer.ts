import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import transferMock from "../mocks/transfers";
import yup from "../config/yup";
import { REQUIRED_LABEL } from "../utils/constants";

export interface Post {
  amount: number;
  receiver_key: number;
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
  receiver_key: yup.string().required(REQUIRED_LABEL),
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
