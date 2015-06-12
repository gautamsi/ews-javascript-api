import {ServiceResponse} from "./ServiceResponse";
import {ServiceResult} from "../../Enumerations/ServiceResult";
import {EwsLogging} from "../EwsLogging";
export class ServiceResponseCollection<TResponse extends ServiceResponse> { // IEnumerable<TResponse> where TResponse : ServiceResponse
    get Count(): number { return this.responses.length; }
    //Item: TResponse;
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
            throw new Error("index out of range: " + index);// ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }

        return this.responses[index];
    }

}
