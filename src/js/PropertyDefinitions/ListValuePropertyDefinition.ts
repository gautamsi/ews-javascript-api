import {GenericPropertyDefinition} from "./GenericPropertyDefinition";
export class ListValuePropertyDefinition<TPropertyValue> extends GenericPropertyDefinition<TPropertyValue> {
    Parse(value: string): any {

        throw new Error("ListValuePropertyDefinition - Parse: Not implemented.");
        debugger;
        // xs:list values are sent as a space-separated list; convert to comma-separated for EwsUtilities.Parse.
        var commaSeparatedValue: string = value ? value : value.replace(' ', ',');
        //return EwsUtilities.Parse<TPropertyValue>(commaSeparatedValue);
            
    }
}