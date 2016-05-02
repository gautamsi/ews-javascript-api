import {EwsLogging} from "../EwsLogging";
import {Dictionary, DictionaryWithStringKey} from "../../AltDictionary";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ExtendedPropertyDefinition} from "../../PropertyDefinitions/ExtendedPropertyDefinition";
import {IndexedPropertyDefinition} from "../../PropertyDefinitions/IndexedPropertyDefinition";
import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {ServiceError} from "../../Enumerations/ServiceError";
import {ServiceObjectSchema} from "../ServiceObjects/Schemas/ServiceObjectSchema";
import {ServiceResponseException} from "../../Exceptions/ServiceResponseException";
import {ServiceResult} from "../../Enumerations/ServiceResult";
import {SoapFaultDetails} from "../../Misc/SoapFaultDetails";
import {Strings} from "../../Strings";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

/**
 * Represents the standard response to an Exchange Web Services operation.
 */
export class ServiceResponse {

    private result: ServiceResult;
    private errorCode: ServiceError;
    private errorMessage: string;
    private errorDetails: Dictionary<string, string> = new DictionaryWithStringKey<string>();
    private errorProperties: PropertyDefinitionBase[] = [];;

    /**
     * @internal Gets a value indicating whether a batch request stopped processing before the end.
     */
    get BatchProcessingStopped(): boolean {
        return (this.result == ServiceResult.Warning) && (this.errorCode == ServiceError.ErrorBatchProcessingStopped);
    }

    /**
     * Gets the result associated with this response.
     */
    get Result(): ServiceResult {
        return this.result;
    }

    /**
     * Gets the error code associated with this response.
     */
    get ErrorCode(): ServiceError {
        return this.errorCode;
    }

    /**
     * Gets a detailed error message associated with the response. If Result is set to Success, ErrorMessage returns null. 
     * ErrorMessage is localized according to the PreferredCulture property of the ExchangeService object that was used to call the method that generated the response.
     */
    get ErrorMessage(): string {
        return this.errorMessage;
    }

    /**
     * Gets error details associated with the response. If Result is set to Success, ErrorDetailsDictionary returns null. 
     * Error details will only available for some error codes. For example, when error code is ErrorRecurrenceHasNoOccurrence, the ErrorDetailsDictionary will contain keys for EffectiveStartDate and EffectiveEndDate.
     * 
     * @value   The error details dictionary.
     */
    get ErrorDetails(): Dictionary<string, string> {
        return this.errorDetails;
    }

    /**
     * Gets information about property errors associated with the response. If Result is set to Success, ErrorProperties returns null. 
     * ErrorProperties is only available for some error codes. For example, when the error code is ErrorInvalidPropertyForOperation, ErrorProperties will contain the definition of the property that was invalid for the request.
     * 
     * @value   The error properties list.
     */
    get ErrorProperties(): PropertyDefinitionBase[] {
        return this.errorProperties;
    }

    /**
     * @internal Initializes a new instance of the **ServiceResponse** class. 
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **ServiceResponse** class. 
     *
     * @param   {SoapFaultDetails}  soapFaultDetails   The SOAP fault details.
     */
    constructor(soapFaultDetails: SoapFaultDetails);
    /**
     * @internal Initializes a new instance of the **ServiceResponse** class. 
     * This is intended to be used by unit tests to create a fake service error response
     *
     * @param   {ServiceError}  responseCode   Response code
     * @param   {string}        errorMessage   Detailed error message
     */
    constructor(responseCode: ServiceError, errorMessage: string);
    constructor(soapFaultDetailsOrResponseCode?: SoapFaultDetails | ServiceError, errorMessage?: string) {
        var argsLength = arguments.length;
        if (argsLength == 0) return;

        if (typeof soapFaultDetailsOrResponseCode === 'number') {//(responseCode: ServiceError, errorMessage: string)
            this.result = ServiceResult.Error;
            this.errorCode = soapFaultDetailsOrResponseCode;
            this.errorMessage = errorMessage;
            this.errorDetails = null;
        }
        else {//(soapFaultDetails: SoapFaultDetails)
            this.result = ServiceResult.Error;
            this.errorCode = soapFaultDetailsOrResponseCode.ResponseCode;
            this.errorMessage = soapFaultDetailsOrResponseCode.FaultString;
            this.errorDetails = soapFaultDetailsOrResponseCode.ErrorDetails;
        }
    }

    /**
     * @internal Internal method that throws a ServiceResponseException if this response has its Result property set to Error.
     */
    InternalThrowIfNecessary(): void {
        if (this.Result == ServiceResult.Error) {
            throw new ServiceResponseException(this);
        }
    }

    /**
     * @internal Called when the response has been loaded from XML.
     */
    Loaded(): void { /* virtual void to be implemented throw new Error("Not implemented.");*/ }

    //ref: info: LoadExtraErrorDetailsFromXml is bypassed, no use when reading converted xml object
    //LoadExtraErrorDetailsFromXml(EwsServiceXmlReader reader, string xmlElementName)

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 responseObject        Json Object converted from XML.
     * @param   {ExchangeService}     service               The service.    
     */
    LoadFromXmlJsObject(responseObject: any, service: ExchangeService): any {

        this.result = ServiceResult[<string>responseObject[XmlAttributeNames.ResponseClass]];
        this.errorCode = ServiceError[<string>responseObject[XmlElementNames.ResponseCode]];

        // TODO: Deal with a JSON version of "LoadExtraDetailsFromXml"
        if (this.result == ServiceResult.Warning || this.result == ServiceResult.Error) {
            this.errorMessage = responseObject[XmlElementNames.MessageText];
            if (responseObject[XmlElementNames.MessageXml]) {
                this.ParseMessageXml(responseObject[XmlElementNames.MessageXml]);
            }
        }

        if (this.result == ServiceResult.Success || this.result == ServiceResult.Warning) {
            if (!this.BatchProcessingStopped) {
                this.ReadElementsFromXmlJsObject(responseObject, service);
            }
        }

        this.MapErrorCodeToErrorMessage();

        this.Loaded();

    }

    /**
     * @internal Called after the response has been loaded from XML in order to map error codes to "better" error messages.
     */
    MapErrorCodeToErrorMessage(): void {
        // Use a better error message when an item cannot be updated because its changeKey is old.
        if (this.ErrorCode == ServiceError.ErrorIrresolvableConflict) {
            this.errorMessage = Strings.ItemIsOutOfDate;
        }
    }

    /**
     * Parses the message XML.
     *
     * @param   {any}   jsObject   The MessageXml Object.
     */
    ParseMessageXml(jsObject: any): void {

        for (var key in jsObject) {
            if (key.indexOf("__") === 0) {
                continue;
            }

            switch (key) {
                case XmlElementNames.Value:
                    let values = EwsServiceJsonReader.ReadAsArray(jsObject, key);
                    values.forEach((value, index) => {
                        let name = value[XmlAttributeNames.Name];
                        if (name) {
                            if (this.ErrorDetails.containsKey(name)) {
                                name = name + " - " + (index + 1)
                            }
                            this.errorDetails.Add(name, value[key]);
                        }
                    });
                case XmlElementNames.FieldURI:
                    this.errorProperties.push(ServiceObjectSchema.FindPropertyDefinition(jsObject[key][XmlAttributeNames.FieldURI]));
                    break;

                case XmlElementNames.IndexedFieldURI:
                    let indexFieldUriObject = jsObject[key];
                    this.errorProperties.push(
                        new IndexedPropertyDefinition(
                            indexFieldUriObject[XmlAttributeNames.FieldURI],
                            indexFieldUriObject[XmlAttributeNames.FieldIndex]));
                    break;

                case XmlElementNames.ExtendedFieldURI:
                    let extendedPropDef = new ExtendedPropertyDefinition();
                    extendedPropDef.LoadPropertyValueFromXmlJsObject(jsObject[key]);
                    this.errorProperties.push(extendedPropDef);
                    break;
                default:
                    EwsLogging.Assert(false, "SoapFaultDetails.ParseMessageXml", "Element: " + key + " - Please report example of this operation to ews-javascript-api repo to improve SoapFault parsing");
                    break;
            }
        }
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        /* virtualvoid to be implemented throw new Error("Not implemented.");*/
        let caller = (<any>this.constructor).name || "ServiceResponse->child";
        EwsLogging.Assert(false, caller + ".ReadElementsFromXmlJsObject", "BatchProcessingStopped is true but ReadElementsFromXmlJsObject is not available in derived class to call.")
    }

    /**
     * @internal Throws a ServiceResponseException if this response has its Result property set to Error.
     */
    ThrowIfNecessary(): void {
        this.InternalThrowIfNecessary();
    }
}