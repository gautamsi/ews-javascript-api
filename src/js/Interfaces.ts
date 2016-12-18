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

export interface IXHRProgress {
	type: 'data' | 'header' | 'end' | 'error'
	data?: string;
	chunk?: string;
	progress?: number;
	done?: boolean;
	headers?: any;
	originalHeaders?: any;
	error?: any;
}

export interface IXHRApi {
	xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
	xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
	disconnect(): void;
	apiName?: string;
}