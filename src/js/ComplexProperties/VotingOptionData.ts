import {ComplexProperty} from "./ComplexProperty";
import {SendPrompt} from "../Enumerations/SendPrompt";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class VotingOptionData extends ComplexProperty {
    DisplayName: string;
    SendPrompt: SendPrompt;
    private displayName: string;
    private sendPrompt: SendPrompt;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("VotingOptionData.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("VotingOptionData.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



