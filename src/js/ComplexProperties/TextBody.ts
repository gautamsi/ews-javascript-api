import {BodyType} from "../Enumerations/BodyType";

import {MessageBody} from "./MessageBody";
/**
 * Represents the body of a message.
 */
export class TextBody extends MessageBody {

    /**
     * Initializes a new instance of the **TextBody** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **TextBody** class.
     *
     * @param   {string}   text   The text of the message body.
     */
    constructor(text: string);
    constructor(text: string = null) {
        arguments.length === 0 ? super() : super(BodyType.Text, text);
    }
}