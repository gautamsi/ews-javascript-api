import { Promise } from "./Promise";

export interface IXHROptions {
	type?: string;
	url: string;
	user?: string;
	password?: string;
	headers?: any;
	data?: any;
	responseType?: string;
	customRequestInitializer?: (request: XMLHttpRequest) => void;
}

export interface IXHRApi {
	xhr(xhroptions: IXHROptions): Promise<XMLHttpRequest>;
	type?: string;
}