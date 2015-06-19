import {EwsXmlReader} from "../../Core/EwsXmlReader";
import {Uri} from "../../Uri";
import {AutodiscoverErrorCode} from "../../Enumerations/AutodiscoverErrorCode";
import {XmlElementNames} from "../../Core/XmlElementNames";

export class AutodiscoverResponse {
    ErrorCode: AutodiscoverErrorCode;
    ErrorMessage: string;
    RedirectionUrl: Uri;
    //private errorCode: AutodiscoverErrorCode;
    //private errorMessage: string;
    //private redirectionUrl: Uri;
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
