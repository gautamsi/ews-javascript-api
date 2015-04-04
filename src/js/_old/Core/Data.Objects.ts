//import ewsxml = require("./EwsServiceXmlReader");
import enums = require("../Enums");
module Microsoft.Exchange.WebServices.Data {


    //export module WSSecurityBasedCredentials {
    //    export var static WsAddressingHeadersFormat: string = "<wsa:Action soap:mustUnderstand='1'>http://schemas.microsoft.com/exchange/services/2006/messages/{0}</wsa:Action><wsa:ReplyTo><wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address></wsa:ReplyTo><wsa:To soap:mustUnderstand='1'>{1}</wsa:To>";
    //    export var static WsSecurityHeaderFormat: string = "<wsse:Security soap:mustUnderstand='1'>  {0}</wsse:Security>";
    //    export var static WsuTimeStampFormat: string = "<wsu:Timestamp><wsu:Created>{0:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Created><wsu:Expires>{1:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Expires></wsu:Timestamp>";
    //    export var static WsSecurityPathSuffix: string = "/wssecurity";
    //}


    //todo: should be done
    export class ImpersonatedUserId {
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
    //todo: json not implemented, should be done otherwise
    export class ManagementRoles {
        private userRoles: string[];
        private applicationRoles: string[];

        constructor(userRoles?: string[], applicationRoles?: string[]) {
            if (userRoles) {
                this.userRoles = userRoles;
            }

            if (applicationRoles) {
                this.applicationRoles = applicationRoles;
            }
        }
        //ToJsonObject(): Microsoft.Exchange.WebServices.Data.JsonObject { throw new Error("Not implemented."); }
        WriteRolesToXml(writer: EwsServiceXmlWriter, roles: string[], elementName: string): void {
            if (roles && roles.length > 0) {
                writer.WriteStartElement(XmlNamespace.Types, elementName);

                for (var role in roles) {
                    writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Role, XmlElementNames.Role, role);
                }

                writer.WriteEndElement();
            }
        }
        WriteToXml(writer: EwsServiceXmlWriter): void {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ManagementRole);
            this.WriteRolesToXml(writer, this.userRoles, XmlElementNames.UserRoles);
            this.WriteRolesToXml(writer, this.applicationRoles, XmlElementNames.ApplicationRoles);
            writer.WriteEndElement();
        }
    }
    //todo: should be done
    export class PrivilegedUserId {
        IdType: ConnectingIdType;
        Id: string;
        LogonType: PrivilegedLogonType;
        BudgetType: PrivilegedUserIdBudgetType;
        //private logonType: PrivilegedLogonType;
        //private idType: ConnectingIdType;
        //private id: string;
        //private budgetType: PrivilegedUserIdBudgetType;
        constructor(openType?: PrivilegedLogonType, idType?: ConnectingIdType, id?: string) {
            this.LogonType = openType;
            this.IdType = idType;
            this.Id = id;
        }
        WriteToXml(writer: EwsServiceXmlWriter, requestedServerVersion: ExchangeVersion): void {

            if (this.Id == null || this.Id === undefined || this.Id === "") {
                throw new Error("id can not be null");
            }

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.OpenAsAdminOrSystemService);
            writer.WriteAttributeString("", XmlElementNames.LogonType, PrivilegedLogonType[this.LogonType]);
            if (requestedServerVersion >= ExchangeVersion.Exchange2013 && this.BudgetType) {
                writer.WriteAttributeString("", XmlElementNames.BudgetType, PrivilegedUserIdBudgetType[this.BudgetType]);
            }

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ConnectingSID);
            writer.WriteElementValue(XmlNamespace.Types, ConnectingIdType[this.IdType], ConnectingIdType[this.IdType], this.Id);
            writer.WriteEndElement(); // ConnectingSID
            writer.WriteEndElement(); // OpenAsAdminOrSystemService
        }
    }






}

var _export = Microsoft.Exchange.WebServices.Data;
export = _export;