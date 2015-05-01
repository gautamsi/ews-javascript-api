
    class VotingInformation extends ComplexProperty {
        UserOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
        VotingResponse: string;
        private userOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
        private votingResponse: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
