import {ClientAccessTokenType} from "../Enumerations/ClientAccessTokenType";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents a client token access request
 */
export class ClientAccessTokenRequest extends ComplexProperty {

    private id: string;
    private tokenType: ClientAccessTokenType;
    private scope: string;

    /**
     * Gets the App Id.
     */
    get Id(): string {
        return this.id;
    }

    /**
     * Gets token type.
     */
    get TokenType(): ClientAccessTokenType {
        return this.tokenType;
    }

    /**
     * Gets the token scope.
     */
    get Scope(): string {
        return this.scope;
    }

    /**
     * Initializes a new instance of the **ClientAccessTokenRequest** class.
     *
     * @param   {string}                    id          id
     * @param   {ClientAccessTokenType}     tokenType   The tokenType.
     * @param   {string}                    scope       The scope.
     */
    constructor(id: string, tokenType: ClientAccessTokenType);
    /**
     * Initializes a new instance of the **ClientAccessTokenRequest** class.
     *
     * @param   {string}                    id          id
     * @param   {ClientAccessTokenType}     tokenType   The tokenType.
     * @param   {string}                    scope       The scope.
     */
    constructor(id: string, tokenType: ClientAccessTokenType, scope: string);
    constructor(id: string = null, tokenType: ClientAccessTokenType = ClientAccessTokenType.CallerIdentity, scope: string = null) {
        super();
        this.id = id;
        this.tokenType = tokenType;
        this.scope = scope;
    }
}