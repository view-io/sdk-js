/**
 * Represents a list of assistant configurations.
 */
export default class AssistantConfigList {
    /**
     * @param {Object} data
     * @param {Array<Array<{GUID: string, Name: string, Description: string, CreatedUTC: string}>>} data.AssistantConfigs
     */
    constructor({ AssistantConfigs }: {
        AssistantConfigs: Array<Array<{
            GUID: string;
            Name: string;
            Description: string;
            CreatedUTC: string;
        }>>;
    });
    AssistantConfigs: {
        GUID: any;
        Name: any;
        Description: any;
        CreatedUTC: any;
    }[];
}
