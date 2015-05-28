
class SecurityTimestamp {
	static DefaultTimestampValidityDurationString: string = "00:05:00";
	static DefaultFormat: string = "yyyy-MM-ddTHH:mm:ss.fffZ";
	CreationTimeUtc: Date;
	ExpiryTimeUtc: Date;
	Id: string;
	DigestAlgorithm: string;
	private id: string;
	private digestAlgorithm: string;
	private digest: any /*System.Byte[]*/;
	private computedCreationTimeUtc: any[] /*System.Char[]*/;
	private computedExpiryTimeUtc: any[] /*System.Char[]*/;
	private creationTimeUtc: Date;
	private expiryTimeUtc: Date;
	static DefaultTimestampValidityDuration: any /*System.TimeSpan*/;
	static DefaultTimeToLive: any /*System.TimeSpan*/;
	GetCreationTimeChars(): any[] /*System.Char[]*/ { throw new Error("SecurityTimestamp.ts - GetCreationTimeChars : Not implemented."); }
	GetDigest(): any /*System.Byte[]*/ { throw new Error("SecurityTimestamp.ts - GetDigest : Not implemented."); }
	GetExpiryTimeChars(): any[] /*System.Char[]*/ { throw new Error("SecurityTimestamp.ts - GetExpiryTimeChars : Not implemented."); }
	ToChars(utcTime: Date): any[] /*System.Char[]*/ { throw new Error("SecurityTimestamp.ts - ToChars : Not implemented."); }
	//ToChars(n: number, buffer: any[] /*System.Char[]*/, offset: number /*System.Int32&*/, count: number): void{ throw new Error("SecurityTimestamp.ts - ToChars : Not implemented.");}
	ToString(): string { throw new Error("SecurityTimestamp.ts - ToString : Not implemented."); }
}
export = SecurityTimestamp;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
