import { EwsServiceXmlReader } from "../Core/EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsLogging } from "../Core/EwsLogging";
import { XmlNamespace } from "../Enumerations/XmlNamespace";
import { ComplexPropertyChangedDelegate } from "../Misc/DelegateTypes";
import { ArrayHelper } from "../ExtensionMethods";
import { IRefParam } from "../Interfaces/IRefParam";
import { ExchangeService } from "../Core/ExchangeService";

/**
 * Represents a property that can be sent to or retrieved from EWS.
 */
export class ComplexProperty {
  
  Namespace: XmlNamespace = XmlNamespace.Types;
  //private xmlNamespace: XmlNamespace; ^ no need for pivate property
  OnChange: ComplexPropertyChangedDelegate[] = [];

  constructor() {
  }

  Changed(): void {
    if (this.OnChange && this.OnChange.length > 0) {
      this.OnChange.forEach((delegateInstance, index, array) => {
        if (delegateInstance)
          delegateInstance(this);
      });
    }
  }
  ClearChangeLog(): void { /*virtual method for derived class to implement if needed*/ }
  InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, //xmlNamespace: XmlNamespace, xmlElementName: string,
    readAction: (jsonProperty: any, service: ExchangeService) => void /*System.Func<T, TResult>*/): void {
    //reader.EnsureCurrentNodeIsStartElement(xmlNamespace, xmlElementName);
    //debugger;//check how to implement with jsobject.
    EwsLogging.Assert(false, (<any>this.constructor).name + ".LoadFromXmlJsObject", "ComplexProperty - InternalLoadFromXmlJsObject: todo:convert to jsobjectload. object type = " + (<any>this.constructor).name);
    throw new Error("ComplexProperty - InternalLoadFromXmlJsObject: todo:convert to jsobjectload. object type = " + (<any>this).constructor.name)
    // this.ReadAttributesFromXmlJsObject(jsObject);

    // if (!jsObject.IsEmptyElement) {
    //   do {
    //     jsObject.Read();

    //     switch (jsObject.NodeType) {
    //       case Node.ELEMENT_NODE:
    //         if (!readAction(jsObject)) {
    //           jsObject.SkipCurrentElement();
    //         }
    //         break;
    //       case Node.TEXT_NODE:
    //         this.ReadTextValueFromXmlJsObject(jsObject);
    //         break;
    //     }
    //   }
    //   while (!jsObject.HasRecursiveParent(xmlElementName));
    //   jsObject.SeekLast(); // go back for next process to read.
    //}
  }
  //InternalToJson(service: ExchangeService): any { throw new Error("ComplexProperty.ts - InternalToJson : Not implemented."); }
  InternalValidate(): void { /*virtual method for derived class to implement if needed*/ }
  //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ComplexProperty.ts - LoadFromJson : Not implemented."); }
  //LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("ComplexProperty.ts - LoadFromXml : Not implemented."); }
  LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {//, xmlElementName: string
    this.InternalLoadFromXmlJsObject(
      jsObject,
      service,
      this.ReadElementsFromXmlJsObject);
    // xmlNamespace || this.Namespace,
    // xmlElementName,
  }
  ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void { debugger;/*virtual method for derived class to implement if needed*/ }
  ReadTextValueFromXmlJsObject(jsObject: EwsServiceXmlReader): void { debugger;/*virtual method for derived class to implement if needed*/ }
  SetFieldValue<T>(field: IRefParam<T>, value: T): void {  //irefparam to workaround ref parameters irefparam.value is actual value;
    var applyChange: boolean = false;

    if (field.getValue() == null) {
      applyChange = value != null;
    }
    else {
      var fieldAny = <any>field.getValue();
      if (fieldAny.CompareTo) //todo: fix this if find new ways to check if it implements certain interface - if( field is IComparable)
      {
        applyChange = fieldAny.CompareTo(value) != 0; //todo: until fix the interface check (field as IComparable).CompareTo(value) != 0;
      }
      else {
        applyChange = true;
      }
    }

    if (applyChange) {
      //debugger;//debug; check; check for ref value setting. 
      field.setValue(value);
      this.Changed();
    }
  }
  ReadElementsFromXmlJsObject(jsonProperty: any, service: ExchangeService): void { debugger; /* abstract method - should implement*/ }
  ReadElementsFromXmlJsObjectToPatch(jsonProperty: any, service: ExchangeService): void { debugger; /* abstract method - should implement*/ }
  //UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("ComplexProperty.ts - UpdateFromXml : Not implemented."); }
  UpdateFromXmlJsObject(jsObject: any, service: ExchangeService /*, xmlElementName: string, xmlNamespace?: XmlNamespace*/): void {

    this.InternalLoadFromXmlJsObject(
      jsObject,
      service,
      this.ReadElementsFromXmlJsObjectToPatch);
    // xmlNamespace || this.Namespace,
    // xmlElementName,
  }
  /// <summary>
  /// Implements ISelfValidate.Validate. Validates this instance.
  /// </summary>
  Validate(): void //ISelfValidate interface
  {
    this.InternalValidate();
  }
  WriteAttributesToXml(writer: EwsServiceXmlWriter): void { /*virtual method for derived class to implement if needed*/ }
  WriteElementsToXml(writer: EwsServiceXmlWriter): void { /*virtual method for derived class to implement if needed*/ }

  /** reverted to simplify child clarr override - it breaks all derived/child class and throws error "incorrectly extends base class" due to TypeScript design */
  //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void { throw new Error("ComplexProperty.ts - WriteToXml : Not implemented."); }
  WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void {
    if (!xmlNamespace)
      xmlNamespace = this.Namespace;

    writer.WriteStartElement(xmlNamespace, xmlElementName);
    this.WriteAttributesToXml(writer);
    this.WriteElementsToXml(writer);
    writer.WriteEndElement();
  }
  // WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void;
  // WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): void;
  // WriteToXml(writer: EwsServiceXmlWriter, xmlElementNameOrNameSpace: string | XmlNamespace, xmlElementName: string = null): void {
  //   let xmlNamespace = this.Namespace;
  //   if (typeof xmlElementNameOrNameSpace === 'number') {
  //     xmlNamespace = xmlElementNameOrNameSpace;
  //   }
  //   else {
  //     xmlElementName = xmlElementNameOrNameSpace;
  //   }

  //   writer.WriteStartElement(xmlNamespace, xmlElementName);
  //   this.WriteAttributesToXml(writer);
  //   this.WriteElementsToXml(writer);
  //   writer.WriteEndElement();
  // }
}

