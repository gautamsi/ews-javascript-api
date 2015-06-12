import {AddressEntity} from "./AddressEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";

export class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
    CreateComplexProperty(xmlElementName: string): AddressEntity { throw new Error("AddressEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): AddressEntity { throw new Error("AddressEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: AddressEntity): string { throw new Error("AddressEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}

