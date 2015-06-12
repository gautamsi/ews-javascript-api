import { ExchangeService } from "../Core/ExchangeService";

export interface IJsonSerializable {
    ToJson(service: ExchangeService): any;
}








