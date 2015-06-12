import {ConversationId} from "./ConversationId";
import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class ConversationRequest extends ComplexProperty {//ISelfValidate, IJsonSerializable
    ConversationId: ConversationId;
    SyncState: string;
    InternalToJson(service: ExchangeService): any { throw new Error("ConversationRequest.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("ConversationRequest.ts - InternalValidate : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("ConversationRequest.ts - WriteToXml : Not implemented."); }
}


