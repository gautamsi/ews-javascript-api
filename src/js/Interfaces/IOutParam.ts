export interface IOutParam<T> {
    outValue: T;
    exception?: any;
    success?: boolean;
}