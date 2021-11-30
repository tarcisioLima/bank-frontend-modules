import { ApiResponse } from "../@types";
declare const formatAxiosErrors: (error: any | void, showFields?: boolean) => ApiResponse;
declare const formatMessageErrors: (message: string) => ApiResponse;
declare const formatYupErrors: (fields: Object) => ApiResponse;
declare const formatResponse: <T>(data: T, error: boolean, message: string) => ApiResponse<T>;
export default formatAxiosErrors;
export { formatResponse, formatYupErrors, formatMessageErrors };
