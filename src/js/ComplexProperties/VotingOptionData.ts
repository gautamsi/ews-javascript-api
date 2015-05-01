
class VotingOptionData extends ComplexProperty {
    DisplayName: string;
    SendPrompt: SendPrompt;
    private displayName: string;
    private sendPrompt: SendPrompt;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
