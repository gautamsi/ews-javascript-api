import {ConnectingIdType} from "../Enumerations/ConnectingIdType";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlElementNames} from "../Core/XmlElementNames";
    //todo: should be done
export class ImpersonatedUserId {
        IdType: ConnectingIdType;
        Id: string;
        //private idType: ConnectingIdType;
        //private id: string;

        constructor(idType?: ConnectingIdType, id?: string) {
            this.IdType = idType;
            this.Id = id;
        }

        /**@internal */
    WriteToXml(writer: EwsServiceXmlWriter): void {
            if (!this.Id || this.Id === "") {
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
