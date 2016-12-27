
/**
 * Defines the type of a ResponseMessage object.
 */
export enum ResponseMessageType {
    
    /**
     * The ResponseMessage is a reply to the sender of a message.
     */
    Reply = 0,
    
    /**
     * The ResponseMessage is a reply to the sender and all the recipients of a message.
     */
    ReplyAll = 1,
    
    /**
     * The ResponseMessage is a forward.
     */
    Forward = 2
}