import ComplexProperty = require("./ComplexProperty");
import LobbyBypass = require("../Enumerations/LobbyBypass");
import OnlineMeetingAccessLevel = require("../Enumerations/OnlineMeetingAccessLevel");
import Presenters = require("../Enumerations/Presenters");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
			
 class OnlineMeetingSettings extends ComplexProperty {
	LobbyBypass: LobbyBypass;
	AccessLevel: OnlineMeetingAccessLevel;
	Presenters: Presenters;
	private lobbyBypass: LobbyBypass;
	private accessLevel: OnlineMeetingAccessLevel;
	private presenters: Presenters;
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("OnlineMeetingSettings.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("OnlineMeetingSettings.ts - WriteElementsToXml : Not implemented.");}
}
export = OnlineMeetingSettings;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
