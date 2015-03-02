module Microsoft.Exchange.WebServices.Data {
    export class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
        private collectionItemXmlElementName: string;
        Add(emailAddress: EmailAddress): any { throw new Error("Not implemented."); }
        //Add(smtpAddress: string): EmailAddress { throw new Error("Not implemented."); }
        //Add(name: string, smtpAddress: string): EmailAddress { throw new Error("Not implemented."); }
        AddRange(emailAddresses: any[]/*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        //AddRange(smtpAddresses: string[]/*System.Collections.Generic.IEnumerable<string>*/): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): EmailAddress { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): EmailAddress { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(emailAddress: EmailAddress): string { throw new Error("Not implemented."); }
        Remove(emailAddress: EmailAddress): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        ShouldWriteToRequest(): boolean { throw new Error("Not implemented."); }
    }

    export class StringList extends ComplexProperty {
        Count: number;
        Item: string;
        private items: string[] /*System.Collections.Generic.List<string>*/;
        private itemXmlElementName: string;
        Add(s: string): any { throw new Error("Not implemented."); }
        AddRange(strings: string[] /*System.Collections.Generic.IEnumerable<string>*/): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        Contains(s: string): boolean { throw new Error("Not implemented."); }
        Equals(obj: any): boolean { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        GetHashCode(): number { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        Remove(s: string): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class MobilePhone {
        Name: string;
        PhoneNumber: string;
        private name: string;
        private phoneNumber: string;
    }

}