import {ArgumentOutOfRangeException} from '../../Exceptions/ArgumentException';
import {DayOfTheWeek} from "../../Enumerations/DayOfTheWeek";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../../Core/EwsUtilities";
import {ExchangeService} from "../../Core/ExchangeService";
import {StringHelper, ArrayHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {ComplexProperty} from "../ComplexProperty";
/**
 * Represents a collection of DayOfTheWeek values.
 */
export class DayOfTheWeekCollection extends ComplexProperty {

    private items: DayOfTheWeek[] = [];// System.Collections.Generic.List<T>;
    get_Item(index: number): DayOfTheWeek {
        return this.items[index];
    }
    get Count(): number {
        return this.items.length;
    }

    /**
     * @internal Initializes a new instance of the **DayOfTheWeekCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * Adds a day to the collection if it is not already present.
     *
     * @param   {DayOfTheWeek}   dayOfTheWeek   The day to add.
     */
    Add(dayOfTheWeek: DayOfTheWeek): void {
        if (this.items.indexOf(dayOfTheWeek) < 0) {
            this.items.push(dayOfTheWeek);
            this.Changed();
        }
    }

    /**
     * Adds multiple days to the collection if they are not already present.
     *
     * @param   {}   daysOfTheWeek   The days to add.
     */
    AddRange(daysOfTheWeek: DayOfTheWeek[]): void {
        for (let dayOfTheWeek of daysOfTheWeek) {
            this.Add(dayOfTheWeek);
        }
    }

    /**
     * Clears the collection.
     */
    Clear(): void {
        if (this.Count > 0) {
            this.items.splice(0);
            this.Changed();
        }

    }

    /**
     * @internal Loads service object from XMLJsObject Value.
     *
     * @param   {string}            jsObject                Jason Object converted from XML.
     */
    LoadFromXmlJsObjectValue(jsObjectValue: string): void {
        EwsUtilities.ParseEnumValueList<DayOfTheWeek>(
            this.items,
            jsObjectValue,
            ' ', DayOfTheWeek);
    }

    /**
     * Remove a specific day from the collection.
     *
     * @param   {DayOfTheWeek}   dayOfTheWeek   The day to remove.
     * @return  {boolean}       True if the day was removed from the collection, false otherwise.
     */
    Remove(dayOfTheWeek: DayOfTheWeek): boolean {
        if (this.items.indexOf(dayOfTheWeek)) {

            let result = this.items.splice(this.items.indexOf(dayOfTheWeek));

            if (result.length > 0) {
                this.Changed();
            }

            return result.length > 0;
        }

        return false;
    }

    /**
     * Removes the day at a specific index.
     *
     * @param   {number}   index   The index of the day to remove.
     */
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }

        this.items.splice(index);
        this.Changed();
    }


    /**
     * Convert to string.
     *
     * @param   {string}   separator   The separator.
     * @return  {string}               String representation of collection.
     */
    ToString(): string;
    /**
     * Convert to string.
     *
     * @param   {string}   separator   The separator.
     * @return  {string}               String representation of collection.
     */
    ToString(separator: string): string;
    ToString(separator: string = " "): string {
        if (this.Count == 0) {
            return StringHelper.Empty;
        }
        else {
            let daysOfTheWeekArray: string[] = new Array(this.Count);

            for (let i = 0; i < this.Count; i++) {
                daysOfTheWeekArray[i] = this[i].ToString();
            }

            return daysOfTheWeekArray.join(separator);
        }
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}   xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        let daysOfWeekAsString: string = this.ToString(" ");

        if (!StringHelper.IsNullOrEmpty(daysOfWeekAsString)) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.DaysOfWeek,
                daysOfWeekAsString);
        }
    }
}