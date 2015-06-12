import {ExchangeResourceManager} from "./ExchangeResourceManager";
export class LocalizedString implements ILocalizedString {
	LocalizedString: LocalizedString;
	IsEmpty: boolean;
	BaseId: number;
	private Id: string;
	private Inserts: any[];
	private ResourceManager: ExchangeResourceManager;
	static Empty: LocalizedString;
	Equals(obj: any): boolean { throw new Error("LocalizedString.ts - Equals : Not implemented."); }
	//Equals(obj: LocalizedString): boolean{ throw new Error("LocalizedString.ts - Equals : Not implemented.");}
	GetHashCode(): number { throw new Error("LocalizedString.ts - GetHashCode : Not implemented."); }
	Join(separator: any, value: any[]): LocalizedString { throw new Error("LocalizedString.ts - Join : Not implemented."); }
	ToString(): string { throw new Error("LocalizedString.ts - ToString : Not implemented."); }
	//ToString(formatProvider: System.IFormatProvider): string{ throw new Error("LocalizedString.ts - ToString : Not implemented.");}
	TranslateObject(badObject: any, formatProvider: any/*System.IFormatProvider */): any { throw new Error("LocalizedString.ts - TranslateObject : Not implemented."); }
}
interface ILocalizedString {
	LocalizedString: LocalizedString;
}






			

