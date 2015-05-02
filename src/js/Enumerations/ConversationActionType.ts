module Microsoft.Exchange.WebServices.Data {
    export enum ConversationActionType {
        AlwaysCategorize = 0,
        AlwaysDelete = 1,
        AlwaysMove = 2,
        Delete = 3,
        Move = 4,
        Copy = 5,
        SetReadState = 6,
        SetRetentionPolicy = 7,
        Flag = 8
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ConversationActionType;
export = _export;
