import {ComplexProperty} from "./ComplexProperty";
import {ClientAccessTokenType} from "../Enumerations/ClientAccessTokenType";
export class ClientAccessTokenRequest extends ComplexProperty {
    Id: string;
    TokenType: ClientAccessTokenType;
    Scope: string;
    private id: string;
    private tokenType: ClientAccessTokenType;
    private scope: string;
}


