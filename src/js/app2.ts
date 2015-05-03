export class testcl{
	test:ts[] = [];

	constructor(){
		this.test.push({test:"1test",test2:"1test2"});
		this.test.push({test:"1test",test2:"1test2"});
	}

	__this(index:number):ts{ return this.test[index];}
}

export interface ts{
	test:string;
	test2:string;
}


//
//import ed = require("./ExtensionMethods");
//
//var d = ed.DOMParser;
//
//console.log(JSON.stringify(d));
//
//console.log(ed.btoa("names"));
