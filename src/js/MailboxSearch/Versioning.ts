import { Convert } from "../ExtensionMethods";
/**
 * Interface IDiscoveryVersionable.
 * This interface will be used to store versioning information on the request
 *
 */
export interface IDiscoveryVersionable {

    /**
     * Gets or sets the server version.
     * 
     * @value The server version.
     */
    ServerVersion: number;//long
}

/**
 * Class Feature
 */
export class SchemaChange {

    /**
     * Gets the minimum server version.
     * 
     * @value The minimum server version. 
     */
    MinimumServerVersion: number = 0;//private set;l long

    /**
     * Initializes a new instance of the **SchemaChange** class.
     *
     * @param   {number}   serverVersion   The server version.
     */
    constructor(serverVersion: number);
    /**
     * Initializes a new instance of the **SchemaChange** class.
     *
     * @param   {string}   serverBuild   The server build.
     */
    constructor(serverBuild: string);
    constructor(serverVersionOrserverBuild: number | string) {
        if (typeof serverVersionOrserverBuild === 'number')
            this.MinimumServerVersion = serverVersionOrserverBuild;

        if (typeof serverVersionOrserverBuild === 'string') {
            let version = serverVersionOrserverBuild.split(".");
            let major = Convert.toNumber(version[0]) || 0;
            let minor = Convert.toNumber(version[1]) || 0;
            let build = Convert.toNumber(version[2]) || 0;
            let revision = Convert.toNumber(version[3]) || 0;

            this.MinimumServerVersion = (build & 0x7FFF) |
                ((minor & 0x3F) << 16) |
                ((major & 0x3F) << 22) |
                0x70008000;
            //                        System. Version Version = new Version(serverBuild);
            //
            //                        this.MinimumServerVersion = (version.Build & 0x7FFF) |
            //                                            ((version.Minor & 0x3F) << 16) |
            //                                            ((version.Major & 0x3F) << 22) |
            //                                            0x70008000;
        }
    }

    /**
     * Determines whether the specified versionable is compatible.
     *
     * @param   {IDiscoveryVersionable}   versionable   The versionable.
     * @return  {boolean}                 *true* if the specified versionable is compatible; otherwise, *false*.
     */
    IsCompatible(versionable: IDiscoveryVersionable): boolean {
        // note: when ServerVersion is not set(i.e., => 0), we ignore compatible check on the client side. It will eventually fail server side schema check if incompatible
        return versionable.ServerVersion == 0 || versionable.ServerVersion >= this.MinimumServerVersion;
    }
}

/**
 * Class DiscoverySchemaChanges
 * This class is a catalog of schema changes in discovery with the minimum server version in which they were introduced When making a schema change
 * - First make the server side changes and check them in
 * - Create SchemaChange() entry here for the change and the version at which it was checked int
 * - In the request
 *  - Implement IDiscoveryVersionable
 *  - In the Validate method verify if any new schema parameters are compatible if not error out
 *  - In the WriteXml method downgrade the schema based on compatability checks
 * Eg, SearchMailboxesRequest.cs
 *
 * @static
 */
export class DiscoverySchemaChanges {
    /**
     * Gets the search mailboxes extended data.
     * 
     * @value The search mailboxes extended data.
     */
    static SearchMailboxesExtendedData: SchemaChange = new SchemaChange("15.0.730.0");;

    /**
     * Gets the search mailboxes additional search scopes.
     * 
     * The search mailboxes additional search scopes.
     */
    static SearchMailboxesAdditionalSearchScopes: SchemaChange = new SchemaChange("15.0.730.0");;
}