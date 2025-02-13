/**
 * Enum for vector repository types.
 */
export type VectorRepositoryTypeEnum = string;
/**
 * Enum for vector repository types.
 * @readonly
 * @enum {string}
 */
export const VectorRepositoryTypeEnum: Readonly<{
    /** MySQL Heatwave */
    MysqlHeatwave: "MysqlHeatwave";
    /** Oracle 23AI */
    Oracle23AI: "Oracle23AI";
    /** Pgvector */
    Pgvector: "Pgvector";
}>;
