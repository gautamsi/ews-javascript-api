import { StringHelper } from "./ExtensionMethods";
import * as uuid from 'uuid';
/** Guid proxy class */
export class Guid {
	static Empty: Guid = new Guid();
	private guid: string = '00000000-0000-0000-0000-000000000000';
	//private regx = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	//private regx_withoutdash = /^[0-9a-f]{8}[0-9a-f]{4}[1-5][0-9a-f]{3}[89ab][0-9a-f]{3}[0-9a-f]{12}$/i;

	constructor();
	constructor(str: string);
	constructor(str?: string) {
		let regx = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
		if (arguments.length > 0) {
			if (StringHelper.IsNullOrEmpty(str) || str === null) {
				throw new TypeError("Guid.ctor - invalid input");
			}
			//str = str.replace("-", "").replace("{", "").replace("}", "").toLowerCase();
			str = str.replace("{", "").replace("}", "").toLowerCase();
			if (regx.test(str)) {
				this.guid = str;
			} else {
				throw new TypeError("Guid.ctor - invalid input");
			}
		}
	}
	ToString() {
		return this.guid;
	}
	toString(){
		return this.guid;
	}

	static NewGuid(): Guid {
		return new Guid(uuid.v4());
	}
	static Parse(str: string): Guid {
		return new Guid(str);
	}

	static TryParse(str, _parsed_output: { guid: Guid } = { guid: null }) {
		try {
			_parsed_output.guid = new Guid(str);
			return true;
		} catch (error) {
			return false;
		}
	}
}