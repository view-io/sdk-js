export default class NodeModal {
    /**
     * @param {Object} node Information about the credential.
     * @param {string} node.GUID - Node GUID (automatically generated if not provided).
     * @param {string} node.Name - Name of the node.
     * @param {string} node.Hostname - Hostname of the node (default is 'localhost').
     * @param {string} node.InstanceType - Software instance type.
     * @param {Date} node.LastStartUtc - Last start timestamp in UTC.
     * @param {Date} node.CreatedUtc - Creation timestamp in UTC.
     */
    constructor(node: {
        GUID: string;
        Name: string;
        Hostname: string;
        InstanceType: string;
        LastStartUtc: Date;
        CreatedUtc: Date;
    });
    GUID: any;
    name: string;
    hostname: string;
    instanceType: string;
    lastStartUtc: Date;
    createdUtc: Date;
    /**
     * ID setter with validation.
     * @param {number} value - The ID value.
     */
    set id(value: number);
    /**
     * ID getter.
     */
    get id(): number;
    _id: number;
}
