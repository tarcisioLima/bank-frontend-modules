export const PAGINATION_LIMIT = 100;
export const REQUIRED_LABEL = "obrigatório";
export const INVALID_FORMAT = "formato inválido";

export const KEYTYPES = ["PHONE", "DOCUMENT_NUMBER", "EMAIL", "RANDOM"];
export const ACCOUNTTYPES = ["corrente", "poupança"];

export const CpfCnpjRegex =
  /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/g;

export const PhoneRegex = /\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}/g;

export const CepRegex = /[0-9]{5}-[0-9]{3}$/g;

export const DateRegex = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/g;

export const HourRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/g;
