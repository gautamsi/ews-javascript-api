import {ComplexProperty} from "./ComplexProperty";
import {LobbyBypass} from "../Enumerations/LobbyBypass";
import {OnlineMeetingAccessLevel} from "../Enumerations/OnlineMeetingAccessLevel";
import {Presenters} from "../Enumerations/Presenters";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class OnlineMeetingSettings extends ComplexProperty {
	LobbyBypass: LobbyBypass;
	AccessLevel: OnlineMeetingAccessLevel;
	Presenters: Presenters;
	private lobbyBypass: LobbyBypass;
	private accessLevel: OnlineMeetingAccessLevel;
	private presenters: Presenters;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("OnlineMeetingSettings.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("OnlineMeetingSettings.ts - WriteElementsToXml : Not implemented.");}
}






			

