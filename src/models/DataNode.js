import { DataTypeEnum } from '../enums/DataTypeEnum';

/**
 * A node of data from a parsed document.
 *
 * @property {string|null} key - The key associated with the data.
 * @property {DataTypeEnum} type - The DataType associated with the key-value pair.
 * @property {any} data - The data associated with the key.
 */
export default class DataNode {
  /**
   * The key.
   * @type {string|null}
   */
  key = null;

  /**
   * The DataType associated with the key-value pair.
   * @type {DataTypeEnum}
   */
  type = DataTypeEnum.String;

  /**
   * The data associated with the key.
   * @type {any}
   */
  data = null;

  /**
   * Instantiates the DataNode.
   *
   * @param {string|null} key The key associated with the data node.
   * @param {any} data The data associated with the key.
   * @param {DataTypeEnum} type The type of data. Defaults to `DataTypeEnum.String`.
   *
   * @throws {Error} If the `key` is an empty string, an error is thrown.
   */
  constructor(key = null, data = null, type = DataTypeEnum.String) {
    if (key !== null && key === '') throw new Error('Key cannot be null or empty');
    this.key = key;
    this.data = data;
    this.type = type;
  }

  /**
   * Retrieve the DataType of the supplied value.
   *
   * This static method determines the `DataTypeEnum` of a value based on its type.
   * The method checks for decimals, integers, longs, booleans, and defaults to
   * `DataTypeEnum.String` if none of the conditions match.
   *
   * @param {any} val The object to evaluate.
   * @returns {DataTypeEnum} The determined DataType.
   */
  static typeFromValue(val) {
    if (val === null || val === undefined) return DataTypeEnum.Null;

    // Check for decimal
    if (typeof val === 'string' && val.includes('.')) {
      if (!isNaN(parseFloat(val))) {
        return DataTypeEnum.Decimal;
      }
    }

    // Check for integer
    if (Number.isInteger(parseInt(val))) {
      return DataTypeEnum.Integer;
    }

    // Check for long (JavaScript doesn't have a distinct 'long' type, so it's treated as a Number)
    if (Number.isInteger(parseFloat(val))) {
      return DataTypeEnum.Long;
    }

    // Check for boolean
    if (val === 'true' || val === 'false') {
      return DataTypeEnum.Boolean;
    }

    // Default to String
    return DataTypeEnum.String;
  }
}

// Usage Example
// const node = new DataNode('exampleKey', 'some data', DataTypeEnum.String);
// console.log(node.key); // Output: 'exampleKey'
