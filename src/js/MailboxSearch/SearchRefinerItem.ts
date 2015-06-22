import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class SearchRefinerItem {
    Name: string;
    Value: string;
    Count: number;
    Token: string;
    LoadFromXml(reader: EwsServiceXmlReader): SearchRefinerItem { throw new Error("SearchRefinerItem.ts - LoadFromXml : Not implemented."); }
}


//}



