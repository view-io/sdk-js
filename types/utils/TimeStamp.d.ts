export default class Timestamp {
    /**
     * Constructor to initialize the start time and optional metadata.
     * @param {object} metadata - Optional user-supplied metadata.
     */
    constructor(metadata?: object);
    start: () => string;
    end: any;
    messages: Map<any, any>;
    metadata: any;
    /**
     * Get the total time elapsed in milliseconds between start and end (or now if end is null).
     * @returns {number} Total milliseconds.
     */
    get totalMs(): number;
    /**
     * Add a message to the log with the current timestamp.
     * @param {string} msg - The message to add.
     */
    addMessage(msg: string): void;
    /**
     * Calculate the total milliseconds between two Date objects.
     * @param {Date} start - The start time.
     * @param {Date} end - The end time.
     * @returns {number} The total milliseconds between the two times.
     */
    totalMsBetween(start: Date, end: Date): number;
    /**
     * Dispose method to clean up resources (not strictly necessary in JavaScript).
     */
    dispose(): void;
}
