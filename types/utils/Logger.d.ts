export default class Logger {
    /**
     * @param {string} type
     * @param {string} message
     */
    log: (severity: any, message: string) => void;
}
export const LoggerInstance: Logger;
