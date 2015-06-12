import {ServiceResponse} from "./ServiceResponse";
import {ExpandGroupResults} from "../../Misc/ExpandGroupResults";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class ExpandGroupResponse extends ServiceResponse {
    Members: ExpandGroupResults;
    private members: ExpandGroupResults;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ExpandGroupResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}




//}



