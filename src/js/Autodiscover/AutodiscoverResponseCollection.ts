import { AutodiscoverResponse } from "./Responses/AutodiscoverResponse";

/**
 * Represents a collection of responses to a call to the Autodiscover service.
 * @typeparam {TResponse} The type of the responses in the collection.
 */
export abstract class AutodiscoverResponseCollection<TResponse extends AutodiscoverResponse> extends AutodiscoverResponse { //IEnumerable<TResponse>
  private responses: TResponse[];

  /**
   * Gets the number of responses in the collection.
   */
  get Count(): number {
    return this.responses.length
  };

  /**
   * @internal Gets the responses list.
   */
  get Responses(): TResponse[] {
    return this.responses;
  }

  /**
   * @internal Initializes a new instance of the **AutodiscoverResponseCollection<TResponse>** class.
   */
  constructor() {
    super();
    this.responses = [];
  }

  /**
   * Gets the response at the specified index.
   *
   * @param   {number}   index   Index.
   * @returns {TResponse} TResponse at the index
   */
  __thisIndexer(index: number): TResponse {
    return this.Responses[index];
  }

  /**
   * Create a response instance.
   *
   * @return  {TResponse}      TResponse.
   */
  abstract CreateResponseInstance(): TResponse;

  /**
   * Gets an enumerator that iterates through the elements of the collection.
   *
   * @return  {TResponse[]}      An IEnumerator for the collection.
   */
  GetEnumerator(): TResponse[] {
    return this.responses;
  }

  /**
   * @internal Gets the name of the response collection XML element.
   *
   * @return  {string}      Response collection XMl element name.
   */
  abstract GetResponseCollectionXmlElementName(): string;

  /**
   * @internal Gets the name of the response instance XML element.
   *
   * @return  {string}      Response instance XMl element name.
   */
  abstract GetResponseInstanceXmlElementName(): string;

  /**
   * @internal Loads response from XML.
   *
   * @param   {any} responseObject  Json Object converted from XML.
   */
  LoadFromXmlJsObject(responseObject: any): void {

    var element = this.GetResponseCollectionXmlElementName()
    super.LoadFromXmlJsObject(responseObject);
    this.LoadResponseCollectionFromXmlJsObject(responseObject[element]);
  }

  /**
   * Loads the response collection from XML.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  private LoadResponseCollectionFromXmlJsObject(jsObject: any): void {
    var element = this.GetResponseInstanceXmlElementName()
    var responses: any = undefined;
    if (Object.prototype.toString.call(jsObject[element]) === "[object Array]")
      responses = jsObject[element];
    else
      responses = [jsObject[element]];

    for (var i = 0; i < responses.length; i++) {
      var response: TResponse = this.CreateResponseInstance();
      response.LoadFromXmlJsObject(responses[i]);
      this.Responses.push(response);
    }
  }
}
