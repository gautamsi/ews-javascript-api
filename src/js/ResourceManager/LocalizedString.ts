import ExchangeResourceManager = require("./ExchangeResourceManager");
			
 class LocalizedString implements ILocalizedString {
	private LocalizedString: LocalizedString;
	IsEmpty: boolean;
	BaseId: number;
	private Id: string;
	private Inserts: any[];
	private ResourceManager: ExchangeResourceManager;
	static Empty: LocalizedString;
	Equals(obj: any): boolean{ throw new Error("Not implemented.");}
	//Equals(obj: LocalizedString): boolean{ throw new Error("Not implemented.");}
	GetHashCode(): number{ throw new Error("Not implemented.");}
	Join(separator: any, value: any[]): LocalizedString{ throw new Error("Not implemented.");}
	ToString(): string{ throw new Error("Not implemented.");}
	//ToString(formatProvider: System.IFormatProvider): string{ throw new Error("Not implemented.");}
	TranslateObject(badObject: any, formatProvider: any/*System.IFormatProvider */): any{ throw new Error("Not implemented.");}
}
export = LocalizedString;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
