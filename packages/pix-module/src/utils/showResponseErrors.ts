type Notification = {
  message: string;
  description: string;
};

const showResponseErrors = (error: any, showFields = true): Notification => {
  let notification = { message: "Alerta", description: "" };

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
  }
  return notification;
};

export default showResponseErrors;
