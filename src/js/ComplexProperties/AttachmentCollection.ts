import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { ArrayHelper, Convert, StringHelper } from "../ExtensionMethods";
import { CreateAttachmentException } from "../Exceptions/CreateAttachmentException";
import { CreateAttachmentResponse } from "../Core/Responses/CreateAttachmentResponse";
import { DeleteAttachmentException } from "../Exceptions/DeleteAttachmentException";
import { DeleteAttachmentResponse } from "../Core/Responses/DeleteAttachmentResponse";
import { EwsLogging } from "../Core/EwsLogging";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { FileAttachment } from "./FileAttachment";
import { ICustomUpdateSerializer } from "../Interfaces/ICustomXmlUpdateSerializer";
import { IOwnedProperty } from "../Interfaces/IOwnedProperty";
import { ISelfValidate } from "../Interfaces/ISelfValidate";
import { Item } from "../Core/ServiceObjects/Items/Item";
import { ItemAttachment } from "./ItemAttachment";
import { ItemAttachmentOf } from "./ItemAttachmentOf";
import { ItemInfo } from "../Core/ServiceObjects/Items/ItemInfo";
import { Promise } from "../Promise";
import { ServiceObject } from "../Core/ServiceObjects/ServiceObject";
import { ServiceResponseCollection } from "../Core/Responses/ServiceResponseCollection";
import { ServiceResult } from "../Enumerations/ServiceResult";
import { ServiceValidationException } from "../Exceptions/ServiceValidationException";
import { Strings } from "../Strings";
import { TypeContainer } from "../TypeContainer";
import { XmlElementNames } from "../Core/XmlElementNames";

import { Attachment } from "./Attachment";
import { ComplexPropertyCollection } from "./ComplexPropertyCollection";
/**
 * Represents an item's attachment collection.
 */
export class AttachmentCollection extends ComplexPropertyCollection<Attachment> implements IOwnedProperty {
  ___typeGenerics: string[] = ["ComplexProperty"];

  /**
   * The item owner that owns this attachment collection
   */
  private owner: Item = null;
  /**
   * @interface:IOwnedProperty The owner of this attachment collection.
   */
  get Owner(): ServiceObject {
    return this.owner;
  }
  set Owner(value) {
    EwsLogging.Assert(
      value != null && value instanceof TypeContainer.Item, // instanceof Item), //info: can not check instanceof to avoid circular dependency in js. TypeContainer is workaround
      "AttachmentCollection.IOwnedProperty.set_Owner",
      "value is not a descendant of ItemBase"
    );
    this.owner = <Item>value;
  }

  /**
   * @internal Initializes a new instance of AttachmentCollection.
   */
  constructor() {
    super();
  }

  /**
   * Adds a file attachment to the collection.
   *
   * @param   {string}	fileName   The name of the file representing the content of the attachment.
   * @return  {FileAttachment} 		A FileAttachment instance.
   */
  private AddFileAttachmentXXXXX(fileName: string): FileAttachment;
  /**
   * Adds a file attachment to the collection.
   *
   * @param   {string}   name       The display name of the new attachment.
   * @param   {string}   fileName   The name of the file representing the content of the attachment.
   * @return  {FileAttachment}      A FileAttachment instance.
   */
  private AddFileAttachmentXXXXX(name: string, fileName: string): FileAttachment;

  //AddFileAttachmentXXXXX(name: string, contentStream: TextStreamBase /*System.IO.Stream*/): FileAttachment;
  //AddFileAttachmentXXXXX(name: string, content: number[] /* Byte[]  */): FileAttachment;
  /**
   * Adds a file attachment to the collection. - isContent parameter is required to be true to be able to use bas64 content directly
   *
   * @param   {string}    name       The display name of the new attachment.
   * @param   {string}    fileContent   base64 ontent of the file representing the content of the attachment.
   * @param   {boolean}   isContent   if true used as base64 content of file.
   * @return  {FileAttachment}      A FileAttachment instance.
   */
  private AddFileAttachmentXXXXX(name: string, fileContent: string, isContent: boolean): FileAttachment;
  private AddFileAttachmentXXXXX(nameOrFileName: string, fileNameOrContent?: string, isContent: boolean = false): FileAttachment {
    let argsLength = arguments.length;
    if (argsLength == 1) {
      let name = nameOrFileName
        .split("\\")
        .pop()
        .split("/")
        .pop();
      return this.AddFileAttachment(name, fileNameOrContent);
    }
    if (argsLength === 2) {
      throw new Error("AttachmentCollection.ts - Can only use this method with base64 content");
      let fileAttachment: FileAttachment = new FileAttachment(this.owner);
      fileAttachment.Name = name;
      fileAttachment.FileName = fileNameOrContent;
      this.InternalAdd(fileAttachment);
      return fileAttachment;
    }
    if (argsLength == 3) {
      if (isContent === true) {
        let fileAttachment: FileAttachment = new FileAttachment(this.owner);
        fileAttachment.Name = name;
        fileAttachment.Base64Content = fileNameOrContent;
        this.InternalAdd(fileAttachment);
        return fileAttachment;
      } else {
        return this.AddFileAttachment(nameOrFileName, fileNameOrContent);
      }
    }
    new Error("AttachmentCollection.ts - AddFileAttachment - incorrect count of parameters");
  }
  /**
   * Adds a file attachment to the collection. - isContent parameter is required to be true to be able to use bas64 content directly
   *
   * @param   {string}    name       The display name of the new attachment.
   * @param   {string}    fileContent   base64 ontent of the file representing the content of the attachment.
   * @return  {FileAttachment}      A FileAttachment instance.
   */
  AddFileAttachment(name: string, content: string): FileAttachment {
    let fileAttachment: FileAttachment = new FileAttachment(this.owner);
    fileAttachment.Name = name;
    fileAttachment.Base64Content = content;
    this.InternalAdd(fileAttachment);
    return fileAttachment;
  }

  /**
   * Adds an item attachment to the collection
   *
   * @type <TItem>    The type of the item to attach.
   *
   * @param   {any*}      TItem    Item type, not instance
   * @param   {string}    TItemElementName    XML Element Name of the Item class
   * @return  {ItemAttachmentOf<TItem>}      An ItemAttachment instance.
   */
  AddItemAttachment<TItem extends Item>(TItem: typeof Item, TItemElementName: string): ItemAttachmentOf<TItem> {
    if (typeof TItem.Attachable === "undefined" || TItem.Attachable === false) {
      throw new Error(StringHelper.Format("Items of type {0} are not supported as attachments.", TItem["name"])); //InvalidOperationException
    }

    let itemAttachment: ItemAttachmentOf<TItem> = new ItemAttachmentOf<TItem>(this.owner); //ref: //info: ItemAttachment can not be generic when same name non generic version exhist. TypeScript limitation
    itemAttachment.Item = <TItem>new ItemInfo().CreateItemFromItemClass(itemAttachment, TItemElementName, true); //todo: needs to implement Reflector metadata for Type to class creation map

    this.InternalAdd(<any>(<any>itemAttachment));

    return itemAttachment;
  }

  /**
   * Removes all attachments from this collection.
   */
  Clear(): void {
    this.InternalClear();
  }

  /**
   * @internal Disables the change log clearing mechanism. Attachment collections are saved separately from the items they belong to.
   */
  ClearChangeLog(): void {
    /** Do nothing */
  }

  /**
   * @internal Instantiate the appropriate attachment type depending on the current XML element name.
   *
   * @param   {string}   xmlElementName   The XML element name from which to determine the type of attachment to create.
   * @return  {Attachment}        An Attachment instance.
   */
  CreateComplexProperty(xmlElementName: string): Attachment {
    switch (xmlElementName) {
      case XmlElementNames.FileAttachment:
        return new FileAttachment(this.owner);
      case XmlElementNames.ItemAttachment:
        return <any>(<any>new ItemAttachment(this.owner));
      default:
        return null;
    }
  }

  //JsonDeserializationNotImplementedException
  CreateDefaultComplexProperty(): Attachment {
    EwsLogging.DebugLog("AttachmentCollection.ts - CreateDefaultComplexProperty : Not implemented.");
    return null;
  }

  /**
   * @internal Determines the name of the XML element associated with the complexProperty parameter.
   *
   * @param   {Attachment}   complexProperty   The attachment object for which to determine the XML element name with.
   * @return  {string}        The XML element name associated with the complexProperty parameter.
   */
  GetCollectionItemXmlElementName(complexProperty: Attachment): string {
    if (complexProperty instanceof FileAttachment) {
      return XmlElementNames.FileAttachment;
    } else {
      return XmlElementNames.ItemAttachment;
    }
  }

  /**
   * @internal Determines whether there are any unsaved attachment collection changes.
   *
   * @return  {boolean}      True if attachment adds or deletes haven't been processed yet.
   */
  HasUnprocessedChanges(): boolean {
    for (let attachment of this.Items) {
      if (attachment.IsNew) {
        return true;
      }
    }

    // Any pending deletions?
    for (let attachment of this.RemovedItems) {
      if (!attachment.IsNew) {
        return true;
      }
    }

    // Recurse: process item attachments to check for new or deleted sub-attachments.
    for (let itemAttachment of ArrayHelper.OfType<Attachment, ItemAttachment>(this.Items, attach => {
      return attach instanceof ItemAttachment;
    })) {
      if (itemAttachment.Item != null) {
        if (itemAttachment.Item.Attachments.HasUnprocessedChanges()) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Calls the CreateAttachment web method to create a list of attachments.
   *
   * @param   {string}        parentItemId   The Id of the parent item of the new attachments.
   * @param   {Attachment[]}  attachments    The attachments to create.
   */
  private async InternalCreateAttachments(parentItemId: string, attachments: Attachment[]): Promise<void> {
    const responses: ServiceResponseCollection<CreateAttachmentResponse> = await this.owner.Service.CreateAttachments(parentItemId, attachments);
    for (let response of responses.Responses) {
      // We remove all attachments that were successfully deleted from the change log. We should never
      // receive a warning from EWS, so we ignore them.
      if (response.Result != ServiceResult.Error) {
        this.RemoveFromChangeLog(response.Attachment);
      }
    }

    // TODO : Should we throw for warnings as well?
    if (responses.OverallResult == ServiceResult.Error) {
      throw new CreateAttachmentException(responses, Strings.AttachmentCreationFailed);
    }
  }

  /**
   * Calls the DeleteAttachment web method to delete a list of attachments.
   *
   * @param   {Attachment[]}   attachments   The attachments to delete.
   */
  private async InternalDeleteAttachments(attachments: Attachment[]): Promise<void> {
    const responses: ServiceResponseCollection<DeleteAttachmentResponse> = await this.owner.Service.DeleteAttachments(attachments);

    for (let response of responses.Responses) {
      // We remove all attachments that were successfully deleted from the change log. We should never
      // receive a warning from EWS, so we ignore them.
      if (response.Result != ServiceResult.Error) {
        this.RemoveFromChangeLog(response.Attachment);
      }
    }

    // TODO : Should we throw for warnings as well?
    if (responses.OverallResult == ServiceResult.Error) {
      throw new DeleteAttachmentException(responses, Strings.AtLeastOneAttachmentCouldNotBeDeleted);
    }
  }

  /**
   * Removes the specified attachment.
   *
   * @param   {Attachment}    attachment   The attachment to remove.
   * @return  {boolean}       True if the attachment was successfully removed from the collection, false otherwise.
   */
  Remove(attachment: Attachment): boolean {
    EwsUtilities.ValidateParam(attachment, "attachment");

    return this.InternalRemove(attachment);
  }

  /**
   * Removes the attachment at the specified index.
   *
   * @param   {number}   index   Index of the attachment to remove.
   */
  RemoveAt(index: number): void {
    if (index < 0 || index >= this.Count) {
      throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
    }
    this.InternalRemoveAt(index);
  }

  /**
   * @internal Saves this collection by creating new attachment and deleting removed ones.
   */
  async Save(): Promise<void> {
    let attachments = [];

    // Retrieve a list of attachments that have to be deleted.
    for (let attachment of this.RemovedItems) {
      if (!attachment.IsNew) {
        attachments.push(attachment);
      }
    }

    // If any, delete them by calling the DeleteAttachment web method.
    if (attachments.length > 0) {
      await this.InternalDeleteAttachments(attachments);
    }
    attachments.splice(0);

    // Retrieve a list of attachments that have to be created.
    for (let attachment of this.Items) {
      if (attachment.IsNew) {
        attachments.push(attachment);
      }
    }

    // If there are any, create them by calling the CreateAttachment web method.
    if (attachments.length > 0) {
      if (this.owner.IsAttachment) {
        await this.InternalCreateAttachments(this.owner.ParentAttachment.Id, attachments);
      } else {
        await this.InternalCreateAttachments(this.owner.Id.UniqueId, attachments);
      }
    }

    // Process all of the item attachments in this collection.
    let itemAttachments = ArrayHelper.OfType<Attachment, ItemAttachment>(this.Items, attachment => attachment instanceof ItemAttachment);

    for (let itemAttachment of itemAttachments) {
      // Make sure item was created/loaded before trying to create/delete sub-attachments
      if (itemAttachment.Item != null) {
        // Create/delete any sub-attachments
        await itemAttachment.Item.Attachments.Save();

        // Clear the item's change log
        itemAttachment.Item.ClearChangeLog();
      }
    }

    super.ClearChangeLog();
  }

  /**
   * @internal Validates this instance.
   */
  Validate(): void {
    // Validate all added attachments
    let contactPhotoFound: boolean = false;

    for (let attachmentIndex = 0; attachmentIndex < this.AddedItems.length; attachmentIndex++) {
      let attachment: Attachment = this.AddedItems[attachmentIndex];
      if (attachment.IsNew) {
        // At the server side, only the last attachment with IsContactPhoto is kept, all other IsContactPhoto
        // attachments are removed. CreateAttachment will generate AttachmentId for each of such attachments (although
        // only the last one is valid).
        //
        // With E14 SP2 CreateItemWithAttachment, such request will only return 1 AttachmentId; but the client
        // expects to see all, so let us prevent such "invalid" request in the first place.
        //
        // The IsNew check is to still let CreateAttachmentRequest allow multiple IsContactPhoto attachments.
        //
        if (this.owner.IsNew && this.owner.Service.RequestedServerVersion >= ExchangeVersion.Exchange2010_SP2) {
          let fileAttachment: FileAttachment = <FileAttachment>attachment;

          if (fileAttachment instanceof Attachment && fileAttachment.IsContactPhoto) {
            if (contactPhotoFound) {
              throw new ServiceValidationException(Strings.MultipleContactPhotosInAttachment);
            }

            contactPhotoFound = true;
          }
        }
        attachment.Validate(attachmentIndex);
      }
    }
  }

  /**
   * @internal Validates and saves this instance. **Not in official EWS source, to workaround some promise errors with validate and save**
   */
  ValidateAndSave(): Promise<void> {
    this.Validate();
    return this.Save();
  }
}
