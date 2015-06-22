import {PhoneEntity} from "./PhoneEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
    CreateComplexProperty(xmlElementName: string): PhoneEntity { throw new Error("PhoneEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): PhoneEntity { throw new Error("PhoneEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string { throw new Error("PhoneEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


//}




