import {ContactEntity} from "./ContactEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";

export class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {
    CreateComplexProperty(xmlElementName: string): ContactEntity { throw new Error("ContactEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): ContactEntity { throw new Error("ContactEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ContactEntity): string { throw new Error("ContactEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}

