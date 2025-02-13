export default class GenericExceptionHandlers {
    /**
     * @param {string} argName
     */
    ArgumentNullException: (argName: string) => never;
}
export const GenExceptionHandlersInstance: GenericExceptionHandlers;
