import ComplexProperty = require("./ComplexProperty");
import RulePredicates = require("./RulePredicates");
import RuleActions = require("./RuleActions");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
			
 class Rule extends ComplexProperty {
	Id: string;
	DisplayName: string;
	Priority: number;
	IsEnabled: boolean;
	IsNotSupported: boolean;
	IsInError: boolean;
	Conditions: RulePredicates;
	Actions: RuleActions;
	Exceptions: RulePredicates;
	private ruleId: string;
	private displayName: string;
	private priority: number;
	private isEnabled: boolean;
	private isNotSupported: boolean;
	private isInError: boolean;
	private conditions: RulePredicates;
	private actions: RuleActions;
	private exceptions: RulePredicates;
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = Rule;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
