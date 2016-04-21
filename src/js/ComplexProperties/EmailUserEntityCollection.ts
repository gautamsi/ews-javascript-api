import {XmlElementNames} from "../Core/XmlElementNames";

import {EmailUserEntity} from "./EmailUserEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of EmailUserEntity objects.
 */
export class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {

    /**
     * @internal Initializes a new instance of the **EmailUserEntityCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **EmailUserEntityCollection** class.
     *
     * @param   {EmailUserEntity[]}   collection   The collection of objects to include.
     */
    constructor(collection: EmailUserEntity[]);
    constructor(collection: EmailUserEntity[] = null) {
        super();
        if (collection != null) {
            collection.forEach((entity) => { this.InternalAdd(entity); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}              xmlElementName   Name of the XML element.
     * @return  {EmailUserEntity}     EmailUserEntity.
     */
    CreateComplexProperty(xmlElementName: string): EmailUserEntity { return new EmailUserEntity(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {EmailUserEntity}      EmailUserEntity.
     */
    CreateDefaultComplexProperty(): EmailUserEntity { return new EmailUserEntity(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {EmailUserEntity}       complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string { return XmlElementNames.NlgEmailUser; }
}