import { Convert } from "../ExtensionMethods";
import { ExchangeService } from "../Core/ExchangeService";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Mailbox statistics item
 * 
 * @sealed
 */
export class MailboxStatisticsItem {

    /**
     * Mailbox id
     */
    MailboxId: string = null;

    /**
     * Display name
     */
    DisplayName: string = null;

    /**
     * Item count
     */
    ItemCount: number = 0;

    /**
     * Total size
     * [CLSCompliant(false)]
     */
    Size: number = 0;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {SearchRefinerItem}
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): MailboxStatisticsItem {
        let msi: MailboxStatisticsItem = new MailboxStatisticsItem();
        msi.MailboxId = jsObject[XmlElementNames.MailboxId];
        msi.DisplayName = jsObject[XmlElementNames.DisplayName];
        msi.ItemCount = Convert.toNumber(jsObject[XmlElementNames.ItemCount]);
        msi.Size = Convert.toNumber(jsObject[XmlElementNames.Size]);
        return msi;
    }
}