export interface AutodiscoverRedirectionUrlValidationCallback {
    (redirectionUrl: string): boolean;
}
//class AutodiscoverRedirectionUrlValidationCallback extends System.MulticastDelegate {
//    BeginInvoke(redirectionUrl: string, callback: System.AsyncCallback, object: any): System.IAsyncResult { throw new Error("AutodiscoverServiceDelegates.ts - BeginInvoke : Not implemented."); }
//    EndInvoke(result: System.IAsyncResult): boolean { throw new Error("AutodiscoverServiceDelegates.ts - EndInvoke : Not implemented."); }
//    Invoke(redirectionUrl: string): boolean { throw new Error("AutodiscoverServiceDelegates.ts - Invoke : Not implemented."); }
//}
