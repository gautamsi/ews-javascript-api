import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {OofSettings} from "../../ComplexProperties/Availability/OofSettings";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class SetUserOofSettingsRequest extends SimpleServiceRequestBase {
	SmtpAddress: string;
	OofSettings: OofSettings;
	private smtpAddress: string;
	private oofSettings: OofSettings;
	Execute(): ServiceResponse{ throw new Error("SetUserOofSettingsRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("SetUserOofSettingsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("SetUserOofSettingsRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("SetUserOofSettingsRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("SetUserOofSettingsRequest.ts - ParseResponse : Not implemented.");}
	Validate(): void{ throw new Error("SetUserOofSettingsRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SetUserOofSettingsRequest.ts - WriteElementsToXml : Not implemented.");}
}






			

