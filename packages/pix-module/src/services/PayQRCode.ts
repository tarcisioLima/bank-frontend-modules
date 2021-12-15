import formatAxiosErrors, {
  formatMessageErrors,
  formatResponse,
  formatYupErrors,
} from "../utils/formatResponse";
import { AxiosInstance } from "axios";
import payqrcodeMock from "../mocks/payqrcode";
import yup from "../config/yup";
import { REQUIRED_LABEL } from "../utils/constants";

export interface Post {
  code: string;
}

export type PostReturn = {
  id: any;
  authentication: string;
  created_at: string;
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
      const { id, created_at, authentication } = payqrcodeMock;
      return formatResponse<PostReturn>(
        {
          id,
          ...payload,
          authentication,
          created_at,
        },
        false,
        "Criado com sucesso"
      );
    }

    // MOCK FALSE
    try {
      const { data } = await fetcher.request<PostReturn>({
        url: `/pay-qrcode`,
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
