/**
 * @internal EwsTraceListener logs request/responses to a text writer.
 */
export class EwsTraceListener {
  private writer: TextWriter = null;

  /**
   * @internal Initializes a new instance of the **EwsTraceListener** class.
   */
  constructor();
  /**
   * @internal Initializes a new instance of the **EwsTraceListener** class.
   *
   * @param   {}   writer   The writer.
   */
  constructor(writer: TextWriter);
  constructor(writer: TextWriter = { Write: console.log }) {
    this.writer = writer;
  }

	/**
	 * Handles a trace message
	 *
	 * @param   {string}   traceType      Type of trace message.
	 * @param   {string}   traceMessage   The trace message.
	 */
  Trace(traceType: string, traceMessage: string): void {
    this.writer.Write(traceMessage);
  }
}

export interface TextWriter {
  Write(message): void;
}
