/**
 * Represents a list of assistant configurations.
 */
export default class AssistantConfigList {
  /**
   * @param {Object} data
   * @param {Array<Array<{GUID: string, Name: string, Description: string, CreatedUTC: string}>>} data.AssistantConfigs
   */
  constructor({ AssistantConfigs }) {
    this.AssistantConfigs = AssistantConfigs.map(({ GUID, Name, Description, CreatedUTC }) => ({
      GUID,
      Name,
      Description,
      CreatedUTC,
    }));
  }
}
