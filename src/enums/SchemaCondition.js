/**
 * Enum for available conditions for search filters.
 * @enum {string}
 */
export const SchemaCondition = Object.freeze({
  Exists: 'Exists', // The property exists
  Equals: 'Equals', // The left and right terms are equal to one another
  NotEquals: 'NotEquals', // The left and right terms are not equal to one another
  GreaterThan: 'GreaterThan', // The left term is greater than the right term
  GreaterThanOrEqualTo: 'GreaterThanOrEqualTo', // The left term is greater than or equal to the right term
  LessThan: 'LessThan', // The left term is less than the right term
  LessThanOrEqualTo: 'LessThanOrEqualTo', // The left term is less than or equal to the right term
  IsNull: 'IsNull', // The left term is null
  IsNotNull: 'IsNotNull', // The left term is not null
  Contains: 'Contains', // The left term is contained within the right term (list)
  ContainsNot: 'ContainsNot', // The left term is not contained within the right term (list)
  StartsWith: 'StartsWith', // The left term starts with the right term
  EndsWith: 'EndsWith', // The left term ends with the right term
  IsType: 'IsType', // The element is of a given type
});

// Export the enum for use in other modules
module.exports = SchemaCondition;
