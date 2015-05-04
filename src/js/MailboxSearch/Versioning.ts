
export interface IDiscoveryVersionable {

    ServerVersion: number;//long
}

export class DiscoverySchemaChanges {
    static SearchMailboxesExtendedData: SchemaChange;
    static SearchMailboxesAdditionalSearchScopes: SchemaChange;
}
