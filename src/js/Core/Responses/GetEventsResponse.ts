			
 class GetEventsResponse extends ServiceResponse {
	Results: GetEventsResults;
	private results: GetEventsResults;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	ReadElementsFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetEventsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			