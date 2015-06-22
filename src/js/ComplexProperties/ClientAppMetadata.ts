import {ComplexProperty} from "./ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ClientAppMetadata extends ComplexProperty {
    EndNodeUrl: string;
    ActionUrl: string;
    AppStatus: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ClientAppMetadata.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


