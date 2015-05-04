			
 class GetStreamingEventsResponse extends ServiceResponse {
	Results: GetStreamingEventsResults;
	ErrorSubscriptionIds: string[] /*System.Collections.Generic.List<string>*/;
	private results: GetStreamingEventsResults;
	private request: HangingServiceRequestBase;
	LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean{ throw new Error("Not implemented.");}
	ReadElementsFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetStreamingEventsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			