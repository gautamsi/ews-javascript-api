import {DateTime} from "../../DateTime";
import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";
import {ServiceResponse} from "./ServiceResponse";
export class GetPasswordExpirationDateResponse extends ServiceResponse {
    private passwordExpirationDate: DateTime = null;
    get PasswordExpirationDate(): DateTime {
        return this.passwordExpirationDate;
    }
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("GetPasswordExpirationDateResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        super.ReadElementsFromXmlJsObject(responseObject, service);
        this.passwordExpirationDate = service.ConvertUniversalDateTimeStringToLocalDateTime(responseObject[XmlElementNames.PasswordExpirationDate]);
    }
}