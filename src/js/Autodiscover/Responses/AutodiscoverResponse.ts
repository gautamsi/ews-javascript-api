import EwsXmlReader = require("../../Core/EwsXmlReader");
import AutodiscoverErrorCode = require("../../Enumerations/AutodiscoverErrorCode");
import XmlElementNames = require("../../Core/XmlElementNames");

class AutodiscoverResponse {
    ErrorCode: AutodiscoverErrorCode;
    ErrorMessage: string;
    RedirectionUrl: string;//System.Uri;
    //private errorCode: AutodiscoverErrorCode;
    //private errorMessage: string;
    //private redirectionUrl: string;//System.Uri;
    LoadFromXml(reader: EwsXmlReader, endElementName: string): void {
        switch (reader.LocalName) {
            case XmlElementNames.ErrorCode:
                var errorstring = reader.ReadElementValue();
                this.ErrorCode = AutodiscoverErrorCode[errorstring];
                break;
            case XmlElementNames.ErrorMessage:
                this.ErrorMessage = reader.ReadElementValue();
                break;
            default:
                break;
        }
    }
    LoadFromJson(obj: any/*, endElementName: string*/): void {

        var errorstring: string = obj[XmlElementNames.ErrorCode];
        this.ErrorCode = AutodiscoverErrorCode[errorstring];

        var errmsg = obj[XmlElementNames.ErrorMessage]
        this.ErrorMessage = errmsg;

    }
}
export = AutodiscoverResponse;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;