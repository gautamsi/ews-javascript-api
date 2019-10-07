/**
 * ITraceListener handles message tracing.
 */
export interface ITraceListener {
	/**
	 * Handles a trace message
	 *
	 * @param   {string}   traceType      Type of trace message.
	 * @param   {string}   traceMessage   The trace message.
	 */
  Trace(traceType: string, traceMessage: string): void;
}
