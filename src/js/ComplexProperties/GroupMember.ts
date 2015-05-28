import ComplexProperty = require("./ComplexProperty");
import EmailAddress = require("./EmailAddress");
import MemberStatus = require("../Enumerations/MemberStatus");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class GroupMember extends ComplexProperty {
    Key: string;
    AddressInformation: EmailAddress;
    Status: MemberStatus;
    private addressInformation: EmailAddress;
    private status: MemberStatus;
    private key: string;
    AddressInformationChanged(complexProperty: ComplexProperty): any { throw new Error("GroupMember.ts - AddressInformationChanged : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("GroupMember.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("GroupMember.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("GroupMember.ts - ReadAttributesFromXml : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("GroupMember.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("GroupMember.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GroupMember.ts - WriteElementsToXml : Not implemented."); }
}
export = GroupMember;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

