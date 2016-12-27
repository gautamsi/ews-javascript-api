
/**
 * @internal Defines how a complex property behaves.
 * 
 * [Flags]
 */
export enum PropertyDefinitionFlags {
  
  /**
   * No specific behavior.
   */
  None = 0,
  
  /**
   * The property is automatically instantiated when it is read.
   */
  AutoInstantiateOnRead = 1,
  
  /**
   * The existing instance of the property is reusable. 
   */
  ReuseInstance = 2,
  
  /**
   * The property can be set.
   */
  CanSet = 4,
  
  /**
   * The property can be updated.
   */
  CanUpdate = 8,
  
  /**
   * The property can be deleted.
   */
  CanDelete = 16,
  
  /**
   * The property can be searched.
   */
  CanFind = 32,
  
  /**
   * The property must be loaded explicitly
   */
  MustBeExplicitlyLoaded = 64,
  
  /**
   * Only meaningful for "collection" property. 
   * With this flag, the item in the collection gets updated, instead of creating and adding new items to the collection.
   * Should be used together with the ReuseInstance flag.
   */
  UpdateCollectionItems = 128
}