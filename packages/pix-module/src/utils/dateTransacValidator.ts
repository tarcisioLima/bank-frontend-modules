import {
  isBefore,
  isDate,
  isValid,
  parseISO,
  setHours,
  setMinutes,
  setSeconds,
} from "date-fns";

const dateTransacValidator = (sentDate: string) => {
  const today = setSeconds(setMinutes(setHours(new Date(), 0), 0), 0);

  const result = {
    isValid: true,
    message: `formato inválido de data, informe uma data no formato: YYYY-MM-DD`,
  };

  /* IF NO FIELD IS SENT, SO IS TRUE BECAUSE IS NOT REQUIRED */
  if (typeof sentDate !== "string") {
    return result;
  }

  if (!isDate(parseISO(sentDate))) {
    result.isValid = false;
    return result;
  }

  const parsedDate = parseISO(sentDate);

  if (!isValid(parsedDate)) {
    result.isValid = false;
    return result;
  }

  if (String(parsedDate) === String(today)) {
    result.isValid = true;
    return result;
  } else if (isBefore(parsedDate, today)) {
    result.isValid = false;
    result.message = "data passada não é aceita";
    return result;
  }

  return result;
};

export default dateTransacValidator;
