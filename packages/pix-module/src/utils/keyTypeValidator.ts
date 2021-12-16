import validateDocNumber from "./docNumberValidator";
import validateEmail from "./emailValidator";
import validateMobilePhone from "./mobilePhoneValidator";

const keyTypeValidator = (type: string, value: string): boolean => {
  let isValid = false;

  if (!type) {
    isValid = true;
  }

  switch (type) {
    case "EMAIL":
      isValid = validateEmail(value);
      break;
    case "DOCUMENT_NUMBER":
      isValid = validateDocNumber(value);
      break;
    case "PHONE":
      isValid = validateMobilePhone(value);
      break;
    case "RANDOM":
      isValid = true;
      break;
  }

  return isValid;
};

export default keyTypeValidator;
