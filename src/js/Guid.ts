import { v4 as uuidv4 } from 'uuid';
import { EwsLogging } from "./Core/EwsLogging";
import { StringHelper } from "./ExtensionMethods";

/** Guid proxy class */
export class Guid {

	static ParseStrict: boolean = false;

	static Empty: Guid = new Guid();
	private guid: string = '00000000-0000-0000-0000-000000000000';
	//private regx = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	//private regx_withoutdash = /^[0-9a-f]{8}[0-9a-f]{4}[1-5][0-9a-f]{3}[89ab][0-9a-f]{3}[0-9a-f]{12}$/i;

	constructor();
	constructor(str: string);
	constructor(str?: string) {
		let regxStrict = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
		let regxRelax = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
		if (arguments.length > 0) {
			if (StringHelper.IsNullOrEmpty(str) || str === null) {
				throw new TypeError("Guid.ctor - invalid input");
			}
			//str = str.replace("-", "").replace("{", "").replace("}", "").toLowerCase();
			str = str.replace("{", "").replace("}", "").toLowerCase();
			if (regxStrict.test(str)) {
				this.guid = str;
			} else {
				if (!Guid.ParseStrict && regxRelax.test(str)) {
					EwsLogging.DebugLog("info: Guid.ctor - guid is in generic format. if you want to error on non uuid v4 format, set `Guid.ParseStrict = true`");
					this.guid = str;
				}
				else {
					throw new TypeError("Guid.ctor - invalid input, input not of type uuid v4");
				}
			}
		}
	}
	ToString() {
		return this.guid;
	}
	toString() {
		return this.guid;
	}

	static NewGuid(): Guid {
		return new Guid(uuidv4());
	}
	static Parse(str: string): Guid {
		return new Guid(str);
	}

	static TryParse(str, _parsed_output: { guid: Guid; } = { guid: null }) {
		try {
			_parsed_output.guid = new Guid(str);
			return true;
		} catch (error) {
			return false;
		}
	}
}