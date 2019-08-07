import { XmlElementNames } from "../../Core/XmlElementNames";

import { AutodiscoverResponseCollection } from "../AutodiscoverResponseCollection";
import { GetDomainSettingsResponse } from "./GetDomainSettingsResponse";
/**
 * Represents a collection of responses to GetDomainSettings
 * @sealed
 */
export class GetDomainSettingsResponseCollection extends AutodiscoverResponseCollection<GetDomainSettingsResponse> {
  /**
   * Initializes a new instance of the **GetDomainSettingsResponseCollection<GetDomainSettingsResponse>** class.
   */
  constructor() {
    super();
  }

  /**
   * @internal Create a response instance.
   *
   * @return  {GetDomainSettingsResponse}      GetDomainSettingsResponse.
   */
  CreateResponseInstance(): GetDomainSettingsResponse {
    return new GetDomainSettingsResponse();
  }

  /**
   * @internal Gets the name of the response collection XML element.
   *
   * @return  {string}      Response collection XMl element name.
   */
  GetResponseCollectionXmlElementName(): string {
    return XmlElementNames.DomainResponses;
  }

  /**
   * @internal Gets the name of the response instance XML element.
   *
   * @return  {string}      Response instance XMl element name.
   */
  GetResponseInstanceXmlElementName(): string {
    return XmlElementNames.DomainResponse;
  }
}
