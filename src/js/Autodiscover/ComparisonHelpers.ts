import { StringHelper } from "../ExtensionMethods";

/**
 * @internal Represents a set of helper methods for performing string comparisons.
 * @static
 */
export class ComparisonHelpers {
  /**
   * Case insensitive check if the collection contains the string.
   *
   * @param   {any[]}   collection   The collection of objects, only strings are checked
   * @param   {string}  match        String to match
   * @return  {boolean}                true, if match contained in the collection
   */
  CaseInsensitiveContains(collection: any[], match: string): boolean {
    for (let obj of collection) {
      const str = obj as string;
      if (str != null) {
        if (StringHelper.Compare(str, match, true) == 0) {
          return true;
        }
      }
    }
  }
}



