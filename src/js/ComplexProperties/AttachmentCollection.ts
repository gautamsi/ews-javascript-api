import {FileAttachment} from "./FileAttachment";
import {IOwnedProperty} from "../Interfaces/IOwnedProperty";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {TypeContainer} from "../TypeContainer";
import {GenericItemAttachment} from "./GenericItemAttachment";
import {EwsLogging} from "../Core/EwsLogging";

import {Attachment} from "./Attachment";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents an item's attachment collection.
 */
export class AttachmentCollection extends ComplexPropertyCollection<Attachment> implements IOwnedProperty {
    ___implementsInterface: string[] = ["IOwnedProperty", "ISelfValidate", "IJsonSerializable", "IEnumerable<TComplexProperty>", "ICustomUpdateSerializer", "IJsonCollectionDeserialize"];
    ___typeName: string = "Attachment";
    ___typeGenerics: string[] = ["ComplexProperty"];
	/**
	 * The item owner that owns this attachment collection
	 */
	private owner: Item;
	get Owner(): ServiceObject { return this.owner; };
	set Owner(value) {
		EwsLogging.Assert(
			value != null && !(value instanceof TypeContainer.Item), // instanceof Item), //info: can not check instanceof to avoid circular dependency in js. TypeContainer is workaround
			"AttachmentCollection.IOwnedProperty.set_Owner",
			"value is not a descendant of ItemBase");
		this.owner = <Item>value;
	}
	/**
	 * Initializes a new instance of AttachmentCollection.
	 */
	constructor() {
		super();
	}	
	/**
	 * Adds a file attachment to the collection.
	 *
	 * @param   {[string]}	fileName   The name of the file representing the content of the attachment.
	 * @return  {[FileAttachment]} 		A FileAttachment instance.
	 */
	AddFileAttachment(fileName: string): FileAttachment { EwsLogging.DebugLog("AttachmentCollection.ts - AddFileAttachment : Not implemented."); return null; }
	//AddFileAttachment(name: string, fileName: string): FileAttachment{ throw new Error("AttachmentCollection.ts - AddFileAttachment : Not implemented.");}
	//AddFileAttachment(name: string, contentStream: any /*System.IO.Stream*/): FileAttachment{ throw new Error("AttachmentCollection.ts - AddFileAttachment : Not implemented.");}
	//AddFileAttachment(name: string, content: any /*System.Byte[]*/): FileAttachment{ throw new Error("AttachmentCollection.ts - AddFileAttachment : Not implemented.");}
	AddItemAttachment<TItem extends Item>(): GenericItemAttachment<TItem> { EwsLogging.DebugLog("AttachmentCollection.ts - AddItemAttachment<TItem extends Item> : Not implemented."); return null; }
	Clear(): void { EwsLogging.DebugLog("AttachmentCollection.ts - Clear : Not implemented."); }
	ClearChangeLog(): void { EwsLogging.DebugLog("AttachmentCollection.ts - ClearChangeLog : Not implemented."); }
	CreateComplexProperty(xmlElementName: string): Attachment { EwsLogging.DebugLog("AttachmentCollection.ts - CreateComplexProperty : Not implemented."); return null; }
	CreateDefaultComplexProperty(): Attachment { EwsLogging.DebugLog("AttachmentCollection.ts - CreateDefaultComplexProperty : Not implemented."); return null; }
	GetCollectionItemXmlElementName(complexProperty: Attachment): string { EwsLogging.DebugLog("AttachmentCollection.ts - GetCollectionItemXmlElementName : Not implemented."); return null; }
	HasUnprocessedChanges(): boolean { EwsLogging.Assert(true, "AttachmentCollection.ts - HasUnprocessedChanges :", "Not implemented."); return false }
	InternalCreateAttachments(parentItemId: string, attachments: Attachment[] /*System.Collections.Generic.IEnumerable<Attachment>*/): void { EwsLogging.DebugLog("AttachmentCollection.ts - InternalCreateAttachments : Not implemented."); }
	InternalDeleteAttachments(attachments: Attachment[] /*System.Collections.Generic.IEnumerable<Attachment>*/): void { EwsLogging.DebugLog("AttachmentCollection.ts - InternalDeleteAttachments : Not implemented."); }
	Remove(attachment: Attachment): boolean { EwsLogging.DebugLog("AttachmentCollection.ts - Remove : Not implemented."); return null; }
	RemoveAt(index: number): void { EwsLogging.DebugLog("AttachmentCollection.ts - RemoveAt : Not implemented."); }
	Save(): void { EwsLogging.DebugLog("AttachmentCollection.ts - Save : Not implemented."); }
	Validate(): void { EwsLogging.DebugLog("AttachmentCollection.ts - Validate : Not implemented."); }
}