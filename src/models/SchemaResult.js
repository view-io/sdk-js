import { DocumentTypeEnum } from '../enums/DocumentTypeEnum';

/**
 * Represents the schema result of a parsed document.
 *
 * @property {Object} type - The document type.
 * @property {boolean|null} irregular - Flag indicating if the geometry of the object is irregular.
 * @property {Object<string, DataTypeEnum>} schema - Schema of the document, where keys are field names and values are the corresponding data types.
 * @property {Object<string, any>} metadata - Metadata associated with the document.
 * @property {Array[]} flattened - A flattened representation of the object as an array of DataNode instances.
 * @property {number|null} rows - The number of rows in the schema.
 * @property {number|null} columns - The number of columns in the schema.
 * @property {number|null} maxDepth - The maximum depth of the schema.
 * @property {number|null} numObjects - The number of objects in the schema.
 * @property {number|null} numArrays - The number of arrays in the schema.
 * @property {number|null} numKeyValues - The number of key-value pairs in the schema.
 */
export default class SchemaResult {
  /**
   * The document type.
   * @type {DocumentTypeEnum}
   */
  type = DocumentTypeEnum.Unknown;

  /**
   * Flag indicating if the geometry of the object is irregular.
   * @type {boolean|null}
   */
  irregular = null;

  /**
   * Schema of the document, where keys are field names and values are the corresponding data types.
   * @type {Object<string, DataTypeEnum>}
   */
  schema = {};

  /**
   * Metadata associated with the document.
   * @type {Object<string, any>}
   */
  metadata = {};

  /**
   * A flattened representation of the object as an array of DataNode instances.
   * @type {Array[]}
   */
  flattened = [];

  // Private properties for the getters and setters
  _rows = null;
  _columns = null;
  _maxDepth = null;
  _numObjects = null;
  _numArrays = null;
  _numKeyValues = null;

  /**
   * Sets the number of rows, ensuring that the value is non-negative.
   * @param {number|null} value
   */
  set rows(value) {
    if (value != null && value < 0) throw new Error('Rows cannot be less than 0');
    this._rows = value;
  }

  /**
   * Gets the number of rows.
   * @returns {number|null}
   */
  get rows() {
    return this._rows;
  }

  /**
   * Sets the number of columns, ensuring that the value is non-negative.
   * @param {number|null} value
   */
  set columns(value) {
    if (value != null && value < 0) throw new Error('Columns cannot be less than 0');
    this._columns = value;
  }

  /**
   * Gets the number of columns.
   * @returns {number|null}
   */
  get columns() {
    return this._columns;
  }

  /**
   * Sets the maximum depth, ensuring that the value is non-negative.
   * @param {number|null} value
   */
  set maxDepth(value) {
    if (value != null && value < 0) throw new Error('MaxDepth cannot be less than 0');
    this._maxDepth = value;
  }

  /**
   * Gets the maximum depth.
   * @returns {number|null}
   */
  get maxDepth() {
    return this._maxDepth;
  }

  /**
   * Sets the number of objects, ensuring that the value is non-negative.
   * @param {number|null} value
   */
  set numObjects(value) {
    if (value != null && value < 0) throw new Error('NumObjects cannot be less than 0');
    this._numObjects = value;
  }

  /**
   * Gets the number of objects.
   * @returns {number|null}
   */
  get numObjects() {
    return this._numObjects;
  }

  /**
   * Sets the number of arrays, ensuring that the value is non-negative.
   * @param {number|null} value
   */
  set numArrays(value) {
    if (value != null && value < 0) throw new Error('NumArrays cannot be less than 0');
    this._numArrays = value;
  }

  /**
   * Gets the number of arrays.
   * @returns {number|null}
   */
  get numArrays() {
    return this._numArrays;
  }

  /**
   * Sets the number of key-value pairs, ensuring that the value is non-negative.
   * @param {number|null} value
   */
  set numKeyValues(value) {
    if (value != null && value < 0) throw new Error('NumKeyValues cannot be less than 0');
    this._numKeyValues = value;
  }

  /**
   * Gets the number of key-value pairs.
   * @returns {number|null}
   */
  get numKeyValues() {
    return this._numKeyValues;
  }

  /**
   * Constructs a new SchemaResult instance.
   */
  constructor() {
    // Initialize optional properties
    this.rows = null;
    this.columns = null;
    this.maxDepth = null;
    this.numObjects = null;
    this.numArrays = null;
    this.numKeyValues = null;
    this.schema = {};
    this.metadata = {};
    this.flattened = [];
  }
}

// Usage Example
// const schemaResult = new SchemaResult();
// schemaResult.rows = 10;
// schemaResult.columns = 5;
// console.log(schemaResult.rows); // Output: 10
