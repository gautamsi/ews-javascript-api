import { ItemAttachment } from "../ComplexProperties/ItemAttachment";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { PropertyDefinition } from "../PropertyDefinitions/PropertyDefinition";
import { ComplexProperty } from "../ComplexProperties/ComplexProperty";
import { ExchangeService } from "../Core/ExchangeService";
import { ServiceObject } from "../Core/ServiceObjects/ServiceObject";
import { Dictionary } from "../AltDictionary";


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
//    //BeginInvoke(writer: System.Xml.XmlWriter, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
//    //Invoke(writer: System.Xml.XmlWriter): any{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
//}

export interface ResponseHeadersCapturedHandler {
    (responseHeaders: Dictionary<string, string>): void;
}
//class ResponseHeadersCapturedHandler extends System.MulticastDelegate {
//    //BeginInvoke(responseHeaders: System.Net.WebHeaderCollection, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
//    //Invoke(responseHeaders: System.Net.WebHeaderCollection): any{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
//}


export interface ServiceObjectChangedDelegate {
    (serviceObject: ServiceObject): void;
}
//class ServiceObjectChangedDelegate extends System.MulticastDelegate {
//    //BeginInvoke(serviceObject: ServiceObject, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
//    //Invoke(serviceObject: ServiceObject): any{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
//}


export interface PropertyBagChangedDelegate {
    (): void;
}
//class PropertyBagChangedDelegate extends System.MulticastDelegate {
//    //BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): any{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
//    //Invoke(): any{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
//}





////// ---- do not belong here, need to have some place for them.


export interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition;
}
export interface CreateComplexPropertyDelegate<TComplexProperty extends ComplexProperty> {
    (): TComplexProperty;
}
//class GetPropertyDefinitionCallback extends System.MulticastDelegate {
//    //BeginInvoke(version: ExchangeVersion, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): PropertyDefinition{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
//    //Invoke(version: ExchangeVersion): PropertyDefinition{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
//}

//class CreateComplexPropertyDelegate<TComplexProperty> extends System.MulticastDelegate {
//    //BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
//    //EndInvoke(result: System.IAsyncResult): TComplexProperty{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
//    //Invoke(): TComplexProperty{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
//}


export interface CreateServiceObjectWithServiceParam {
    (srv: ExchangeService): any;
}

export interface CreateServiceObjectWithAttachmentParam {
    (itemAttachment: ItemAttachment, isNew: boolean): any
}

    //class CreateServiceObjectWithAttachmentParam extends System.MulticastDelegate {
    //    BeginInvoke(itemAttachment: ItemAttachment, isNew: boolean, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
    //    Invoke(itemAttachment: ItemAttachment, isNew: boolean): any{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
    //}
    //class CreateServiceObjectWithServiceParam extends System.MulticastDelegate {
    //    BeginInvoke(srv: ExchangeService, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("DelegateTypes.ts - BeginInvoke : Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("DelegateTypes.ts - EndInvoke : Not implemented.");}
    //    Invoke(srv: ExchangeService): any{ throw new Error("DelegateTypes.ts - Invoke : Not implemented.");}
    //}

