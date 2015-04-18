import EwsXmlReader = require("../Core/EwsXmlReader");
import XmlElementNames = require("../Core/XmlElementNames");
import XmlAttributeNames = require("../Core/XmlAttributeNames");
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
    ErrorDetails: { [index: string]: string } = {}; //System.Collections.Generic.Dictionary<string, string>;
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


    static ParseFromJson(obj: any): SoapFaultDetails {
        var soapFaultDetails = new SoapFaultDetails();
        soapFaultDetails.FaultCode = obj[XmlElementNames.SOAPFaultCodeElementName];
        soapFaultDetails.FaultString = obj[XmlElementNames.SOAPFaultStringElementName];
        soapFaultDetails.FaultActor = obj[XmlElementNames.SOAPFaultActorElementName];

        if (obj[XmlElementNames.SOAPDetailElementName]) {
            soapFaultDetails.ParseDetailNodeFromJson(obj[XmlElementNames.SOAPDetailElementName]);
        }

        return soapFaultDetails;
    }
    //Parse(jsonObject: JsonObject): SoapFaultDetails{ throw new Error("Not implemented.");}
    ParseDetailNodeFromJson(obj: any): void {

        if (obj[XmlElementNames.EwsResponseCodeElementName])
            this.ResponseCode = obj[XmlElementNames.EwsResponseCodeElementName] || ServiceError.ErrorInternalServerError;

        if (obj[XmlElementNames.EwsMessageElementName])
            this.Message = obj[XmlElementNames.EwsMessageElementName];

        if (obj[XmlElementNames.EwsLineElementName])
            this.LineNumber = parseInt(obj[XmlElementNames.EwsLineElementName]);

        if (obj[XmlElementNames.EwsPositionElementName])
            this.PositionWithinLine = parseInt(obj[XmlElementNames.EwsPositionElementName]);

        if (obj[XmlElementNames.EwsErrorCodeElementName])
            this.ErrorCode = obj[XmlElementNames.EwsErrorCodeElementName] || ServiceError.ErrorInternalServerError;

        if (obj[XmlElementNames.EwsExceptionTypeElementName])
            this.ExceptionType = obj[XmlElementNames.EwsExceptionTypeElementName];

        if (obj[XmlElementNames.MessageXml])
            this.ParseMessageXmlFromJson(obj[XmlElementNames.MessageXml]);

    }
    ParseMessageXmlFromJson(obj: any): void {
        if (obj[XmlElementNames.Value]) {
            var element = XmlElementNames.Value;
            var messageValues;
            if (Object.prototype.toString.call(obj[element]) === "[object Array]")
                messageValues = obj[element];
            else
                messageValues = [obj[element]];

            for (var i = 0; i < messageValues.length; i++) {
                var messageValue = messageValues[i];
                var name = messageValue[XmlAttributeNames.Name];
                if (name) {
                    var value = messageValue[element];
                    this.ErrorDetails[name] = value;
                }

                this.ErrorDetails;
                //AlternateMailbox.LoadFromJson(responses[i]);
                //instance.Entries.push(responses);
            }
        }
    }

    static Parse(reader: EwsXmlReader, soapNamespace: XmlNamespace): SoapFaultDetails {
        var soapFaultDetails = new SoapFaultDetails();

        do {
            reader.Read();
            if (reader.NodeType == 1) { //todo: make node type to match   System.Xml.XmlNodeType.Element) { // Node.ELEMENT_NODE) {
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
    ParseDetailNode(reader: EwsXmlReader): any { throw new Error("Not implemented."); }
    ParseMessageXml(reader: EwsXmlReader): any { throw new Error("Not implemented."); }

}

export = SoapFaultDetails;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;