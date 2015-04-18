

//no change needed
export interface ComplexPropertyChangedDelegate {
    (complexProperty: ComplexProperty): void;
}
//no change needed
export interface GetObjectInstanceDelegate<T> {
    (service: ExchangeService, xmlElementName: string): T;
}

export interface CustomXmlSerializationDelegate {
    (writer: any /*System.Xml.XmlWriter*/): any;
}
//class CustomXmlSerializationDelegate extends System.MulticastDelegate {
//    //BeginInvoke(writer: System.Xml.XmlWriter, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
//    //Invoke(writer: System.Xml.XmlWriter): any{ throw new Error("Not implemented.");}
//}

export interface ResponseHeadersCapturedHandler {
    (responseHeaders: any /*System.Net.WebHeaderCollection*/): any;
}
//class ResponseHeadersCapturedHandler extends System.MulticastDelegate {
//    //BeginInvoke(responseHeaders: System.Net.WebHeaderCollection, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
//    //Invoke(responseHeaders: System.Net.WebHeaderCollection): any{ throw new Error("Not implemented.");}
//}


export interface ServiceObjectChangedDelegate {
    (serviceObject: ServiceObject): any;
}
//class ServiceObjectChangedDelegate extends System.MulticastDelegate {
//    //BeginInvoke(serviceObject: ServiceObject, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
//    //Invoke(serviceObject: ServiceObject): any{ throw new Error("Not implemented.");}
//}


export interface PropertyBagChangedDelegate {
    (): any;
}
//class PropertyBagChangedDelegate extends System.MulticastDelegate {
//    //BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
//    //Invoke(): any{ throw new Error("Not implemented.");}
//}
