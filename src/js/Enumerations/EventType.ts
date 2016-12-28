
/**
 * Defines the types of event that can occur in a folder.
 */
export enum EventType {

    /**
     * This event is sent to a client application by push notifications to indicate that the subscription is still alive.
     */
    Status = 0,

    /**
     * This event indicates that a new e-mail message was received.
     */
    NewMail = 1,

    /**
     * This event indicates that an item or folder has been deleted.
     */
    Deleted = 2,

    /**
     * This event indicates that an item or folder has been modified.
     */
    Modified = 3,

    /**
     * This event indicates that an item or folder has been moved to another folder.
     */
    Moved = 4,

    /**
     * This event indicates that an item or folder has been copied to another folder.
     */
    Copied = 5,

    /**
     * This event indicates that a new item or folder has been created.
     */
    Created = 6,

    /**
     * This event indicates that free/busy has changed. This is only supported in 2010 SP1 or later
     */
    FreeBusyChanged = 7
}

import { ExchangeVersion } from "./ExchangeVersion"
export module EventType {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: EventType): ExchangeVersion {
        if (value <= 6) //<= EventType.Created
            return ExchangeVersion.Exchange2007_SP1;
        if (value == 7) // == FreeBusyChanged
            return ExchangeVersion.Exchange2010_SP1;

        return ExchangeVersion.Exchange_Version_Not_Updated;
    }

    /**EwsEnumAttribute */
    export function FromEwsEnumString(value: string): EventType {
        return EventType[value.replace("Event", "")];
    }

    /**EwsEnumAttribute */
    export function ToEwsEnumString(value: EventType): string {
        return EventType[value] + "Event";
    }
}