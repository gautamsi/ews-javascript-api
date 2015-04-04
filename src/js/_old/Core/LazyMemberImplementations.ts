module Microsoft.Exchange.WebServices.Data {



    export interface GetPropertyDefinitionCallback{
        (version: ExchangeVersion):PropertyDefinition;
    }
    export interface CreateComplexPropertyDelegate<TComplexProperty extends ComplexProperty>{
        (): TComplexProperty;
    }
    //class GetPropertyDefinitionCallback extends System.MulticastDelegate {
    //    //BeginInvoke(version: ExchangeVersion, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
    //    //EndInvoke(result: System.IAsyncResult): PropertyDefinition{ throw new Error("Not implemented.");}
    //    //Invoke(version: ExchangeVersion): PropertyDefinition{ throw new Error("Not implemented.");}
    //}

    //class CreateComplexPropertyDelegate<TComplexProperty> extends System.MulticastDelegate {
    //    //BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
    //    //EndInvoke(result: System.IAsyncResult): TComplexProperty{ throw new Error("Not implemented.");}
    //    //Invoke(): TComplexProperty{ throw new Error("Not implemented.");}
    //}


}
