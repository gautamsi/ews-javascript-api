
/**
 * @internal Defines the type of error handling used for service method calls. 
 */
export enum ServiceErrorHandling {
  
  /**
   * Service method should return the error(s).
   */
  ReturnErrors = 0,
  
  /**
   * Service method should throw exception when error occurs.
   */
  ThrowOnError = 1
}