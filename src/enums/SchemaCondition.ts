/**
 * Enum for available conditions for search filters.
 * @enum {string}
 */
export enum SchemaCondition {
  Exists = 'Exists',
  Equals = 'Equals',
  NotEquals = 'NotEquals',
  GreaterThan = 'GreaterThan',
  GreaterThanOrEqualTo = 'GreaterThanOrEqualTo',
  LessThan = 'LessThan',
  LessThanOrEqualTo = 'LessThanOrEqualTo',
  IsNull = 'IsNull',
  IsNotNull = 'IsNotNull',
  Contains = 'Contains',
  ContainsNot = 'ContainsNot',
  StartsWith = 'StartsWith',
  EndsWith = 'EndsWith',
  IsType = 'IsType',
}
