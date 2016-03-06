import {ServiceResponse} from "./ServiceResponse";
import {Strings} from "../../Strings";
import {ArgumentOutOfRangeException} from "../../Exceptions/ArgumentException";
import {ServiceResult} from "../../Enumerations/ServiceResult";
import {EwsLogging} from "../EwsLogging";
export class ServiceResponseCollection<TResponse extends ServiceResponse> { // IEnumerable<TResponse> where TResponse : ServiceResponse
    get Count(): number { return this.responses.length; }
    get Responses(): TResponse[]{return this.responses;}
    get OverallResult(): ServiceResult { return this.overallResult; }
    private responses: TResponse[] = [];// System.Collections.Generic.List<T>;
    private overallResult: ServiceResult = ServiceResult.Success;
    Add(response: TResponse): void {
        EwsLogging.Assert(
            response != null,
            "EwsResponseList.Add",
            "response is null");

        if (response.Result > this.overallResult) {
            this.overallResult = response.Result;
        }

        this.responses.push(response);
    }
    GetEnumerator(): any { throw new Error("ServiceResponseCollection.ts - GetEnumerator : Not implemented."); }
    __thisIndexer(index: number) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }

        return this.responses[index];
    }

}
