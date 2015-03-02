declare module Microsoft.Exchange.WebServices.Data {
    interface ComplexPropertyChangedDelegate {
        (complexProperty: ComplexProperty): void;
    }

    export interface GetObjectInstanceDelegate<T> {
        (service: ExchangeService, xmlElementName: string): T;
    }
}