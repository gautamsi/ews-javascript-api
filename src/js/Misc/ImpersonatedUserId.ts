    //todo: should be done
    class ImpersonatedUserId {
        IdType: enums.Data.ConnectingIdType;
        Id: string;
        //private idType: ConnectingIdType;
        //private id: string;

        constructor(idType?: enums.Data.ConnectingIdType, id?: string) {
            this.IdType = idType;
            this.Id = id;
        }

        WriteToXml(writer: EwsServiceXmlWriter): void {
            if (this.Id || this.Id === "") {
                throw new Error("Id property must be set before serialization");// ArgumentException(Strings.IdPropertyMustBeSet);
            }

            writer.WriteStartElement(enums.Data.XmlNamespace.Types, XmlElementNames.ExchangeImpersonation);
            writer.WriteStartElement(enums.Data.XmlNamespace.Types, XmlElementNames.ConnectingSID);

            // For 2007 SP1, use PrimarySmtpAddress for type SmtpAddress
            var connectingIdTypeLocalName =
                (this.IdType == enums.Data.ConnectingIdType.SmtpAddress) && (writer.Service.RequestedServerVersion == enums.Data.ExchangeVersion.Exchange2007_SP1)
                    ? XmlElementNames.PrimarySmtpAddress
                    : enums.Data.ConnectingIdType[this.IdType];

            writer.WriteElementValue(
                enums.Data.XmlNamespace.Types,
                connectingIdTypeLocalName,
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
