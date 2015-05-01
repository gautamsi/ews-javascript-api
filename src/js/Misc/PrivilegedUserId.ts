//todo: should be done
class PrivilegedUserId {
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

export = PrivilegedUserId;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
