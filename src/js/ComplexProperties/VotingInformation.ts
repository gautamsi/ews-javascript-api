import {VotingOptionData} from "./VotingOptionData";
import {ComplexProperty} from "./ComplexProperty";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class VotingInformation extends ComplexProperty {
    UserOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
    VotingResponse: string;
    private userOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
    private votingResponse: string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("VotingInformation.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("VotingInformation.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



