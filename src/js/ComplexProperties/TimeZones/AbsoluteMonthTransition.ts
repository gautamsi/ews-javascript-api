import {TimeZoneTransition} from "./TimeZoneTransition";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AbsoluteMonthTransition extends TimeZoneTransition {
        TimeOffset: any;//System.TimeSpan;
        Month: number;
        //private timeOffset: System.TimeSpan;
        private month: number;
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("AbsoluteMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); }
        ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("AbsoluteMonthTransition.ts - WriteElementsToXml : Not implemented."); }
    }


//}




