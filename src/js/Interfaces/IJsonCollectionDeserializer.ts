import {ExchangeService} from "../Core/ExchangeService";
			
 export interface IJsonCollectionDeserializer {
	CreateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
	UpdateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
}






			

