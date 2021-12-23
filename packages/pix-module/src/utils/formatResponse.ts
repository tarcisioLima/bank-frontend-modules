import { ApiResponse } from "../@types";
import { ValidationError } from "yup";

const formatAxiosErrors = (
  error: any | void,
  showFields = true
): ApiResponse => {
  const notification = {
    data: undefined,
    error: true,
    message: "Erro na chamada",
  };

  if (!error) return notification;

  if (
    (error.response && error.response.status === 500) ||
    (error.response && error.response.status === 400) ||
    (error.response && error.response.status === 403) ||
    (error.response && error.response.status === 401)
  ) {
    const { response } = error;
    Object.entries(response.data).map((arr) => {
      if (!showFields) {
        notification.message = String(arr[1]);
      } else {
        notification.message = `${arr[0]}: ${arr[1]}`;
      }
    });
    return notification;
  }
  return notification;
};

const formatMessageErrors = (message: string): ApiResponse => ({
  data: undefined,
  error: true,
  message,
});

const formatYupErrors = (errorValidations: ValidationError): ApiResponse => {
  const notification = {
    data: undefined,
    error: true,
    message: "",
  };

  let errorMessage = "Erro na chamada";

  if (errorValidations.inner !== undefined) {
    errorMessage = errorValidations.inner
      .map((value: ValidationError) => {
        return { field: String(value.path), errors: value.errors };
      })
      .reduce((prev, curr) => {
        const cleanErrors = curr.errors.map((error) =>
          error.replace(curr.field, "")
        );
        const joinErrors = `Campo ${curr.field}: ${cleanErrors.join(
          " ,"
        )}`.replace(/  +/g, " ");
        return prev === "" ? joinErrors : `${prev}, ${joinErrors}`;
      }, "");
  }

  notification.message = errorMessage;

  return notification;
};

const formatResponse = <T>(
  data: T,
  error: boolean,
  message: string
): ApiResponse<T> => ({
  data,
  error,
  message,
});

export default formatAxiosErrors;

export { formatResponse, formatYupErrors, formatMessageErrors };
