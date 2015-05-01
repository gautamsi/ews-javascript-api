    class ClientAppMetadata extends ComplexProperty {
        EndNodeUrl: string;
        ActionUrl: string;
        AppStatus: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
