import {EwsXmlReader} from "../Core/EwsXmlReader";
export class AutodiscoverError {
    Time: string;
    Id: string;
    ErrorCode: number;
    Message: string;
    DebugData: string;
    private time: string;
    private id: string;
    private errorCode: number;
    private message: string;
    private debugData: string;
    //Parse(reader: EwsXmlReader): AutodiscoverError { throw new Error("AutodiscoverError.ts - Parse : Not implemented."); }
}
