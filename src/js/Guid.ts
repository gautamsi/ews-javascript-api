import {StringHelper} from "./ExtensionMethods";
import * as uuid from 'node-uuid';
/** Guid proxy class */
export class Guid {
	static Empty: Guid = new Guid('00000000-0000-0000-0000-000000000000');
	private guid: string = null;
	constructor(str: string) {
		if (StringHelper.IsNullOrEmpty(str) || str === null) {
			throw new TypeError("Guid.ctor - invalid input");
		}
		str = str.replace("-", "").replace("{", "").replace("}", "").toLowerCase();
		var parsed = uuid.parse(str);
		if (parsed) {
			this.guid = uuid.unparse(parsed);
			// if (this.guid.replace("-", "") !== str.toString()) {
			// 	throw new TypeError("Guid.ctor - malformed string")
			// }
		}
	}
	ToString() {
		return this.guid;
	}

	static Parse(str: string): Guid {
		var parsed = uuid.parse(str);
		if (parsed) {
			return new Guid(str);
		}
	}
}