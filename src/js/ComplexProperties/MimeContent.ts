import {StringHelper} from '../ExtensionMethods';
import {XmlElementNames} from "../Core/XmlElementNames";

import {MimeContentBase} from "./MimeContentBase";
/**
 * Represents the MIME content of an item.
 */
export class MimeContent extends MimeContentBase {

    /**
     * Initializes a new instance of the **MimeContent** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MimeContent** class.
     *
     * @param   {string}   characterSet   The character set of the content.
     * @param   {string}   content        The content.
     */
    constructor(characterSet: string, content: string);
    constructor(characterSet: string = null, content: string = null) {
        super();
        this.CharacterSet = characterSet;
        this.Content = content;
        this.xmlElementName = XmlElementNames.MimeContent;
    }

    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string {
        return this.Content || StringHelper.Empty;
        //ref: //info: 
        //todo: implement arraybuffer and encoding using TextDecoder or some other tech

        // if (this.Content == null) {
        //     return StringHelper.Empty;
        // }
        // else {
        //     try {
        //         // Try to convert to original MIME content using specified charset. If this fails, 
        //         // return the Base64 representation of the content.
        //         // Note: Encoding.GetString can throw DecoderFallbackException which is a subclass
        //         // of ArgumentException.
        //         string charSet = string.IsNullOrEmpty(this.CharacterSet)
        //             ? Encoding.UTF8.EncodingName
        //             : this.CharacterSet;
        //         Encoding encoding = Encoding.GetEncoding(charSet);
        //         return encoding.GetString(this.Content);
        //     }
        //     catch (ArgumentException) {
        //         return Convert.ToBase64String(this.Content);
        //     }
        // }
    }
    toString(): string { return this.ToString(); }
}