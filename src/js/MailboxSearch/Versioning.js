"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
/**
 * Class Feature
 */
var SchemaChange = /** @class */ (function () {
    function SchemaChange(serverVersionOrserverBuild) {
        /**
         * Gets the minimum server version.
         *
         * @value The minimum server version.
         */
        this.MinimumServerVersion = 0; //private set;l long
        if (typeof serverVersionOrserverBuild === 'number')
            this.MinimumServerVersion = serverVersionOrserverBuild;
        if (typeof serverVersionOrserverBuild === 'string') {
            var version = serverVersionOrserverBuild.split(".");
            var major = ExtensionMethods_1.Convert.toNumber(version[0]) || 0;
            var minor = ExtensionMethods_1.Convert.toNumber(version[1]) || 0;
            var build = ExtensionMethods_1.Convert.toNumber(version[2]) || 0;
            var revision = ExtensionMethods_1.Convert.toNumber(version[3]) || 0;
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
    SchemaChange.prototype.IsCompatible = function (versionable) {
        // note: when ServerVersion is not set(i.e., => 0), we ignore compatible check on the client side. It will eventually fail server side schema check if incompatible
        return versionable.ServerVersion == 0 || versionable.ServerVersion >= this.MinimumServerVersion;
    };
    return SchemaChange;
}());
exports.SchemaChange = SchemaChange;
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
var DiscoverySchemaChanges = /** @class */ (function () {
    function DiscoverySchemaChanges() {
    }
    ;
    ;
    /**
     * Gets the search mailboxes extended data.
     *
     * @value The search mailboxes extended data.
     */
    DiscoverySchemaChanges.SearchMailboxesExtendedData = new SchemaChange("15.0.730.0");
    /**
     * Gets the search mailboxes additional search scopes.
     *
     * The search mailboxes additional search scopes.
     */
    DiscoverySchemaChanges.SearchMailboxesAdditionalSearchScopes = new SchemaChange("15.0.730.0");
    return DiscoverySchemaChanges;
}());
exports.DiscoverySchemaChanges = DiscoverySchemaChanges;
