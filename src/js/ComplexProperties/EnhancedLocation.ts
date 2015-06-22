import {PersonaPostalAddress} from "./PersonaPostalAddress";
import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class EnhancedLocation extends ComplexProperty {
    DisplayName: string;
    Annotation: string;
    PersonaPostalAddress: PersonaPostalAddress;
    private displayName: string;
    private annotation: string;
    private personaPostalAddress: PersonaPostalAddress;
    InternalToJson(service: ExchangeService): any { throw new Error("EnhancedLocation.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("EnhancedLocation.ts - InternalValidate : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EnhancedLocation.ts - LoadFromJson : Not implemented."); }
    PersonaPostalAddress_OnChange(complexProperty: ComplexProperty): any { throw new Error("EnhancedLocation.ts - PersonaPostalAddress_OnChange : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EnhancedLocation.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EnhancedLocation.ts - WriteElementsToXml : Not implemented."); }
}


//}



