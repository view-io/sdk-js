export default class IngestQueue {
  /**
   * @param {Object} ingestQueue Ingest queue.
   * @param {string} ingestQueue.GUID - Ingest queue guid.
   */
  constructor(ingestQueue) {
    const { GUID } = ingestQueue;
    this.GUID = GUID;
    Object.entries(ingestQueue).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}
