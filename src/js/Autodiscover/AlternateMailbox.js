"use strict";
//todo: fix this - import Xml = require("System.Xml");
Object.defineProperty(exports, "__esModule", { value: true });
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var AlternateMailbox = /** @class */ (function () {
    function AlternateMailbox() {
    }
    //private type: string;
    //private displayName: string;
    //private legacyDN: string;
    //private server: string;
    //private smtpAddress: string;
    //private ownerSmtpAddress: string;
    /**@internal */
    AlternateMailbox.prototype.LoadFromXml = function (reader) {
        var altMailbox = new AlternateMailbox();
        do {
            reader.Read();
            if (reader.NodeType == 1) { //todo:  1 = System.Xml.XmlNodeType.Element) {
                switch (reader.LocalName) {
                    case XmlElementNames_1.XmlElementNames.Type:
                        altMailbox.Type = reader.ReadElementValue(); //  reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames_1.XmlElementNames.DisplayName:
                        altMailbox.DisplayName = reader.ReadElementValue(); //reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames_1.XmlElementNames.LegacyDN:
                        altMailbox.LegacyDN = reader.ReadElementValue(); //reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames_1.XmlElementNames.Server:
                        altMailbox.Server = reader.ReadElementValue(); //reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames_1.XmlElementNames.SmtpAddress:
                        altMailbox.SmtpAddress = reader.ReadElementValue(); //reader.ReadElementValue<string>();
                        break;
                    case XmlElementNames_1.XmlElementNames.OwnerSmtpAddress:
                        altMailbox.OwnerSmtpAddress = reader.ReadElementValue(); //reader.ReadElementValue<string>();
                        break;
                    default:
                        break;
                }
            }
        } while (!reader.IsElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.AlternateMailbox));
        reader.SeekLast(); // to go back to last one, fix for xmlnode based reader.
        return altMailbox;
    };
    AlternateMailbox.LoadFromJson = function (obj) { throw new Error("this was skipped as not needed at dev time, fix this"); };
    return AlternateMailbox;
}());
exports.AlternateMailbox = AlternateMailbox;
