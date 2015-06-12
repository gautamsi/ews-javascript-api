import {UserId} from "./UserId";
import {ComplexProperty} from "./ComplexProperty";
import {DelegatePermissions} from "./DelegatePermissions";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class DelegateUser extends ComplexProperty {
    UserId: UserId;
    Permissions: DelegatePermissions;
    ReceiveCopiesOfMeetingMessages: boolean;
    ViewPrivateItems: boolean;
    private userId: UserId;
    private permissions: DelegatePermissions;
    private receiveCopiesOfMeetingMessages: boolean;
    private viewPrivateItems: boolean;
    InternalToJson(service: ExchangeService): any { throw new Error("DelegateUser.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("DelegateUser.ts - InternalValidate : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("DelegateUser.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("DelegateUser.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    ValidateAddDelegate(): any { throw new Error("DelegateUser.ts - ValidateAddDelegate : Not implemented."); }
    ValidateUpdateDelegate(): any { throw new Error("DelegateUser.ts - ValidateUpdateDelegate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DelegateUser.ts - WriteElementsToXml : Not implemented."); }
}


