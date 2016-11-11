
/**
 * Class ExtendedAttribute
 * 
 * @sealed
 */
export class ExtendedAttribute {

    /**
     * Gets or sets the name.
     * 
     * @value The name.
     */
    Name: string = null;

    /**
     * Gets or sets the value.
     * 
     * @value The value.
     */
    Value: string = null;

    /**
     * Initializes a new instance of the **ExtendedAttribute** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ExtendedAttribute** class.
     *
     * @param   {string}   name    The name.
     * @param   {string}   value   The value.
     */
    constructor(name: string, value: string);
    constructor(name: string = null, value: string = null) {
        this.Name = name;
        this.Value = value;
    }
}

// export class ExtendedAttributes extends Array<ExtendedAttribute> {
// }