export type ApiResponse<T = undefined> = {
  data: T;
  error: boolean;
  message: string;
};

export type PixType = "PHONE" | "DOCUMENT_NUMBER" | "EMAIL" | "RANDOM";

export type TransactionType = "debit" | "credit";
