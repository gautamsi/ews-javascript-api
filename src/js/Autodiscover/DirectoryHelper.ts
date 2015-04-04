    export class DirectoryHelper {
        Service: Microsoft.Exchange.WebServices.Data.ExchangeServiceBase;
        private service: Microsoft.Exchange.WebServices.Data.ExchangeServiceBase;
        private static AutodiscoverMaxScpHops: number = 10;
        private static ScpUrlGuidString: string = "77378F46-2C66-4aa9-A6A6-3E7A48B19596";
        private static ScpPtrGuidString: string = "67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68";
        private static ScpFilterString: string = "(&(objectClass=serviceConnectionPoint)(|(keywords=67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68)(keywords=77378F46-2C66-4aa9-A6A6-3E7A48B19596)))";

        GetAutodiscoverScpUrlsForDomain(domainName: string): System.Collections.Generic.List<string>{ throw new Error("Not implemented.");}
        GetScpUrlList(domainName: string, ldapPath: string, maxHops: any): System.Collections.Generic.List<string>{ throw new Error("Not implemented.");}
        GetSiteName(): string{ throw new Error("Not implemented.");}
        TraceMessage(message: string): any{ throw new Error("Not implemented.");}
    }


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;