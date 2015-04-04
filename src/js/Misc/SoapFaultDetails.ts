import EwsXmlReader = require("../Core/EwsXmlReader");
import XmlElementNames = require("../Core/XmlElementNames");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import ServiceError = require("../Enumerations/ServiceError");

//todo: fix this - import Xml = require("System.Xml");

class SoapFaultDetails {
    FaultCode: string;
    FaultString: string;
    FaultActor: string;
    ResponseCode: ServiceError;
    Message: string;
    ErrorCode: ServiceError;
    ExceptionType: string;
    LineNumber: number;
    PositionWithinLine: number;
    ErrorDetails: { [index: string]: string }; //System.Collections.Generic.Dictionary<string, string>;
    //private faultCode: string;
    //private faultString: string;
    //private faultActor: string;
    //private responseCode: ServiceError;
    //private message: string;
    //private errorCode: ServiceError;
    //private exceptionType: string;
    //private lineNumber: number;
    //private positionWithinLine: number;
    //private errorDetails: any;//System.Collections.Generic.Dictionary<string, string>;
    static ParseObject(obj: any): SoapFaultDetails {
        var soapFaultDetails = new SoapFaultDetails();
        soapFaultDetails.FaultCode = obj[XmlElementNames.SOAPFaultCodeElementName];
        soapFaultDetails.FaultString = obj[XmlElementNames.SOAPFaultStringElementName];
        soapFaultDetails.FaultActor = obj[XmlElementNames.SOAPFaultActorElementName];
        soapFaultDetails.ParseDetailNode(obj[XmlElementNames.SOAPDetailElementName]);
        return soapFaultDetails;
    }

    static Parse(reader: EwsXmlReader, soapNamespace: XmlNamespace): SoapFaultDetails {
        var soapFaultDetails = new SoapFaultDetails();

        do {
            reader.Read();
            if (reader.NodeType == 1){ //todo: make node type to match   System.Xml.XmlNodeType.Element) { // Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames.SOAPFaultCodeElementName:
                        soapFaultDetails.FaultCode = reader.ReadElementValue();
                        break;

                    case XmlElementNames.SOAPFaultStringElementName:
                        soapFaultDetails.FaultString = reader.ReadElementValue();
                        break;

                    case XmlElementNames.SOAPFaultActorElementName:
                        soapFaultDetails.FaultActor = reader.ReadElementValue();
                        break;

                    case XmlElementNames.SOAPDetailElementName:
                        soapFaultDetails.ParseDetailNode(reader);
                        break;

                    default:
                        break;
                }
            }
        }
        while (reader.HasRecursiveParent(XmlElementNames.SOAPFaultElementName));

        return soapFaultDetails;
    }
    //Parse(jsonObject: JsonObject): SoapFaultDetails{ throw new Error("Not implemented.");}
    ParseDetailNodeFromObject(obj: any): void {

    }
    ParseDetailNode(reader: EwsXmlReader): any { throw new Error("Not implemented."); }
    ParseMessageXml(reader: EwsXmlReader): any { throw new Error("Not implemented."); }
}

export = SoapFaultDetails;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;