			
 class OnlineMeetingSettings extends ComplexProperty {
	LobbyBypass: LobbyBypass;
	AccessLevel: OnlineMeetingAccessLevel;
	Presenters: Presenters;
	private lobbyBypass: LobbyBypass;
	private accessLevel: OnlineMeetingAccessLevel;
	private presenters: Presenters;
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = OnlineMeetingSettings;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			