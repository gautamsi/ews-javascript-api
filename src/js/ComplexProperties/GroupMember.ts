import {ComplexProperty} from "./ComplexProperty";
import {EmailAddress} from "./EmailAddress";
import {MemberStatus} from "../Enumerations/MemberStatus";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class GroupMember extends ComplexProperty {
    Key: string;
    AddressInformation: EmailAddress;
    Status: MemberStatus;
    private addressInformation: EmailAddress;
    private status: MemberStatus;
    private key: string;
    AddressInformationChanged(complexProperty: ComplexProperty): any { throw new Error("GroupMember.ts - AddressInformationChanged : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("GroupMember.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("GroupMember.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GroupMember.ts - ReadAttributesFromXml : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("GroupMember.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("GroupMember.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GroupMember.ts - WriteElementsToXml : Not implemented."); }
}


//}




