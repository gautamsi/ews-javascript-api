			
 class AttachmentCollection extends ComplexPropertyCollection<Attachment> implements IOwnedProperty {
	private Owner: ServiceObject;
	private owner: Item;
	AddFileAttachment(fileName: string): FileAttachment{ throw new Error("Not implemented.");}
	//AddFileAttachment(name: string, fileName: string): FileAttachment{ throw new Error("Not implemented.");}
	//AddFileAttachment(name: string, contentStream: any /*System.IO.Stream*/): FileAttachment{ throw new Error("Not implemented.");}
	//AddFileAttachment(name: string, content: any /*System.Byte[]*/): FileAttachment{ throw new Error("Not implemented.");}
	AddItemAttachment(): ItemAttachment<TItem>{ throw new Error("Not implemented.");}
	Clear(): void{ throw new Error("Not implemented.");}
	ClearChangeLog(): void{ throw new Error("Not implemented.");}
	CreateComplexProperty(xmlElementName: string): Attachment{ throw new Error("Not implemented.");}
	CreateDefaultComplexProperty(): Attachment{ throw new Error("Not implemented.");}
	GetCollectionItemXmlElementName(complexProperty: Attachment): string{ throw new Error("Not implemented.");}
	HasUnprocessedChanges(): boolean{ throw new Error("Not implemented.");}
	InternalCreateAttachments(parentItemId: string, attachments: Attachment[] /*System.Collections.Generic.IEnumerable<Attachment>*/): void{ throw new Error("Not implemented.");}
	InternalDeleteAttachments(attachments: Attachment[] /*System.Collections.Generic.IEnumerable<Attachment>*/): void{ throw new Error("Not implemented.");}
	Remove(attachment: Attachment): boolean{ throw new Error("Not implemented.");}
	RemoveAt(index: number): void{ throw new Error("Not implemented.");}
	Save(): void{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
}
export = AttachmentCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			