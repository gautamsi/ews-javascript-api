import {EwsXmlReader} from "../Core/EwsXmlReader";
import {DocumentSharingLocation} from "./DocumentSharingLocation";
import {XmlElementNames} from "../Core/XmlElementNames";

export class DocumentSharingLocationCollection {
    Entries: DocumentSharingLocation[] = [];//System.Collections.Generic.List<DocumentSharingLocation>;
    /**@internal */
    static LoadFromXml(reader: EwsXmlReader): DocumentSharingLocationCollection { throw new Error("Not implemented. Depricated, use LoadFromJson"); }
    static LoadFromJson(obj: any): DocumentSharingLocationCollection {
        var instance = new DocumentSharingLocationCollection();

        var element = XmlElementNames.AlternateMailbox;
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];

        for (var i = 0; i < responses.length; i++) {
            instance.Entries.push(responses[i]); //skipped processing individual objects in collection against DocumentSharingLocation, fix if there is parsing error later
            //DocumentSharingLocation.LoadFromJson(responses[i]);
            //instance.Entries.push(responses);
        }

        return instance;

    }
}
