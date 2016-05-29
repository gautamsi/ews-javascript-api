import {ISelfValidate} from "../Interfaces/ISelfValidate";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {StringHelper} from "../ExtensionMethods";

/**
 * Represents a mobile phone.
 * 
 * @sealed
 */
export class MobilePhone implements ISelfValidate {

    /**
     * Name of the mobile phone.
     */
    private name: string;

    /**
     * Phone number of the mobile phone.
     */
    private phoneNumber: string;

    /**
     * Gets or sets the name associated with this mobile phone.
     */
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.name = value;
    }

    /**
     * Gets or sets the number of this mobile phone.
     */
    get PhoneNumber(): string {
        return this.phoneNumber;
    }
    set PhoneNumber(value: string) {
        this.phoneNumber = value;
    }

    /**
     * Initializes a new instance of the **MobilePhone** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MobilePhone** class.
     *
     * @param   {string}   name          The name associated with the mobile phone.
     * @param   {string}   phoneNumber   The mobile phone number.
     */
    constructor(name: string, phoneNumber: string);
    constructor(name: string = null, phoneNumber: string = null) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    /**
     * Validates this instance.
     */
    Validate(): void {
        if (StringHelper.IsNullOrEmpty(this.PhoneNumber)) {
            throw new ServiceValidationException("PhoneNumber cannot be empty.");
        }
    };
}