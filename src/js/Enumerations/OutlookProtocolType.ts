
/**
 * @internal Defines supported Outlook protocls.
 */
export enum OutlookProtocolType {
    
    /**
     * The Remote Procedure Call (RPC) protocol.
     */
    Rpc = 0,
    
    /**
     * The Remote Procedure Call (RPC) over HTTP protocol.
     */
    RpcOverHttp = 1,
    
    /**
     * The Web protocol.
     */
    Web = 2,
    
    /**
     * The protocol is unknown.
     */
    Unknown = 3
}