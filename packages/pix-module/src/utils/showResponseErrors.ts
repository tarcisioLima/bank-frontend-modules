export interface Notification {
  message: string;
  description: string;
}

export type NotificationType = Notification | Boolean;

const showResponseErrors = (
  error: any | void,
  showFields = true
): NotificationType => {
  let notification = { message: "Alerta", description: "" };

  if (!error) return false;

  if (
    (error.response && error.response.status === 500) ||
    (error.response && error.response.status === 400) ||
    (error.response && error.response.status === 403) ||
    (error.response && error.response.status === 401)
  ) {
    const { response } = error;
    Object.entries(response.data).map((arr) => {
      if (!showFields) {
        notification.description = String(arr[1]);
      } else {
        notification.description = `${arr[0]}: ${arr[1]}`;
      }
    });
    return notification;
  }
  return false;
};

export default showResponseErrors;
