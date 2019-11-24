import { CalendarActionResults } from "../../../Misc/CalendarActionResults";
import { EmailMessage } from "../Items/EmailMessage";
import { FolderId } from "../../../ComplexProperties/FolderId";
import { hasValue } from "../../../ExtensionMethods";
import { Item } from "../Items/Item";
import { MessageDisposition } from "../../../Enumerations/MessageDisposition";
import { Promise } from "../../../Promise";
import { WellKnownFolderName } from "../../../Enumerations/WellKnownFolderName";

import { ResponseObject } from "./ResponseObject";
/**
 * Represents the base class for all calendar-related response messages.
 *
 * @typeparam   {TMessage}     The type of message that is created when this response message is saved.
 */
export abstract class CalendarResponseMessageBase<TMessage extends EmailMessage> extends ResponseObject<TMessage> {
  /**
   * @internal Initializes a new instance of the **CalendarResponseMessageBase** class.
   *
   * @param   {Item}   referenceItem   The reference item.
   */
  constructor(referenceItem: Item) {
    super(referenceItem);
  }

  /**
   * Saves the response in the Drafts folder. Calling this method results in a call to EWS.
   *
   * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  Save(): Promise<CalendarActionResults | any>; //info: added extra "any" for workaround @github #52
  /**
   * Saves the response in the specified folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the response.
   * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  Save(destinationFolderName: WellKnownFolderName): Promise<CalendarActionResults | any>; //info: added extra "any" for workaround @github #52
  /**
   * Saves the response in the specified folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the response.
   * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  Save(destinationFolderId: FolderId): Promise<CalendarActionResults | any>; //info: added extra "any" for workaround @github #52
  async Save(destinationFolderIdOrName?: FolderId | WellKnownFolderName): Promise<CalendarActionResults> {
    var destinationFolderId: FolderId = null;
    if (hasValue(destinationFolderIdOrName)) {
      if (typeof destinationFolderIdOrName === "number") {
        destinationFolderId = new FolderId(destinationFolderIdOrName);
      } else {
        //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
        destinationFolderId = destinationFolderIdOrName;
      }
    }
    const results: Item[] = await this.InternalCreate(destinationFolderId, MessageDisposition.SaveOnly);
    return new CalendarActionResults(results);
  }

  /**
   * Sends this response without saving a copy. Calling this method results in a call to EWS.
   *
   * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  async Send(): Promise<CalendarActionResults | any> {
    //info: added extra any for workaround @github #52
    const results: Item[] = await this.InternalCreate(null, MessageDisposition.SendOnly);
    return new CalendarActionResults(results);
  }

  /**
   * Sends this response ans saves a copy in the Sent Items folder. Calling this method results in a call to EWS.
   *
   * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  SendAndSaveCopy(): Promise<CalendarActionResults | any>; //info: added extra "any"" for workaround @github #52
  /**
   * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the copy of the message.
   * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  SendAndSaveCopy(destinationFolderName: WellKnownFolderName): Promise<CalendarActionResults | any>; //info: added extra "any" for workaround @github #52
  /**
   * Sends this response ans saves a copy in the specified folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the copy of the message.
   * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  SendAndSaveCopy(destinationFolderId: FolderId): Promise<CalendarActionResults | any>; //info: added extra "any" for workaround @github #52
  async SendAndSaveCopy(destinationFolderIdOrName?: FolderId | WellKnownFolderName): Promise<CalendarActionResults> {
    var destinationFolderId: FolderId = null;
    if (hasValue(destinationFolderIdOrName)) {
      if (typeof destinationFolderIdOrName === "number") {
        destinationFolderId = new FolderId(destinationFolderIdOrName);
      } else {
        //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
        destinationFolderId = destinationFolderIdOrName;
      }
    }
    const results: Item[] = await this.InternalCreate(destinationFolderId, MessageDisposition.SendAndSaveCopy);
    return new CalendarActionResults(results);
  }
}
