
/**
 * Defines flags to control tracing details
 * 
 * [Flags]
 */
export enum TraceFlags {
  
  /**
   * No tracing.
   */
  None = 0,
  
  /**
   * Trace EWS request messages.
   */
  EwsRequest = 1,
  
  /**
   * Trace EWS response messages.
   */
  EwsResponse = 2,
  
  /**
   * Trace EWS response HTTP headers.
   */
  EwsResponseHttpHeaders = 4,
  
  /**
   * Trace Autodiscover request messages.
   */
  AutodiscoverRequest = 8,
  
  /**
   * Trace Autodiscover response messages.
   */
  AutodiscoverResponse = 16,
  
  /**
   * Trace Autodiscover response HTTP headers.
   */
  AutodiscoverResponseHttpHeaders = 32,
  
  /**
   * Trace Autodiscover configuration logic.
   */
  AutodiscoverConfiguration = 64,
  
  /**
   * Trace messages used in debugging the Exchange Web Services Managed API
   */
  DebugMessage = 128,
  
  /**
   * Trace EWS request HTTP headers.
   */
  EwsRequestHttpHeaders = 256,
  
  /**
   * Trace Autodiscover request HTTP headers.
   */
  AutodiscoverRequestHttpHeaders = 512,
  
  /**
   * Trace EWS timezone related logic.
   */
  EwsTimeZones = 1024,

  /**
   * All trace types enabled.
   */
  All = 9223372036854775807
}