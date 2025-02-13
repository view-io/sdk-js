/**
 * Represents the result of an enumeration against a table.
 *
 * @property {boolean} success - Indicates if the statistics operation was successful.
 * @property {Object} timestamp - Start and end timestamps for the enumeration.
 * @property {number} maxResults - Maximum number of results retrieved.
 * @property {number} iterationsRequired - Iterations required for the enumeration.
 * @property {Array<any>} objects - Metadata for the retrieved objects.
 * @property {boolean} endOfResults - Indicates if the end of results has been reached.
 * @property {number} recordsRemaining - Number of candidate records remaining in the enumeration.
 * @property {number} totalRecords - Total number of records in the enumeration.
 * @property {Array<any>} sharedPrefixes - Shared prefixes for the enumeration.
 * @property {Object} statistics- Statistics for the enumeration.
 */
export default class EnumerationResult {
    constructor(data?: {});
    /** @type {boolean} */
    success: boolean;
    /** @type {Object} */
    timestamp: any;
    /** @type {number} */
    maxResults: number;
    /** @type {number} */
    iterationsRequired: number;
    /** @type {Array<any>} */
    objects: Array<any>;
    /** @type {boolean} */
    endOfResults: boolean;
    /** @type {number} */
    recordsRemaining: number;
    /** @type {number} */
    totalRecords: number;
    /** @type {Array<any>} */
    sharedPrefixes: Array<any>;
    /** @type {Object} */
    statistics: any;
}
