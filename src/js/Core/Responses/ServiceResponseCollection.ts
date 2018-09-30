import { ArgumentOutOfRangeException } from "../../Exceptions/ArgumentException";
import { EwsLogging } from "../EwsLogging";
import { IEnumerable } from "../../Interfaces/IEnumerable";
import { ServiceResponse } from "./ServiceResponse";
import { ServiceResult } from "../../Enumerations/ServiceResult";
import { Strings } from "../../Strings";

/**
 * Represents a strogly typed list of service responses.
 * @sealed
 * @typeparam   {TResponse}     The type of response stored in the list.
 */
export class ServiceResponseCollection<TResponse extends ServiceResponse> implements IEnumerable<TResponse> {

    private responses: TResponse[] = [];

    private overallResult: ServiceResult = ServiceResult.Success;

    /**
     * Gets the total number of responses in the list.
     */
    get Count(): number {
        return this.responses.length;
    }

    get Responses(): TResponse[] { return this.responses; }

    /**
     * Gets a value indicating the overall result of the request that generated this response collection.
     * If all of the responses have their Result property set to Success, OverallResult returns Success.
     * If at least one response has its Result property set to Warning and all other responses have their Result property set to Success, OverallResult returns Warning. 
     * If at least one response has a its Result set to Error, OverallResult returns Error.
     */
    get OverallResult(): ServiceResult { return this.overallResult; }

    /**
     * @internal Initializes a new instance of the **ServiceResponseCollection<TResponse>** class.
     */
    constructor() {
    }

    /**
     * @internal Adds specified response.
     *
     * @param   {TResponse}   response   The response.
     */    
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

    /**
     * Gets an enumerator that iterates through the elements of the collection.
     *
     * @return  {TResponse[]}      An IEnumerator for the collection.
     */    
    GetEnumerator(): TResponse[] {
        return this.responses;
    }

    /**
     * Gets the response at the specified index.
     *
     * @param   {number}        index   The zero-based index of the response to get.
     * @return  {TResponse}     The response at the specified index.
     */
    __thisIndexer(index: number): TResponse {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }

        return this.responses[index];
    }

}
