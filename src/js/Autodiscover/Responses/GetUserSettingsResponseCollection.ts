import { XmlElementNames } from "../../Core/XmlElementNames";

import { AutodiscoverResponseCollection } from "../AutodiscoverResponseCollection";
import { GetUserSettingsResponse } from "./GetUserSettingsResponse";
/**
 * Represents a collection of responses to GetUserSettings
 * @sealed
 */
export class GetUserSettingsResponseCollection extends AutodiscoverResponseCollection<GetUserSettingsResponse> {
  /**
   * Initializes a new instance of the **GetUserSettingsResponseCollection<GetUserSettingsResponse>** class.
   */
  constructor() {
    super();
  }

  /**
   * @internal Create a response instance.
   *
   * @return  {GetUserSettingsResponse}      GetDomainSettingsResponse.
   */
  CreateResponseInstance(): GetUserSettingsResponse {
    return new GetUserSettingsResponse();
  }

  /**
   * @internal Gets the name of the response collection XML element.
   *
   * @return  {string}      Response collection XMl element name.
   */
  GetResponseCollectionXmlElementName(): string {
    return XmlElementNames.UserResponses;
  }

  /**
   * @internal Gets the name of the response instance XML element.
   *
   * @return  {string}      Response instance XMl element name.
   */
  GetResponseInstanceXmlElementName(): string {
    return XmlElementNames.UserResponse;
  }
}
