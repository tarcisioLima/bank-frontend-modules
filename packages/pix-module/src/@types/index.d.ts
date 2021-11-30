export type ApiResponse<T = undefined> = {
  data: T;
  error: boolean;
  message: string;
};
