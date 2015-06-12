
export interface IDiscoveryVersionable {

    ServerVersion: number;//long
}

export class DiscoverySchemaChanges {
    static SearchMailboxesExtendedData: DiscoverySchemaChanges.SchemaChange;
    static SearchMailboxesAdditionalSearchScopes: DiscoverySchemaChanges.SchemaChange;
}

export module DiscoverySchemaChanges {
    export class SchemaChange {
        /// <summary>
        /// Gets the minimum server version.
        /// </summary>
        /// <value>
        /// The minimum server version.
        /// </value>
        MinimumServerVersion: number;//private set;l long

        /// <summary>
        /// Initializes a new instance of the <see cref="SchemaChange"/> class.
        /// </summary>
        /// <param name="serverVersion">The server version.</param>
        /// <summary>
        /// Initializes a new instance of the <see cref="SchemaChange"/> class.
        /// </summary>
        /// <param name="serverBuild">The server build.</param>
        constructor(serverVersion:number); //serververion:long
        constructor(serverBuild:string);
        constructor(serverVersionOrserverBuild: number | string) //serververion:long
        {
            if (typeof serverVersionOrserverBuild === 'number')
                this.MinimumServerVersion = serverVersionOrserverBuild;

            if (typeof serverVersionOrserverBuild === 'string') {
                //                        System. Version Version = new Version(serverBuild);
                //
                //                        this.MinimumServerVersion = (version.Build & 0x7FFF) |
                //                                            ((version.Minor & 0x3F) << 16) |
                //                                            ((version.Major & 0x3F) << 22) |
                //                                            0x70008000;
            }
        }
        /// <summary>
        /// Determines whether the specified versionable is compatible.
        /// </summary>
        /// <param name="versionable">The versionable.</param>
        /// <returns><c>true</c> if the specified versionable is compatible; otherwise, <c>false</c>.</returns>
        IsCompatible(versionable: IDiscoveryVersionable): boolean {
            // note: when ServerVersion is not set(i.e., => 0), we ignore compatible check on the client side. It will eventually fail server side schema check if incompatible
            return versionable.ServerVersion == 0 || versionable.ServerVersion >= this.MinimumServerVersion;
        }
    }

}