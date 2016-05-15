import {IPromise} from "../../../Interfaces";
import {Item} from "../Items/Item";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {EmailMessage} from "../Items/EmailMessage";
import {CalendarActionResults} from "../../../Misc/CalendarActionResults";

import {ResponseObject} from "./ResponseObject";
/**
 * Represents the base class for all calendar-related response messages.
 *
 */
export class CalendarResponseMessageBase<TMessage extends EmailMessage> extends ResponseObject<TMessage> { //abstract
    /**
    * Initializes a new instance of the **CalendarResponseMessageBase** class.
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
    Save(): IPromise<CalendarActionResults | any>;  //info: added extra "any" for workaround @github #52 
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the response.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(destinationFolderName: WellKnownFolderName): IPromise<CalendarActionResults | any>;  //info: added extra "any" for workaround @github #52
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the response.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(destinationFolderId: FolderId): IPromise<CalendarActionResults | any>;  //info: added extra "any" for workaround @github #52
    Save(destinationFolderIdOrName?: FolderId | WellKnownFolderName): IPromise<CalendarActionResults> {
        var destinationFolderId: FolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId(destinationFolderIdOrName);
            } else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalCreate(destinationFolderId, MessageDisposition.SaveOnly).then((results) => {
            return new CalendarActionResults(results);
        });
    }
    
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Send(): IPromise<CalendarActionResults | any> {   //info: added extra any for workaround @github #52
        return this.InternalCreate(null, MessageDisposition.SendOnly).then((results) => {
            return new CalendarActionResults(results);
        });
    }

    /**
     * Sends this response ans saves a copy in the Sent Items folder. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(): IPromise<CalendarActionResults | any>;  //info: added extra "any"" for workaround @github #52
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the copy of the message.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): IPromise<CalendarActionResults | any>;  //info: added extra "any" for workaround @github #52
    /**
     * Sends this response ans saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the copy of the message.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): IPromise<CalendarActionResults | any>;  //info: added extra "any" for workaround @github #52
    SendAndSaveCopy(destinationFolderIdOrName?: FolderId | WellKnownFolderName): IPromise<CalendarActionResults> {
        var destinationFolderId: FolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId(destinationFolderIdOrName);
            } else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalCreate(destinationFolderId, MessageDisposition.SendAndSaveCopy).then((results) => {
            return new CalendarActionResults(results);
        });
    }
}