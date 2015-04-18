export declare class AlternateMailbox {
    Type: string;
    DisplayName: string;
    LegacyDN: string;
    Server: string;
    SmtpAddress: string;
    OwnerSmtpAddress: string;
    private type;
    private displayName;
    private legacyDN;
    private server;
    private smtpAddress;
    private ownerSmtpAddress;
    LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): AlternateMailbox;
}
