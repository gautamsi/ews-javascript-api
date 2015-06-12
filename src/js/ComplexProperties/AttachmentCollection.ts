import {FileAttachment} from "./FileAttachment";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
import {IOwnedProperty} from "../Interfaces/IOwnedProperty";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {ItemAttachment} from "./ItemAttachment";
import {Attachment} from "./Attachment";
import {EwsLogging} from "../Core/EwsLogging";

export class AttachmentCollection extends ComplexPropertyCollection<Attachment> implements IOwnedProperty {
    ___implementsInterface: string[] = ["IOwnedProperty", "ISelfValidate", "IJsonSerializable", "IEnumerable<TComplexProperty>", "ICustomUpdateSerializer", "IJsonCollectionDeserialize"];
    ___typeName: string = "Attachment";
    ___typeGenerics: string[] = ["ComplexProperty"];
	
	private owner: Item;
	get Owner(): ServiceObject { return this.owner; };
	set(value): void {
		EwsLogging.Assert(
			value != null && !(value instanceof Item),
			"AttachmentCollection.IOwnedProperty.set_Owner",
			"value is not a descendant of ItemBase");		
		this.owner = value;
	}
	AddFileAttachment(fileName: string): FileAttachment { throw new Error("AttachmentCollection.ts - AddFileAttachment : Not implemented."); }
	//AddFileAttachment(name: string, fileName: string): FileAttachment{ throw new Error("AttachmentCollection.ts - AddFileAttachment : Not implemented.");}
	//AddFileAttachment(name: string, contentStream: any /*System.IO.Stream*/): FileAttachment{ throw new Error("AttachmentCollection.ts - AddFileAttachment : Not implemented.");}
	//AddFileAttachment(name: string, content: any /*System.Byte[]*/): FileAttachment{ throw new Error("AttachmentCollection.ts - AddFileAttachment : Not implemented.");}
	AddItemAttachment<TItem extends Item>(): ItemAttachment<TItem> { throw new Error("AttachmentCollection.ts - AddItemAttachment<TItem extends Item> : Not implemented."); }
	Clear(): void { throw new Error("AttachmentCollection.ts - Clear : Not implemented."); }
	ClearChangeLog(): void { throw new Error("AttachmentCollection.ts - ClearChangeLog : Not implemented."); }
	CreateComplexProperty(xmlElementName: string): Attachment { throw new Error("AttachmentCollection.ts - CreateComplexProperty : Not implemented."); }
	CreateDefaultComplexProperty(): Attachment { throw new Error("AttachmentCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
	GetCollectionItemXmlElementName(complexProperty: Attachment): string { throw new Error("AttachmentCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
	HasUnprocessedChanges(): boolean { throw new Error("AttachmentCollection.ts - HasUnprocessedChanges : Not implemented."); }
	InternalCreateAttachments(parentItemId: string, attachments: Attachment[] /*System.Collections.Generic.IEnumerable<Attachment>*/): void { throw new Error("AttachmentCollection.ts - InternalCreateAttachments : Not implemented."); }
	InternalDeleteAttachments(attachments: Attachment[] /*System.Collections.Generic.IEnumerable<Attachment>*/): void { throw new Error("AttachmentCollection.ts - InternalDeleteAttachments : Not implemented."); }
	Remove(attachment: Attachment): boolean { throw new Error("AttachmentCollection.ts - Remove : Not implemented."); }
	RemoveAt(index: number): void { throw new Error("AttachmentCollection.ts - RemoveAt : Not implemented."); }
	Save(): void { throw new Error("AttachmentCollection.ts - Save : Not implemented."); }
	Validate(): void { throw new Error("AttachmentCollection.ts - Validate : Not implemented."); }
}






			

