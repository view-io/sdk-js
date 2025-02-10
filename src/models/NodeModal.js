import { v4 as uuidV4 } from 'uuid';

export default class NodeModal {
  /**
   * @param {Object} node Information about the credential.
   * @param {number} node.id - Node ID.
   * @param {string} node.GUID - Node GUID (automatically generated if not provided).
   * @param {string} node.name - Name of the node.
   * @param {string} node.hostname - Hostname of the node (default is 'localhost').
   * @param {string} node.InstanceType - Software instance type.
   * @param {Date} node.LastStartUtc - Last start timestamp in UTC.
   * @param {Date} node.CreatedUtc - Creation timestamp in UTC.
   */
  constructor(node) {
    const {
      id,
      GUID = uuidV4(),
      name = null,
      hostname = 'localhost',
      InstanceType = 'StorageServer',
      LastStartUtc = new Date(),
      CreatedUtc = new Date(),
    } = node;
    this._id = 0;
    this.id = id; // Set through the setter method
    this.GUID = GUID;
    this.name = name;
    this.hostname = hostname;
    this.instanceType = InstanceType;
    this.lastStartUtc = LastStartUtc;
    this.createdUtc = CreatedUtc;
  }

  /**
   * ID getter.
   */
  get id() {
    return this._id;
  }

  /**
   * ID setter with validation.
   * @param {number} value - The ID value.
   */
  set id(value) {
    if (value < 1) {
      throw new Error('ID must be greater than 0');
    }
    this._id = value;
  }
}
