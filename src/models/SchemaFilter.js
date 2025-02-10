import { SchemaCondition } from '../enums/SchemaCondition';

export default class SchemaFilter {
  /**
   * @param {string} property - The schema element upon which to evaluate.
   * @param {SchemaCondition} condition - The condition by which the schema element, or its value, is evaluated.
   * @param {string} value - The value to be evaluated using the specified condition against the specified schema element.
   */
  constructor(property = '', condition = SchemaCondition.Equals, value = '') {
    if (property) {
      this.property = property;
    } else {
      this.property = '';
    }
    this.condition = condition;
    this.value = value;
  }

  /**
   * The schema element upon which to evaluate.
   * @type {string}
   */
  get property() {
    return this._property;
  }

  set property(value) {
    if (!value) throw new Error('Property cannot be null or empty.');
    this._property = value;
  }

  /**
   * The condition by which the schema element, or its value, is evaluated.
   * @type {SchemaCondition}
   */
  get condition() {
    return this._condition;
  }

  set condition(value) {
    this._condition = value;
  }

  /**
   * The value to be evaluated using the specified condition against the specified schema element.
   * When using GreaterThan, GreaterThanOrEqualTo, LessThan, or LessThanOrEqualTo, the value must be convertible to decimal.
   * @type {string}
   */
  get value() {
    return this._value;
  }

  set value(value) {
    if (
      this.condition === SchemaCondition.GreaterThan ||
      this.condition === SchemaCondition.GreaterThanOrEqualTo ||
      this.condition === SchemaCondition.LessThan ||
      this.condition === SchemaCondition.LessThanOrEqualTo
    ) {
      if (!value) throw new Error('Value cannot be null or empty.');

      if (isNaN(parseFloat(value))) {
        throw new Error(
          'Value must be convertible to decimal when using GreaterThan, GreaterThanOrEqualTo, LessThan, or LessThanOrEqualTo.'
        );
      }
    }
    this._value = value;
  }

  /**
   * Evaluates a value against the search filter.
   * @param {any} value - The value to evaluate.
   * @returns {boolean} - True if the value matches the filter, otherwise false.
   */
  evaluateValue(value) {
    if (!this.property) throw new Error('Search filter field cannot be null.');

    if (this.condition === SchemaCondition.Contains) {
      if (value == null && this.value == null) return true;
      if (value == null || this.value == null) return false;
      return value.toString().includes(this.value);
    } else if (this.condition === SchemaCondition.ContainsNot) {
      if (value == null && this.value == null) return false;
      if (value == null || this.value == null) return true;
      return !value.toString().includes(this.value);
    } else if (this.condition === SchemaCondition.EndsWith) {
      if (value == null && this.value == null) return true;
      if (value == null || this.value == null) return false;
      return value.toString().endsWith(this.value);
    } else if (this.condition === SchemaCondition.Equals) {
      if (value == null && this.value == null) return true;
      if (value == null || this.value == null) return false;
      return value.toString() === this.value;
    } else if (this.condition === SchemaCondition.GreaterThan) {
      return this._compareValue(value, (a, b) => a > b);
    } else if (this.condition === SchemaCondition.GreaterThanOrEqualTo) {
      return this._compareValue(value, (a, b) => a >= b);
    } else if (this.condition === SchemaCondition.IsNotNull) {
      return value != null;
    } else if (this.condition === SchemaCondition.IsNull) {
      return value == null;
    } else if (this.condition === SchemaCondition.LessThan) {
      return this._compareValue(value, (a, b) => a < b);
    } else if (this.condition === SchemaCondition.LessThanOrEqualTo) {
      return this._compareValue(value, (a, b) => a <= b);
    } else if (this.condition === SchemaCondition.NotEquals) {
      if (value == null && this.value == null) return false;
      if (value == null || this.value == null) return true;
      return value.toString() !== this.value;
    } else if (this.condition === SchemaCondition.StartsWith) {
      if (value == null && this.value == null) return true;
      if (value == null || this.value == null) return false;
      return value.toString().startsWith(this.value);
    } else {
      throw new Error('Unknown search filter condition: ' + this.condition);
    }
  }

  /**
   * Helper function to compare values based on condition.
   * @param {any} value - The value to evaluate.
   * @param {Function} compare - The comparison function.
   * @returns {boolean} - Result of the comparison.
   * @private
   */
  _compareValue(value, compare) {
    if (value == null || this.value == null) return false;

    const val = value instanceof Date ? value.getTime() : value;
    const filterValue = this.value instanceof Date ? new Date(this.value).getTime() : this.value;

    return compare(val, filterValue);
  }
}
