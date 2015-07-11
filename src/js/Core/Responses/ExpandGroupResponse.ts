import {ExchangeService} from "../ExchangeService";
import {ExpandGroupResults} from "../../Misc/ExpandGroupResults";
import {ServiceResponse} from "./ServiceResponse";
export class ExpandGroupResponse extends ServiceResponse {
    private members: ExpandGroupResults = new ExpandGroupResults();
    get Members(): ExpandGroupResults {
        return this.members;
    }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        super.ReadElementsFromXmlJsObject(responseObject, service);
        this.Members.LoadFromXmlJsObject(responseObject, service);
    }
}