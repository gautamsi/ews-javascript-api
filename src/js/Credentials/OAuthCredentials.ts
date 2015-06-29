import {StringHelper} from "../ExtensionMethods";
import {Strings} from "../Strings";
import {IXHROptions} from "../Interfaces";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeCredentials} from "./ExchangeCredentials";
export class OAuthCredentials extends ExchangeCredentials {
    private static BearerAuthenticationType: string = "Bearer";
    private token: string = null;
    private credentials: any = null; /*System.Net.ICredentials*/
    private static validTokenPattern: RegExp = new RegExp("^[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]*$");

    constructor(token: string);
    constructor(token: string, verbatim: boolean);
    constructor(token: string, verbatim: boolean = false) {
        super();

        EwsUtilities.ValidateParam(token, "token");

        var rawToken: string;
        if (verbatim) {
            rawToken = token;
        }
        else {
            var whiteSpacePosition: number = token.indexOf(' ');
            if (whiteSpacePosition == -1) {
                rawToken = token;
            }
            else {
                var authType: string = token.substring(0, whiteSpacePosition);
                if (StringHelper.Compare(authType, OAuthCredentials.BearerAuthenticationType, true) != 0) {
                    throw new Error(Strings.InvalidAuthScheme);//ArgumentException
                }

                rawToken = token.substring(whiteSpacePosition + 1);
            }

            if (!OAuthCredentials.validTokenPattern.test(rawToken)) {
                throw new Error(Strings.InvalidOAuthToken);//ArgumentException
            }
        }

        this.token = OAuthCredentials.BearerAuthenticationType + " " + rawToken;
    }

    PrepareWebRequest(request: IXHROptions /*IEwsHttpWebRequest*/): void {
        request.headers["Authorization"] = this.token;
    }
}