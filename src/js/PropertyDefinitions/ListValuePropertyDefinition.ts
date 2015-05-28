import GenericPropertyDefinition = require("./GenericPropertyDefinition");


    class ListValuePropertyDefinition<TPropertyValue> extends GenericPropertyDefinition<TPropertyValue> {
        Parse(value: string): any { throw new Error("ListValuePropertyDefinition: Not implemented.");
            
            // xs:list values are sent as a space-separated list; convert to comma-separated for EwsUtilities.Parse.
            var commaSeparatedValue:string = value ? value : value.replace(' ', ',');
            //return EwsUtilities.Parse<TPropertyValue>(commaSeparatedValue);
            
             }
    }

    export = ListValuePropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
