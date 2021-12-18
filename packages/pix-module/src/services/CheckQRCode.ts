import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import checkqrcodeMock from "../mocks/checkqrcode";
import yup from "../config/yup";
import { REQUIRED_LABEL } from "../utils/constants";

export interface Post {
  code: string;
}

export type PostReturn = {
  id?: any;
  receiver_name: string;
  receiver_document: string;
  receiver_bank: string;
  description?: string;
  amount?: number;
} & Post;

const PayloadSchema = yup.object().shape({
  code: yup.string().required(REQUIRED_LABEL),
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
      const {
        id,
        amount,
        code,
        description,
        receiver_bank,
        receiver_document,
        receiver_name,
      } = checkqrcodeMock;
      return formatResponse<PostReturn>(
        {
          id,
          ...payload,
          amount,
          description,
          code,
          receiver_bank,
          receiver_document,
          receiver_name,
        },
        false,
        "Criado com sucesso"
      );
    }

    // MOCK FALSE
    try {
      const { data } = await fetcher.request<PostReturn>({
        url: `/check-qrcode`,
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
