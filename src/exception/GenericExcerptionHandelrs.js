export default class GenericExceptionHandlers {
  /**
   * @param {string} argName
   */
  ArgumentNullException = (argName) => {
    throw Error(`ArgumentNullException: ${argName} is null or empty`);
  };
}
export const GenExceptionHandlersInstance = new GenericExceptionHandlers();
