import {EmailAddressEntity} from "./EmailAddressEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {
    CreateComplexProperty(xmlElementName: string): EmailAddressEntity { throw new Error("EmailAddressEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): EmailAddressEntity { throw new Error("EmailAddressEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: EmailAddressEntity): string { throw new Error("EmailAddressEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}



