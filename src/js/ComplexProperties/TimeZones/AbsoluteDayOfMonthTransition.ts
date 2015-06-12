import {AbsoluteMonthTransition} from "./AbsoluteMonthTransition";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
    DayOfMonth: number;
    private dayOfMonth: number;
    CreateTransitionTime(): any { throw new Error("AbsoluteDayOfMonthTransition.ts - CreateTransitionTime : Not implemented."); }
    GetXmlElementName(): string { throw new Error("AbsoluteDayOfMonthTransition.ts - GetXmlElementName : Not implemented."); }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("AbsoluteDayOfMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("AbsoluteDayOfMonthTransition.ts - WriteElementsToXml : Not implemented."); }
}



//}



