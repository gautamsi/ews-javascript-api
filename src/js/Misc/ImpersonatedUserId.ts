import ConnectingIdType = require("../Enumerations/ConnectingIdType");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlElementNames = require("../Core/XmlElementNames");
    //todo: should be done
    class ImpersonatedUserId {
        IdType: ConnectingIdType;
        Id: string;
        //private idType: ConnectingIdType;
        //private id: string;

        constructor(idType?: ConnectingIdType, id?: string) {
            this.IdType = idType;
            this.Id = id;
        }

        WriteToXml(writer: EwsServiceXmlWriter): void {
            if (this.Id || this.Id === "") {
                throw new Error("Id property must be set before serialization");// ArgumentException(Strings.IdPropertyMustBeSet);
            }

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ExchangeImpersonation);
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ConnectingSID);

            // For 2007 SP1, use PrimarySmtpAddress for type SmtpAddress
            var connectingIdTypeLocalName =
                (this.IdType == ConnectingIdType.SmtpAddress) && (writer.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1)
                    ? XmlElementNames.PrimarySmtpAddress
                    : ConnectingIdType[this.IdType];

            writer.WriteElementValue(
                XmlNamespace.Types,
                connectingIdTypeLocalName,
                this.Id);

            writer.WriteEndElement(); // ConnectingSID
            writer.WriteEndElement(); // ExchangeImpersonation
        }
    }
export = ImpersonatedUserId;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
