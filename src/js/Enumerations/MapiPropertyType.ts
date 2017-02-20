
/**
 * Defines the MAPI type of an extended property.
 */
export enum MapiPropertyType {
    
    /**
     * The property is of type ApplicationTime.
     */
    ApplicationTime = 0,
    
    /**
     * The property is of type ApplicationTimeArray.
     */
    ApplicationTimeArray = 1,
    
    /**
     * The property is of type Binary.
     */
    Binary = 2,
    
    /**
     * The property is of type BinaryArray.
     */
    BinaryArray = 3,
    
    /**
     * The property is of type Boolean.
     */
    Boolean = 4,
    
    /**
     * The property is of type CLSID.
     */
    CLSID = 5,
    
    /**
     * The property is of type CLSIDArray.
     */
    CLSIDArray = 6,
    
    /**
     * The property is of type Currency.
     */
    Currency = 7,
    
    /**
     * The property is of type CurrencyArray.
     */
    CurrencyArray = 8,
    
    /**
     * The property is of type Double.
     */
    Double = 9,
    
    /**
     * The property is of type DoubleArray.
     */
    DoubleArray = 10,
    
    /**
     * The property is of type Error.
     */
    Error = 11,
    
    /**
     * The property is of type Float.
     */
    Float = 12,
    
    /**
     * The property is of type FloatArray.
     */
    FloatArray = 13,
    
    /**
     * The property is of type Integer.
     */
    Integer = 14,
    
    /**
     * The property is of type IntegerArray.
     */
    IntegerArray = 15,
    
    /**
     * The property is of type Long.
     */
    Long = 16,
    
    /**
     * The property is of type LongArray.
     */
    LongArray = 17,
    
    /**
     * The property is of type Null.
     */
    Null = 18,
    
    /**
     * The property is of type Object.
     */
    Object = 19,
    
    /**
     * The property is of type ObjectArray.
     */
    ObjectArray = 20,
    
    /**
     * The property is of type Short.
     */
    Short = 21,
    
    /**
     * The property is of type ShortArray.
     */
    ShortArray = 22,
    
    /**
     * The property is of type SystemTime.
     */
    SystemTime = 23,
    
    /**
     * The property is of type SystemTimeArray.
     */
    SystemTimeArray = 24,
    
    /**
     * The property is of type String.
     */
    String = 25,
    
    /**
     * The property is of type StringArray.
     */
    StringArray = 26
}