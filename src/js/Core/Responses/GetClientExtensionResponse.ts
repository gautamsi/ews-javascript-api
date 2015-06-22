import {ClientExtension} from "../../ComplexProperties/ClientExtension";
import {ServiceResponse} from "./ServiceResponse";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetClientExtensionResponse extends ServiceResponse {
    ClientExtensions: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
    RawMasterTableXml: string;
    private clientExtension: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
    private rawMasterTableXml: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetClientExtensionResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}




//}



