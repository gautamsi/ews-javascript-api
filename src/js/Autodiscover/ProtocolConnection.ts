import {EwsXmlReader} from "../Core/EwsXmlReader";

export class ProtocolConnection {
    EncryptionMethod: string;
    Hostname: string;
    Port: number;
    //private encryptionMethod: string;
    //private hostname: string;
    //private port: number;
    LoadFromXml(reader: EwsXmlReader): ProtocolConnection { throw new Error("ProtocolConnection.ts - LoadFromXml : Not implemented."); }
}
