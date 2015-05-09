///<reference path="..\..\node_modules\reflect-metadata\reflect-metadata.d.ts"/>

import "reflect-metadata";

function MyClassDecorator(value: Function) {
  return function (target: Function) {
      Reflect.defineMetadata("MyClassDecorator", value, target);
  }
}

@MyClassDecorator((name:string)=>{return "something" + name;})
export class testcl{
	test:ts[] = [];

	constructor(){
		this.test.push({test:"1test",test2:"1test2"});
		this.test.push({test:"1test",test2:"1test2"});
		//testenum.fail();
	}

	__this(index:number):ts{ return this.test[index];}
}

export interface ts{
	test:string;
	test2:string;
}

export enum testenum{
	c,f,t
}

export module testenum{
	export function fail():void{
		//throw "asdafda";
		var testcl1:testcl = new testcl();
		let value: Function = Reflect.getMetadata("MyClassDecorator", testcl1.constructor);
		console.log(value("test")); // outputs "my metadata"
		
	}
}
//
//import ed = require("./ExtensionMethods");
//
//var d = ed.DOMParser;
//
//console.log(JSON.stringify(d));
//
//console.log(ed.btoa("names"));
