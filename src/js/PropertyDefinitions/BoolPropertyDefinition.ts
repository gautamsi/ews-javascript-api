import {EwsUtilities} from "../Core/EwsUtilities";

import {GenericPropertyDefinition} from "./GenericPropertyDefinition";
export class BoolPropertyDefinition extends GenericPropertyDefinition<boolean> {

    ToString(value?: any): string {
        return EwsUtilities.BoolToXSBool(value);      
        //throw new Error("BoolPropertyDefinition.ts - ToString : Not implemented."); 
    }
}