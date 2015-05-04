import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");
import ComplexProperty = require("../ComplexProperties/ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");


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





////// ---- do not belong here, need to have some place for them.


export interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition;
}
export interface CreateComplexPropertyDelegate<TComplexProperty extends ComplexProperty> {
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






//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
