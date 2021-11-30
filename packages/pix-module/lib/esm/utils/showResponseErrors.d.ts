export interface Notification {
    title: string;
    description: string;
}
export declare type NotificationType = Notification | Boolean;
declare const showResponseErrors: (error: any | void, showFields?: boolean) => NotificationType;
declare const showMessageResponseErrors: (description: string) => {
    title: string;
    description: string;
};
declare const showYupResponseErrors: (fields: Object) => {
    title: string;
    description: string;
};
export default showResponseErrors;
export { showYupResponseErrors, showMessageResponseErrors };
