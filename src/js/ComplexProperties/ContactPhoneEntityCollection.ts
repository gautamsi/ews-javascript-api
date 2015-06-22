import {ContactPhoneEntity} from "./ContactPhoneEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {
    CreateComplexProperty(xmlElementName: string): ContactPhoneEntity { throw new Error("ContactPhoneEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): ContactPhoneEntity { throw new Error("ContactPhoneEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ContactPhoneEntity): string { throw new Error("ContactPhoneEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


