/**
 * Enum for vector repository types.
 * @readonly
 * @enum {string}
 */
export const VectorRepositoryTypeEnum = Object.freeze({
  /** MySQL Heatwave */
  MysqlHeatwave: 'MysqlHeatwave',

  /** Oracle 23AI */
  Oracle23AI: 'Oracle23AI',

  /** Pgvector */
  Pgvector: 'Pgvector',
});
