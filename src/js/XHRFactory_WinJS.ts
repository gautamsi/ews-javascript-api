/// <reference path="../../typings/winjs/winjs.d.ts" />

import {IPromise} from "./interfaces";
import WinJS = require('winjs-node');

export function xhr(xhroptions:any): IPromise<XMLHttpRequest>{
	return WinJS.xhr(xhroptions);
}
