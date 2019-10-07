import { IEwsHttpWebResponse } from "./IEwsHttpWebResponse";
import { IEwsHttpWebRequest } from "./IEwsHttpWebRequest";

/** @internal */
export interface IEwsHttpWebRequestFactory {
    CreateExceptionResponse(exception: any /*System.Net.WebException*/): IEwsHttpWebResponse;
    CreateRequest(uri: string /*Uri*/): IEwsHttpWebRequest;
}






			

