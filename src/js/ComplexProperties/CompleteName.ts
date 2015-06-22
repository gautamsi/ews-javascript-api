import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";

export class CompleteName extends ComplexProperty {
    Title: string;
    GivenName: string;
    MiddleName: string;
    Surname: string;
    Suffix: string;
    Initials: string;
    FullName: string;
    NickName: string;
    YomiGivenName: string;
    YomiSurname: string;
    private title: string;
    private givenName: string;
    private middleName: string;
    private surname: string;
    private suffix: string;
    private initials: string;
    private fullName: string;
    private nickname: string;
    private yomiGivenName: string;
    private yomiSurname: string;
    InternalToJson(service: ExchangeService): any { throw new Error("CompleteName.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("CompleteName.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("CompleteName.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("CompleteName.ts - WriteElementsToXml : Not implemented."); }
}

