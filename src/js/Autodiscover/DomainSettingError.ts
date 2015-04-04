import AutodiscoverErrorCode = require("../Enumerations/AutodiscoverErrorCode");
import XmlElementNames = require("../Core/XmlElementNames");
import EwsXmlReader = require("../Core/EwsXmlReader");

class DomainSettingError {
    ErrorCode: AutodiscoverErrorCode;
    ErrorMessage: string;
    SettingName: string;
    //private errorCode: AutodiscoverErrorCode;
    //private errorMessage: string;
    //private settingName: string;
    LoadFromObject(obj: any): void {
        var errorstring: string = obj[XmlElementNames.ErrorCode];
        this.ErrorCode = AutodiscoverErrorCode[errorstring];
        this.ErrorMessage = obj[XmlElementNames.ErrorMessage];
        this.SettingName = obj[XmlElementNames.SettingName];
    }
    LoadFromXml(reader: EwsXmlReader): void {
        var parent = reader.CurrentNode;
        do {
            reader.Read();

            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames.ErrorCode:
                        var errorstring = reader.ReadElementValue();
                        this.ErrorCode = AutodiscoverErrorCode[errorstring];
                        break;
                    case XmlElementNames.ErrorMessage:
                        this.ErrorMessage = reader.ReadElementValue();
                        break;
                    case XmlElementNames.SettingName:
                        this.SettingName = reader.ReadElementValue();
                        break;
                }
            }
        }
        while (reader.HasRecursiveParentNode(parent, parent.localName));
        reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.
    }

}
export = DomainSettingError;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;