import ServiceError = require("../../Enumerations/ServiceError");
import ServiceResult = require("../../Enumerations/ServiceResult");
import XmlNamespace = require("../../Enumerations/XmlNamespace");

import PropertyDefinitionBase = require("../../PropertyDefinitions/PropertyDefinitionBase");
import IndexedPropertyDefinition = require("../../PropertyDefinitions/IndexedPropertyDefinition");
import ExtendedPropertyDefinition = require("../../PropertyDefinitions/ExtendedPropertyDefinition");

import SoapFaultDetails = require("../../Misc/SoapFaultDetails");

import ServiceResponseException = require("../../Exceptions/ServiceResponseException");

import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import XmlElementNames = require("../XmlElementNames");
import XmlAttributeNames = require("../XmlAttributeNames");
import ServiceObjectSchema = require("../ServiceObjects/Schemas/ServiceObjectSchema");

class ServiceResponse {
    get BatchProcessingStopped(): boolean { return (this.result == ServiceResult.Warning) && (this.errorCode == ServiceError.ErrorBatchProcessingStopped); }
    get Result(): ServiceResult { return this.result; }
    get ErrorCode(): ServiceError { return this.errorCode; }
    ErrorMessage: string;
    get ErrorDetails(): { [index: string]: string; } /*System.Collections.Generic.IDictionary<string, string>*/ { return this.errorDetails; }
    get ErrorProperties() { return this.errorProperties; }//System.Collections.ObjectModel.Collection<PropertyDefinitionBase>;
    private result: ServiceResult;
    private errorCode: ServiceError;
    //private errorMessage: string;
    private errorDetails: { [index: string]: string; } = {}; /*System.Collections.Generic.Dictionary<string, string>*/
    private errorProperties: PropertyDefinitionBase[] = [];// System.Collections.ObjectModel.Collection<PropertyDefinitionBase>;

    constructor(soapFaultDetails?: SoapFaultDetails, responseCode?: ServiceError, errorMessage?: string) {

        if (soapFaultDetails) {
            this.result = ServiceResult.Error;
            this.errorCode = soapFaultDetails.ResponseCode;
            this.ErrorMessage = soapFaultDetails.FaultString;
            this.errorDetails = soapFaultDetails.ErrorDetails;
        }

        if (responseCode) {
            this.result = ServiceResult.Error;
            this.errorCode = responseCode;
            this.ErrorMessage = errorMessage;
            this.errorDetails = null;
        }
    }

    InternalThrowIfNecessary(): void {
        if (this.Result == ServiceResult.Error) {
            throw new ServiceResponseException(this);
        }
    }
    Loaded(): void { /* virtual void to be implemented throw new Error("Not implemented.");*/ }
    LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean {
        if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.MessageXml) && !reader.IsEmptyElement) {
            this.ParseMessageXml(reader);

            return true;
        }
        else {
            return false;
        }
    }
    //LoadFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): void {
        if (!reader.IsElement(XmlNamespace.Messages, xmlElementName)) {
            reader.ReadStartElement(XmlNamespace.Messages, xmlElementName);
        }

        var attribute = reader.ReadAttributeValue(null, XmlAttributeNames.ResponseClass);
        debugger;
        this.result = ServiceResult[attribute];


        if (this.result == ServiceResult.Success || this.result == ServiceResult.Warning) {
            if (this.result == ServiceResult.Warning) {
                reader.Read();
                if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.MessageText)) {
                    this.ErrorMessage = reader.ReadElementValue();
                } else debugger;
            }
            reader.Read();
            if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.ResponseCode))
                this.errorCode = ServiceError[reader.ReadElementValue()];//XmlNamespace.Messages, XmlElementNames.ResponseCode);
            else debugger;
            if (this.result == ServiceResult.Warning) {
                reader.Read();
                if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.DescriptiveLinkKey))
                    reader.ReadElementValue();
                else debugger;
            }

            // If batch processing stopped, EWS returns an empty element. Skip over it.
            if (this.BatchProcessingStopped) {
                do {
                    reader.Read();
                }
                while (!reader.HasRecursiveParent(xmlElementName));
            }
            else {
                this.ReadElementsFromXml(reader);

                reader.ReadEndElementIfNecessary(XmlNamespace.Messages, xmlElementName);
            }
        }
        else {
            reader.Read();
            this.ErrorMessage = reader.ReadElementValue();//XmlNamespace.Messages, XmlElementNames.MessageText);
            reader.Read();
            this.errorCode = ServiceError[reader.ReadElementValue()];//XmlNamespace.Messages, XmlElementNames.ResponseCode);

            reader.Read();//ElementValue<int>(XmlNamespace.Messages, XmlElementNames.DescriptiveLinkKey);

            while (reader.HasRecursiveParent(/*XmlNamespace.Messages, */xmlElementName)) {
                reader.Read();

                //if (reader.IsStartElement()) {
                if (!this.LoadExtraErrorDetailsFromXml(reader, reader.LocalName)) {
                    reader.SkipCurrentElement();
                }
                //}
            }
            reader.SeekLast();
        }

        this.MapErrorCodeToErrorMessage();

        this.Loaded();
    }
    MapErrorCodeToErrorMessage(): void {
        // Use a better error message when an item cannot be updated because its changeKey is old.
        if (this.ErrorCode == ServiceError.ErrorIrresolvableConflict) {
            this.ErrorMessage = "item is out of date";// Strings.ItemIsOutOfDate;
        }
    }
    ParseMessageXml(reader: EwsServiceXmlReader): void {
        do {
            debugger;
            reader.Read();

            //if (reader.IsStartElement()) {
            switch (reader.LocalName) {
                case XmlElementNames.Value:
                    this.errorDetails[reader.ReadAttributeValue(null, XmlAttributeNames.Name)] = reader.ReadElementValue();
                    break;

                case XmlElementNames.FieldURI:
                    this.errorProperties.push(ServiceObjectSchema.FindPropertyDefinition(reader.ReadAttributeValue(null, XmlAttributeNames.FieldURI)));
                    break;

                case XmlElementNames.IndexedFieldURI:
                    this.errorProperties.push(
                        new IndexedPropertyDefinition(
                            reader.ReadAttributeValue(null, XmlAttributeNames.FieldURI),
                            reader.ReadAttributeValue(null, XmlAttributeNames.FieldIndex)));
                    break;

                case XmlElementNames.ExtendedFieldURI:
                    var extendedPropDef = new ExtendedPropertyDefinition();
                    extendedPropDef.LoadFromXml(reader);
                    this.errorProperties.push(extendedPropDef);
                    break;

                default:
                    break;
            }
            //}
        }
        while (!reader.HasRecursiveParent(/*XmlNamespace.Messages,*/ XmlElementNames.MessageXml));
        reader.SeekLast();
    }
    //ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): void { /* virtualvoid to be implemented throw new Error("Not implemented.");*/ }
    ThrowIfNecessary(): void { this.InternalThrowIfNecessary(); }
}

export = ServiceResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
