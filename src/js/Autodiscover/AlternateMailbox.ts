//todo: fix this - import Xml = require("System.Xml");

import EwsXmlReader = require("../Core/EwsXmlReader");
import XmlElementNames = require("../Core/XmlElementNames");
import XmlNamespace = require("../Enumerations/XmlNamespace");

class AlternateMailbox {
    Type: string;
    DisplayName: string;
    LegacyDN: string;
    Server: string;
    SmtpAddress: string;
    OwnerSmtpAddress: string;
    //private type: string;
    //private displayName: string;
    //private legacyDN: string;
    //private server: string;
    //private smtpAddress: string;
    //private ownerSmtpAddress: string;
    LoadFromXml(reader: EwsXmlReader): AlternateMailbox {
        var altMailbox: AlternateMailbox = new AlternateMailbox();

        do {
            reader.Read();
            if (reader.NodeType == 1){//todo:  1 = System.Xml.XmlNodeType.Element) {
                switch (reader.LocalName) {
                    case XmlElementNames.Type:
                        altMailbox.Type = reader.ReadElementValue();//  reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames.DisplayName:
                        altMailbox.DisplayName = reader.ReadElementValue();//reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames.LegacyDN:
                        altMailbox.LegacyDN = reader.ReadElementValue();//reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames.Server:
                        altMailbox.Server = reader.ReadElementValue();//reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames.SmtpAddress:
                        altMailbox.SmtpAddress = reader.ReadElementValue();//reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames.OwnerSmtpAddress:
                        altMailbox.OwnerSmtpAddress = reader.ReadElementValue();//reader.ReadElementValue<string>();
                        break;
                    default:
                        break;
                }
            }
        }
        while (!reader.IsElement(XmlNamespace.Autodiscover, XmlElementNames.AlternateMailbox));
        reader.SeekLast(); // to go back to last one, fix for xmlnode based reader.
        return altMailbox;
    }
    static LoadFromJson(obj: any): AlternateMailbox { throw new Error("this was skipped as not needed at dev time, fix this"); }

}


export = AlternateMailbox;



//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;