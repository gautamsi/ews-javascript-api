import { ArrayHelper, StringHelper, xml2JsObject, DOMParser } from "../../ExtensionMethods";
import { EwsLogging } from "../EwsLogging";
import { EwsServiceXmlReader } from "../EwsServiceXmlReader";
import { Exception } from "../../Exceptions/Exception";
import { ExchangeService } from "../ExchangeService";
import { HangingRequestDisconnectEventArgs } from "./HangingRequestDisconnectEventArgs";
import { HangingRequestDisconnectReason } from "../../Enumerations/HangingRequestDisconnectReason";
import { IXHROptions, IXHRApi, IXHRProgress } from "../../Interfaces";
import { Promise } from "../../Promise";

import { ServiceRequestBase } from "./ServiceRequestBase";
/**
 * @internal Represents an abstract, hanging service request.
 */
export class HangingServiceRequestBase extends ServiceRequestBase {
  private static BufferSize: number = 4096;
  static LogAllWireBytes: boolean;
  private responseHandler: HandleResponseObject = null;
  private response: IXHROptions = null;
  private request: IXHROptions = null;
  heartbeatFrequencyMilliseconds: number = 0;
  private lockObject: any;
  /**
   * @internal Occurs when the hanging request is disconnected. events converted into array of delagte function
   */
  OnDisconnect: HangingRequestDisconnectHandler[] = [];
  IsConnected: boolean = false;

  /**
   * ews-javascript-api: Response Headers delegate
   */
  OnResponseHeader: Function;

  // /**
  //  * ews-javascript-api:  FetchStream object
  //  */
  // private stream: FetchStream;

  /**
   * @internal Initializes a new instance of the **HangingServiceRequestBase** class.
   *
   * @param   {ExchangeService}   	service                	The service.
   * @param   {HandleResponseObject} 	handler   				Callback delegate to handle response objects.
   * @param   {number}   				heartbeatFrequency      Frequency at which we expect heartbeats, in milliseconds.
   */
  constructor(service: ExchangeService, handler: HandleResponseObject, heartbeatFrequency: number) {
    super(service);
    this.responseHandler = handler;
    this.heartbeatFrequencyMilliseconds = heartbeatFrequency;
  }

  /**
   * Disconnects the request.
   */
  Disconnect(): void;
  /**
   * Disconnects the request with the specified reason and exception.
   *
   * @param   {HangingRequestDisconnectReason}    reason      The reason.
   * @param   {Exception}                         exception   The exception.
   */
  Disconnect(reason: HangingRequestDisconnectReason, exception: Exception): void;
  Disconnect(reason: HangingRequestDisconnectReason = HangingRequestDisconnectReason.UserInitiated, exception: Exception = null): void {
    if (this.IsConnected) {
      this.Service.XHRApi.disconnect();
      this.InternalOnDisconnect(reason, exception);
    }
  }

  /**
   * Stores chunked data from fetch FetchStream
   */
  private chunk: string = "";

  /**
   * @internal Exectures the request.
   */
  async InternalExecute(): Promise<void> {
    //lock (this.lockObject){
    //this.response = this.ValidateAndEmitRequest(this.BuildXHR());

    var request = this.BuildXHR();
    //this.ReadResponsePrivate(response);
    try {
      await this.ValidateAndEmitRequest(request, (progress: IXHRProgress) => {
        switch (progress.type) {
          case "data":
            this.InternalOnConnect();

            progress.data = progress.data.trim();
            this.chunk += progress.data;
            let _continue = false;
            let xml = "";
            if (!StringHelper.IsNullOrEmpty(this.chunk)) {
              //"<Envelope>indexOf</Envelope>"
              let start = this.chunk.indexOf("<Envelope");
              let end = this.chunk.indexOf("</Envelope>");
              if (start >= 0 && end > 0) {
                xml = this.chunk.substr(start, end - start + 11);
                this.chunk = this.chunk.substr(end + 11);
                _continue = true;
              }
            }
            if (_continue) {
              var dom = new DOMParser();
              var xml2js = new xml2JsObject();
              let req;
              //req = xml2js.parseXMLNode(dom.parseFromString(xml, "text/xml").documentElement, true);
              //EwsLogging.DebugLog(req, true);
              EwsLogging.DebugLog(xml, true);
              var ewsXmlReader: EwsServiceXmlReader = new EwsServiceXmlReader(xml, this.Service);
              EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
              //var serviceResponse =
              this.ParseResponses(ewsXmlReader.JsObject);

              // if (successDelegate)
              //     successDelegate(serviceResponse || xml);
              // else {
              //     if (errorDelegate)
              //         errorDelegate(xml);
              // }
            }
            break;
          case "header":
            this.InternalOnConnect();
            if (this.OnResponseHeader && typeof this.OnResponseHeader === "function") {
              this.OnResponseHeader(progress.headers);
            }
            //console.log(meta);
            break;
          case "end":
            this.InternalOnDisconnect(HangingRequestDisconnectReason.Clean, null);
            break;
          case "error":
            this.Disconnect(HangingRequestDisconnectReason.Exception, <any>progress.error);
            throw progress.error;
            break;
          default:
            break;
        }
      });
    } catch (error) {
      const resperr: XMLHttpRequest = error;
      if (resperr.status && resperr.getAllResponseHeaders) {
        EwsLogging.Log("Error in calling service, error code: " + resperr.status + "\r\n " + resperr.getAllResponseHeaders());
      } else {
        EwsLogging.Log("Error in calling service, error code: " + (resperr.status || (<any>resperr).message));
      }
      throw this.ProcessWebException(resperr) || resperr;
    }
  }

  /**
   * Perform any bookkeeping needed when we connect
   */
  private InternalOnConnect(): void {
    if (!this.IsConnected) {
      this.IsConnected = true;

      // Trace Http headers
      // this.Service.ProcessHttpResponseHeaders(
      //     TraceFlags.EwsResponseHttpHeaders,
      //     this.response);

      //info: //ref: - not needed, no threadpool, handled in
      // ThreadPool.QueueUserWorkItem(
      //     new WaitCallback(this.ParseResponses));
    }
  }

  /**
   * Perform any bookkeeping needed when we disconnect (cleanly or forcefully)
   *
   * @param   {HangingRequestDisconnectReason}    reason      [description]
   * @param   {Exception}                         exception   [description]
   */
  InternalOnDisconnect(reason: HangingRequestDisconnectReason, exception: Exception): void {
    if (this.IsConnected) {
      this.IsConnected = false;

      if (this.OnDisconnect && ArrayHelper.isArray(this.OnDisconnect)) {
        try {
          this.OnDisconnect.forEach(OnDisconnect => {
            OnDisconnect(this, new HangingRequestDisconnectEventArgs(reason, exception));
          });
        } catch (e) {}
      }
    }
  }

  //* @return  {any}   parsed response object.
  /**
   * Parses the responses.
   *
   * @param   {any}   state   Notification state.
   */
  private ParseResponses(state: any): void {
    try {
      let responseObject = this.ReadResponseXmlJsObject(state);
      this.responseHandler(responseObject);
    } catch (error) {
      this.Disconnect(HangingRequestDisconnectReason.Exception, error);
      console.log("error parsing object....\n TODO: Implement better parse error for Notifications");
      //console.log(state);
    }

    // try
    //     {
    //         Guid traceId = Guid.Empty;
    //         HangingTraceStream tracingStream = null;
    //         MemoryStream responseCopy = null;

    //         try
    //         {
    //             bool traceEwsResponse = this.Service.IsTraceEnabledFor(TraceFlags.EwsResponse);

    //             using (Stream responseStream = this.response.GetResponseStream())
    //             {
    //                 responseStream.ReadTimeout = 2 * this.heartbeatFrequencyMilliseconds;
    //                 tracingStream = new HangingTraceStream(responseStream, this.Service);

    //                 // EwsServiceMultiResponseXmlReader.Create causes a read.
    //                 if (traceEwsResponse)
    //                 {
    //                     responseCopy = new MemoryStream();
    //                     tracingStream.SetResponseCopy(responseCopy);
    //                 }

    //                 EwsServiceMultiResponseXmlReader ewsXmlReader = EwsServiceMultiResponseXmlReader.Create(tracingStream, this.Service);

    //                 while (this.IsConnected)
    //                 {
    //                     object responseObject = null;
    //                     if (traceEwsResponse)
    //                     {
    //                         try
    //                         {
    //                             responseObject = this.ReadResponse(ewsXmlReader, this.response.Headers);
    //                         }
    //                         finally
    //                         {
    //                             this.Service.TraceXml(TraceFlags.EwsResponse, responseCopy);
    //                         }

    //                         // reset the stream collector.
    //                         responseCopy.Close();
    //                         responseCopy = new MemoryStream();
    //                         tracingStream.SetResponseCopy(responseCopy);
    //                     }
    //                     else
    //                     {
    //                         responseObject = this.ReadResponse(ewsXmlReader, this.response.Headers);
    //                     }

    //                     this.responseHandler(responseObject);
    //                 }
    //             }
    //         }
    //         catch (TimeoutException ex)
    //         {
    //             // The connection timed out.
    //             this.Disconnect(HangingRequestDisconnectReason.Timeout, ex);
    //             return;
    //         }
    //         catch (IOException ex)
    //         {
    //             // Stream is closed, so disconnect.
    //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
    //             return;
    //         }
    //         catch (HttpException ex)
    //         {
    //             // Stream is closed, so disconnect.
    //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
    //             return;
    //         }
    //         catch (WebException ex)
    //         {
    //             // Stream is closed, so disconnect.
    //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
    //             return;
    //         }
    //         catch (ObjectDisposedException ex)
    //         {
    //             // Stream is closed, so disconnect.
    //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
    //             return;
    //         }
    //         catch (NotSupportedException)
    //         {
    //             // This is thrown if we close the stream during a read operation due to a user method call.
    //             // Trying to delay closing until the read finishes simply results in a long-running connection.
    //             this.Disconnect(HangingRequestDisconnectReason.UserInitiated, null);
    //             return;
    //         }
    //         catch (XmlException ex)
    //         {
    //             // Thrown if server returned no XML document.
    //             this.Disconnect(HangingRequestDisconnectReason.UserInitiated, ex);
    //             return;
    //         }
    //         finally
    //         {
    //             if (responseCopy != null)
    //             {
    //                 responseCopy.Dispose();
    //                 responseCopy = null;
    //             }
    //         }
    //     }
    //     catch (ServiceLocalException exception)
    //     {
    //         this.Disconnect(HangingRequestDisconnectReason.Exception, exception);
    //     }
  }

  //ReadPreamble(ewsXmlReader: EwsServiceXmlReader): void { throw new Error("HangingServiceRequestBase.ts - ReadPreamble : Not implemented."); }

  /* ews-javascript-api specific */
  /**
   * Validates request parameters, and emits the request to the server.
   *
   * @param   {IXHROptions}               request   The request.
   * @return  {Promise<XMLHttpRequest>}   The response returned by the server.
   */
  protected ValidateAndEmitRequest(request: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<any> {
    this.Validate();

    //var request = this.BuildXHR();

    if (this.Service.SendClientLatencies) {
      var clientStatisticsToAdd: string = "";

      //lock(clientStatisticsCache)
      //{
      if (ServiceRequestBase.clientStatisticsCache.length > 0) {
        clientStatisticsToAdd = ServiceRequestBase.clientStatisticsCache[0];
        ServiceRequestBase.clientStatisticsCache.splice(0, 1);
      }
      //}

      if (!StringHelper.IsNullOrEmpty(clientStatisticsToAdd)) {
        if (request.headers[ServiceRequestBase.ClientStatisticsRequestHeader]) {
          request.headers[ServiceRequestBase.ClientStatisticsRequestHeader] = request.headers[ServiceRequestBase.ClientStatisticsRequestHeader] + clientStatisticsToAdd;
        } else {
          request.headers[ServiceRequestBase.ClientStatisticsRequestHeader] = clientStatisticsToAdd;
        }
      }
    }

    //var startTime = Date.now();// DateTime.UtcNow;
    //var response = XHR(request);
    EwsLogging.DebugLog("sending ews request");
    EwsLogging.DebugLog({ ...request, ...{ headers: { ...request.headers, Authorization: "REDACTED" } } }, true);

    return this.Service.XHRApi.xhrStream(request, progressDelegate);
    // return new Promise((successDelegate, errorDelegate) => {
    //     this.stream = new FetchStream(this.Service.Url.ToString(), request);

    //     this.stream.on("data", (chunk) => {
    //         //console.log(chunk.toString());
    //         progressDelegate(chunk.toString());
    //     });

    //     this.stream.on("meta", (meta) => {
    //         if (this.OnResponseHeader && typeof this.OnResponseHeader === 'function') {
    //             this.OnResponseHeader(meta["responseHeaders"])
    //         }
    //         //console.log(meta);
    //     });

    //     this.stream.on("end", (data) => {
    //         this.IsConnected = false;
    //     });

    //     this.stream.on('error', (error) => {
    //         this.Disconnect(HangingRequestDisconnectReason.Exception, <any>error);
    //         if (errorDelegate) {
    //             errorDelegate(error);
    //         }
    //     });
    // });

    //try
    //{
    //    var response = this.GetEwsHttpWebResponse(request);
    //}
    //finally {
    //    if (this.service.SendClientLatencies) {
    //        int clientSideLatency = (int)(DateTime.UtcNow - startTime).TotalMilliseconds;
    //        string requestId = string.Empty;
    //        string soapAction = this.GetType().Name.Replace("Request", string.Empty);

    //        if (response != null && response.Headers != null) {
    //            foreach(string requestIdHeader in ServiceRequestBase.RequestIdResponseHeaders)
    //            {
    //                string requestIdValue = response.Headers.Get(requestIdHeader);
    //                if (!string.IsNullOrEmpty(requestIdValue)) {
    //                    requestId = requestIdValue;
    //                    break;
    //                }
    //            }
    //        }

    //        StringBuilder sb = new StringBuilder();
    //        sb.Append("MessageId=");
    //        sb.Append(requestId);
    //        sb.Append(",ResponseTime=");
    //        sb.Append(clientSideLatency);
    //        sb.Append(",SoapAction=");
    //        sb.Append(soapAction);
    //        sb.Append(";");

    //        lock(clientStatisticsCache)
    //        {
    //            clientStatisticsCache.Add(sb.ToString());
    //        }
    //    }
    //}

    //return response;
  }
}

/**
 * @internal interface to declare Delegate method to handle a hanging request disconnection.
 */
export interface HangingRequestDisconnectHandler {
  /**
   * Delegate method to handle a hanging request disconnection.
   *
   * @param   {any}                                   sender   The object invoking the delegate.
   * @param   {HangingRequestDisconnectEventArgs}     args     Event data.
   */
  (sender: any, args: HangingRequestDisconnectEventArgs): void;
}

/**
 * @internal interface to declare Callback delegate to handle asynchronous responses.
 */
export interface HandleResponseObject {
  /**
   * Callback delegate to handle asynchronous responses.
   *
   * @param   {any}   response   Response received from the server
   */
  (response: any): void;
}
