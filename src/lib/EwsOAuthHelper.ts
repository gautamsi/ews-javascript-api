import { AuthenticationResult, ConfidentialClientApplication } from '@azure/msal-node';
export class EwsOAuthHelper {
    #tokenObject: AuthenticationResult;
    #cca: ConfidentialClientApplication;
    #scopes = ['https://outlook.office365.com/.default'];
    #loginUrl = 'https://login.microsoftonline.com/';

    get cachedToken() {
        return this.#tokenObject;
    }

    constructor({ clientId, clientSecret, tenantId, scopes, loginUrl }: { clientId: string, clientSecret: string, tenantId: string, scopes?: string[], loginUrl?: string}) {
        if(scopes) this.#scopes = [...scopes];
        if(loginUrl) this.#loginUrl = loginUrl;
        this.#cca = new ConfidentialClientApplication({ auth: { clientId, clientSecret, authority: `${this.#loginUrl}${tenantId}` } });
    }

    async getAppAccessToken(options?: { cache?: boolean, raw: false }): Promise<string>;
    async getAppAccessToken(options?: { cache?: boolean, raw: true }): Promise<AuthenticationResult>;
    async getAppAccessToken({ cache = true, raw = false }): Promise<string | AuthenticationResult> {
        const result = await this.#cca.acquireTokenByClientCredential({
            scopes: this.#scopes,
            skipCache: !cache,
        });
        this.#tokenObject = result;
        if (raw) return result;
        return result.accessToken;
    }
}

