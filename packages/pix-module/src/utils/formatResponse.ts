import { ApiResponse } from "../@types";

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

const formatYupErrors = (fields: Object): ApiResponse => {
  const notification = {
    data: undefined,
    error: true,
    message: "Erro na chamada",
  };

  notification.message = Object.values(fields).join(", ");

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
