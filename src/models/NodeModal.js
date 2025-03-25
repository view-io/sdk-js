import { v4 as uuidV4 } from 'uuid';

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
  constructor(node) {
    const {
      GUID = uuidV4(),
      Name = null,
      Hostname = 'localhost',
      InstanceType = 'StorageServer',
      LastStartUtc = new Date(),
      CreatedUtc = new Date(),
    } = node;

    this.GUID = GUID;
    this.name = Name;
    this.hostname = Hostname;
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
