import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class NonIndexableItemStatistic {
    Mailbox: string;
    ItemCount: number;
    ErrorMessage: string;
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemStatistic[]/*System.Collections.Generic.List<NonIndexableItemStatistic>*/ { throw new Error("NonIndexableItemStatistic.ts - LoadFromXml : Not implemented."); }
}


//}



