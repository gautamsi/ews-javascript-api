import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import XmlElementNames = require("../Core/XmlElementNames");
//todo: json not implemented, should be done otherwise
class ManagementRoles {
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

            for (var role of roles) {
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


export = ManagementRoles;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

