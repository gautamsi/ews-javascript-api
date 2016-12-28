import {ExchangeService} from "./ExchangeService";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {GetObjectInstanceDelegate} from "../Misc/DelegateTypes";
import {ServiceObject} from "./ServiceObjects/ServiceObject";
import {PropertySet} from "./PropertySet";
import {ServiceLocalException} from "../Exceptions/ServiceLocalException";

import {StringHelper} from "../ExtensionMethods";


import {EwsXmlReader} from "./EwsXmlReader";
/**@internal */
export class EwsServiceXmlReader extends EwsXmlReader {
    get Service(): ExchangeService { return this.service; }
    private service: ExchangeService;
    //#region Constructor
    constructor(rawXML: string, service: ExchangeService) {
        super(rawXML);
        this.service = service;
    }
    //#endregion
    ConvertStringToDateTime(dateTimeString: string): Date { throw new Error("EwsServiceXmlReader.ts - ConvertStringToDateTime : Not implemented."); }
    ConvertStringToUnspecifiedDate(dateTimeString: string): Date { throw new Error("EwsServiceXmlReader.ts - ConvertStringToUnspecifiedDate : Not implemented."); }
    ReadElementValueAsDateTime(): Date { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsDateTime : Not implemented."); }
    //ReadElementValueAsDateTime(xmlNamespace: XmlNamespace, localName: string): Date { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsDateTime : Not implemented."); }
    ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone(): Date { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone : Not implemented."); }
    ReadElementValueAsUnspecifiedDate(): Date { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsUnspecifiedDate : Not implemented."); }
    //ReadServiceObjectsCollectionFromXml(collectionXmlNamespace: XmlNamespace, collectionXmlElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<T>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): System.Collections.Generic.List<T> { throw new Error("EwsServiceXmlReader.ts - ReadServiceObjectsCollectionFromXml : Not implemented."); }
    //ReadServiceObjectsCollectionFromXml(collectionXmlElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<T>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): System.Collections.Generic.List<T> { throw new Error("EwsServiceXmlReader.ts - ReadServiceObjectsCollectionFromXml : Not implemented."); }
    // ReadServiceObjectsCollectionFromXml<TServiceObject extends ServiceObject>(collectionXmlElementName: string,
    //     getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>,
    //     clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean,
    //     collectionXmlNamespace: XmlNamespace = XmlNamespace.Messages): TServiceObject[] /*System.Collections.Generic.List<T>*/ {

    //     // condensed both overload in one.

    //     //return this.ReadServiceObjectsCollectionFromXml<TServiceObject>(
    //     //    XmlNamespace.Messages,
    //     //    collectionXmlElementName,
    //     //    getObjectInstanceDelegate,
    //     //    clearPropertyBag,
    //     //    requestedPropertySet,
    //     //    summaryPropertiesOnly);

    //     var serviceObjects: TServiceObject[] = [];//new List<TServiceObject>();
    //     var serviceObject: TServiceObject = null;

    //     if (!this.IsElement(collectionXmlNamespace, collectionXmlElementName)) {
    //         this.ReadStartElement(collectionXmlNamespace, collectionXmlElementName);
    //     }

    //     if (!this.IsEmptyElement) {
    //         do {
    //             this.Read();

    //             //if (this.IsStartElement()) { //todo: test for specific startElement if possible - cant check that with javascript XML Node Walker
    //             serviceObject = getObjectInstanceDelegate(this.Service, this.LocalName);

    //             if (serviceObject == null) {
    //                 this.SkipCurrentElement();
    //             }
    //             else {
    //                 if (this.LocalName.toLowerCase() !== serviceObject.GetXmlElementName().toLowerCase()) {
    //                     throw new ServiceLocalException(
    //                         StringHelper.Format(
    //                             "The type of the object in the store ({0}) does not match that of the local object ({1}).",
    //                             this.LocalName,
    //                             serviceObject.GetXmlElementName()));
    //                 }

    //                 serviceObject.LoadFromXmlJsObject(
    //                     this,
    //                     clearPropertyBag,
    //                     requestedPropertySet,
    //                     summaryPropertiesOnly);

    //                 serviceObjects.push(serviceObject);
    //             }
    //             //}
    //         }
    //         while (!this.HasRecursiveParent(/*collectionXmlNamespace, */collectionXmlElementName));
    //         this.SeekLast(); // to let next Read() parse right node.
    //     }

    //     return serviceObjects;

    // }
}


