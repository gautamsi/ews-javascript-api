/**
 * Identifies the user configuration properties to retrieve.
 * 
 * @Flags
 */
export enum UserConfigurationProperties {

    /**
     * Retrieve the Id property.
     */
    Id = 1,
    
    /**
     * Retrieve the Dictionary property.
     */
    Dictionary = 2,
    
    /**
     * Retrieve the XmlData property.
     */
    XmlData = 4,
    
    /**
     * Retrieve the BinaryData property.
     */
    BinaryData = 8,
    
    /**
     * Retrieve all properties.
     */
    All = UserConfigurationProperties.Id | UserConfigurationProperties.Dictionary | UserConfigurationProperties.XmlData | UserConfigurationProperties.BinaryData
}