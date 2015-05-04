import MimeContentBase = require("./MimeContentBase");
class MimeContentUTF8 extends MimeContentBase{
    
    
    constructor(content:any[]/* byte[]*/)
        {
            super();
            
//            this.CharacterSet = Encoding.UTF8.BodyName;
//            this.Content = content;
        }
    
    
    ToString():string
        {
            return null;
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
}


export = MimeContentUTF8;

