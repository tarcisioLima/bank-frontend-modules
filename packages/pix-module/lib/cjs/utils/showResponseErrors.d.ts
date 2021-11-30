export interface Notification {
    message: string;
    description: string;
}
export declare type NotificationType = Notification | Boolean;
declare const showResponseErrors: (error: any | void, showFields?: boolean) => NotificationType;
export default showResponseErrors;
