import {Convert} from "../ExtensionMethods";
import {Dictionary, DictionaryWithStringKey} from "../AltDictionary";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {Exception} from "../Exceptions/Exception";
import {ServiceError} from "../Enumerations/ServiceError";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

/**
 * Represents SoapFault details. 
 * 
 * @remarks ews-javascript-api -> removing internal modifier to, this class will be used to pass on to error delegate of promise instead of Exceptions
 */
export class SoapFaultDetails {

    private faultCode: string = null;
    private faultString: string = null;
    private faultActor: string = null;

    /**
     * Response code returned by EWS requests. 
     * Default to InternalServerError.
     */
    private responseCode: ServiceError = ServiceError.ErrorInternalServerError;

    /**
     * Message text of the error.
     */
    private message: string = null;

    /**
     * This is returned by Availability requests.
     */
    private errorCode: ServiceError = ServiceError.NoError;

    /**
     * This is returned by UM requests. It's the name of the exception that was raised.
     */
    private exceptionType: string = null;

    /**
     * When a schema validation error is returned, this is the line number in the request where the error occurred.
     */
    private lineNumber: number = 0;

    /**
     * When a schema validation error is returned, this is the offset into the line of the request where the error occurred.
     */
    private positionWithinLine: number = 0;

    /**
     * Dictionary of key/value pairs from the MessageXml node in the fault. Usually empty but there are a few cases where SOAP faults may include MessageXml details (e.g. CASOverBudgetException includes BackoffTime value).
     */
    private errorDetails: Dictionary<string, string> = new DictionaryWithStringKey<string>();

    /**
     * @internal Gets or sets the SOAP fault code.
     * 
     * @value   The SOAP fault code.
     */
    get FaultCode(): string {
        return this.faultCode;
    }
    set FaultCode(value: string) {
        this.faultCode = value;
    }

    /**
     * @internal Gets or sets the SOAP fault string.
     * 
     * @value   The fault string.
     */
    get FaultString(): string {
        return this.faultString;
    }
    set FaultString(value: string) {
        this.faultString = value;
    }

    /**
     * @internal Gets or sets the SOAP fault actor.
     * 
     * @value   The fault actor.
     */
    get FaultActor(): string {
        return this.faultActor;
    }
    set FaultActor(value: string) {
        this.faultActor = value;
    }

    /**
     * @internal Gets or sets the response code.
     * 
     * @value   The response code.
     */
    get ResponseCode(): ServiceError {
        return this.responseCode;
    }
    set ResponseCode(value: ServiceError) {
        this.responseCode = value;
    }

    /**
     * @internal Gets or sets the message.
     * 
     * @value   The message.
     */
    get Message(): string {
        return this.message;
    }
    set Message(value: string) {
        this.message = value;
    }

    /**
     * @internal Gets or sets the error code.
     * 
     * @value   The error code.
     */
    get ErrorCode(): ServiceError {
        return this.errorCode;
    }
    set ErrorCode(value: ServiceError) {
        this.errorCode = value;
    }

    /**
     * @internal Gets or sets the type of the exception.
     * 
     * @value   The type of the exception.
     */
    get ExceptionType(): string {
        return this.exceptionType;
    }
    set ExceptionType(value: string) {
        this.exceptionType = value;
    }

    /**
     * @internal Gets or sets the line number.
     * 
     * @value   The line number.
     */
    get LineNumber(): number {
        return this.lineNumber;
    }
    set LineNumber(value: number) {
        this.lineNumber = value;
    }

    /**
     * @internal Gets or sets the position within line.
     * 
     * @value   The position within line.
     */
    get PositionWithinLine(): number {
        return this.positionWithinLine;
    }
    set PositionWithinLine(value: number) {
        this.positionWithinLine = value;
    }

    /**
     * @internal Gets or sets the error details dictionary.
     * 
     * @value   The error details dictionary.
     */
    get ErrorDetails(): Dictionary<string, string> {
        return this.errorDetails;
    }
    set ErrorDetails(value: Dictionary<string, string>) {
        this.errorDetails = value;
    }

    /**
     * Exception generated based on ExchangeService parsing
     * Exception property to carry this to caller.
     */
    Exception: Exception;

    /**
     * @private Initializes a new instance of the **SoapFaultDetails** class.
     */
    constructor() {
    }

    /**
     * @internal Parses the soap:Fault content.
     *
     * @param   {any}   jsObject        The converted Xml JsObject.
     * @return  {SoapFaultDetails}      SOAP fault details.
     */
    static Parse(jsObject: any): SoapFaultDetails {
        var soapFaultDetails = new SoapFaultDetails();

        for (let key in jsObject) {

            switch (key) {
                case XmlElementNames.SOAPFaultCodeElementName:
                    soapFaultDetails.FaultCode = jsObject[key];
                    break;
                case XmlElementNames.SOAPFaultStringElementName:
                    soapFaultDetails.FaultString = jsObject[key];
                    break;
                case XmlElementNames.SOAPFaultActorElementName:
                    soapFaultDetails.FaultActor = jsObject[key];
                    break;
                case XmlElementNames.SOAPDetailElementName:
                    soapFaultDetails.ParseDetailNode(jsObject[key]);
                    break;
                default:
                    break;
            }
        }

        return soapFaultDetails;
    }

    /**
     * Parses the detail node.
     *
     * @param   {any}   jsObject   The detail node.
     */
    private ParseDetailNode(jsObject: any): void {
        for (let key in jsObject) {

            switch (key) {
                case XmlElementNames.EwsResponseCodeElementName:
                    // ServiceError couldn't be mapped to enum value, treat as an ISE
                    this.ResponseCode = ServiceError[<string>jsObject[key]] || ServiceError.ErrorInternalServerError;;
                    break;
                case XmlElementNames.EwsMessageElementName:
                    this.Message = jsObject[key];
                    break;
                case XmlElementNames.EwsLineElementName:
                    this.LineNumber = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.EwsPositionElementName:
                    this.PositionWithinLine = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.EwsErrorCodeElementName:
                    // ServiceError couldn't be mapped to enum value, treat as an ISE
                    this.ErrorCode = ServiceError[<string>jsObject[key]] || ServiceError.ErrorInternalServerError;
                    break;
                case XmlElementNames.EwsExceptionTypeElementName:
                    this.ExceptionType = jsObject[key];
                    break;
                case XmlElementNames.MessageXml:
                    this.ParseMessageXml(jsObject[key]);
                    break;
                default:
                    // Ignore any other details
                    break;
            }
        }
    }

    /**
     * Parses the message XML.
     *
     * @param   {any}   jsObject   The message Xml object.
     */
    private ParseMessageXml(jsObject: any): void {
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
                default:
                    EwsLogging.Assert(false, "SoapFaultDetails.ParseMessageXml", "Element: " + key + " - Please report example of this operation to ews-javascript-api repo to improve SoapFault parsing");
                    break;
            }
        }
    }
}