import {EmailUserEntity} from "./EmailUserEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
    CreateComplexProperty(xmlElementName: string): EmailUserEntity { throw new Error("EmailUserEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): EmailUserEntity { throw new Error("EmailUserEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string { throw new Error("EmailUserEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


//}



