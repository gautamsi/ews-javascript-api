import {ServiceResponse} from "./ServiceResponse";
import {FindFoldersResults} from "../../Search/FindFoldersResults";
import {PropertySet} from "../PropertySet";
import {ExchangeService} from "../ExchangeService";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {Convert} from "../../ExtensionMethods"
import {XmlElementNames} from "../XmlElementNames";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {FolderInfo} from "../ServiceObjects/Folders/FolderInfo";
import {EwsLogging} from "../EwsLogging";
export class FindFolderResponse extends ServiceResponse {
    get Results(): FindFoldersResults { return this.results; }
    private results: FindFoldersResults = new FindFoldersResults();
    private propertySet: PropertySet;
    constructor(propertySet: PropertySet) {
        super();
        this.propertySet = propertySet;

        EwsLogging.Assert(
            this.propertySet != null,
            "FindFolderResponse.ctor",
            "PropertySet should not be null");
    }
    CreateFolderInstance(service: ExchangeService, xmlElementName: string): Folder {
        var flinfo: FolderInfo = new FolderInfo();
        return flinfo.CreateEwsObjectFromXmlElementName<Folder>(service, xmlElementName);

    }
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("FindFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        super.ReadElementsFromXmlJsObject(responseObject, service);
        var rootFolder = responseObject[XmlElementNames.RootFolder];
        this.results.TotalCount = Number(rootFolder[XmlAttributeNames.TotalItemsInView]);
        this.results.MoreAvailable = !Convert.toBool(rootFolder[XmlAttributeNames.IncludesLastItemInRange]);

        // Ignore IndexedPagingOffset attribute if moreItemsAvailable is false.
        var nextPageOffset: number = null;
        if (this.results.MoreAvailable) {
            if (rootFolder[XmlAttributeNames.IndexedPagingOffset]) {
                nextPageOffset = Number(rootFolder[XmlAttributeNames.IndexedPagingOffset]);
            }
        }
        if (rootFolder[XmlElementNames.Folders]) {
            var folders: Folder[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Folder>(
                rootFolder,
                service,
                XmlElementNames.Folders,
                this.CreateFolderInstance,
                true,               /* clearPropertyBag */
                this.propertySet,   /* requestedPropertySet */
                true);              /* summaryPropertiesOnly */

            folders.forEach((item, index) => { this.results.Folders.push(item) });
        }
    }
}

