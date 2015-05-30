import XmlElementNames = require("../../XmlElementNames");
import Folder = require("./Folder");
class TasksFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    get _FolderType(): string { return XmlElementNames.TasksFolder; }
    
    ////////Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): TasksFolder { throw new Error("TasksFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: FolderId): TasksFolder { throw new Error("TasksFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): TasksFolder { throw new Error("TasksFolder.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, name: WellKnownFolderName): TasksFolder { throw new Error("TasksFolder.ts - Bind : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("TasksFolder.ts - GetMinimumRequiredServerVersion : Not implemented."); }
}
export = TasksFolder;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export
