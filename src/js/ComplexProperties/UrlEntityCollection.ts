import {UrlEntity} from "./UrlEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {
    CreateComplexProperty(xmlElementName: string): UrlEntity { throw new Error("UrlEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): UrlEntity { throw new Error("UrlEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: UrlEntity): string { throw new Error("UrlEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


//}



