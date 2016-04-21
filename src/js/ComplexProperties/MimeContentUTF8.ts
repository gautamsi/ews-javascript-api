import {StringHelper} from '../ExtensionMethods';
import {XmlElementNames} from "../Core/XmlElementNames";

import {MimeContentBase} from "./MimeContentBase";
/**
 * Represents the MIME content of an item.
 */
export class MimeContentUTF8 extends MimeContentBase {

    /**
     * Initializes a new instance of the **MimeContentUTF8** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MimeContentUTF8** class.
     *
     * @param   {string}   characterSet   The character set of the content.
     * @param   {string}   content        The content.
     */
    constructor(characterSet: string);
    constructor(characterSet: string = null) {
        super();
        this.CharacterSet = characterSet;
        this.Content = "utf-8";//c# - Encoding.UTF8.BodyName, nodejs - utf8 not utf-8
        this.xmlElementName = XmlElementNames.MimeContentUTF8;
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

        //            if (this.Content == null)
        //            {
        //                return string.Empty;
        //            }
        //            else
        //            {
        //                try
        //                {
        //                    // Try to convert to original MIME content using specified charset. If this fails, 
        //                    // return the Base64 representation of the content.
        //                    // Note: Encoding.GetString can throw DecoderFallbackException which is a subclass
        //                    // of ArgumentException.
        //                    // it should always be UTF8 encoding for MimeContentUTF8
        //                    return Encoding.UTF8.GetString(this.Content);
        //                }
        //                catch (ArgumentException)
        //                {
        //                    return Convert.ToBase64String(this.Content);
        //                }
        //            }
    }
    toString(): string { return this.ToString(); }
}



