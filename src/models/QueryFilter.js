export default class QueryFilter {
  /**
   * @param {Object} filter - Information about the query filter.
   * @param {Date|null} filter.CreatedAfter - Timestamp in UTC after which an entry must have been created.
   * @param {Date|null} filter.CreatedBefore - Timestamp in UTC before which an entry must have been created.
   * @param {Array<string>} filter.Terms - List of terms to match.
   * @param {Array<string>} filter.MimeTypes - List of content-types to match.
   * @param {Array<string>} filter.Prefixes - List of key prefix values to match.
   * @param {Array<string>} filter.Suffixes - List of key suffix values to match.
   * @param {Array<SchemaFilter>} filter.SchemaFilters - List of schema filters to match.
   */
  constructor({
    CreatedAfter = null,
    CreatedBefore = null,
    Terms = [],
    MimeTypes = [],
    Prefixes = [],
    Suffixes = [],
    SchemaFilters = [],
  } = {}) {
    this.createdAfter = CreatedAfter;
    this.createdBefore = CreatedBefore;
    this.terms = Array.isArray(Terms) ? Terms : [];
    this.mimeTypes = Array.isArray(MimeTypes) ? MimeTypes : [];
    this.prefixes = Array.isArray(Prefixes) ? Prefixes : [];
    this.suffixes = Array.isArray(Suffixes) ? Suffixes : [];
    this.schemaFilters = Array.isArray(SchemaFilters) ? SchemaFilters : [];
  }

  /**
   * Sets or gets the terms.
   * @param {Array<string>} [newTerms] - Optional new list of terms to set.
   * @returns {Array<string>} List of terms to match.
   */
  get terms() {
    return this._terms;
  }

  set terms(newTerms) {
    this._terms = newTerms || [];
  }

  /**
   * Sets or gets the MIME types.
   * @param {Array<string>} [newMimeTypes] - Optional new list of MIME types to set.
   * @returns {Array<string>} List of MIME types to match.
   */
  get mimeTypes() {
    return this._mimeTypes;
  }

  set mimeTypes(newMimeTypes) {
    this._mimeTypes = newMimeTypes || [];
  }

  /**
   * Sets or gets the prefixes.
   * @param {Array<string>} [newPrefixes] - Optional new list of prefixes to set.
   * @returns {Array<string>} List of key prefix values to match.
   */
  get prefixes() {
    return this._prefixes;
  }

  set prefixes(newPrefixes) {
    this._prefixes = newPrefixes || [];
  }

  /**
   * Sets or gets the suffixes.
   * @param {Array<string>} [newSuffixes] - Optional new list of suffixes to set.
   * @returns {Array<string>} List of key suffix values to match.
   */
  get suffixes() {
    return this._suffixes;
  }

  set suffixes(newSuffixes) {
    this._suffixes = newSuffixes || [];
  }

  /**
   * Sets or gets the schema filters.
   * @param {Array<SchemaFilter>} [newSchemaFilters] - Optional new list of schema filters to set.
   * @returns {Array<SchemaFilter>} List of schema filters to match.
   */
  get schemaFilters() {
    return this._schemaFilters;
  }

  set schemaFilters(newSchemaFilters) {
    this._schemaFilters = newSchemaFilters || [];
  }
}
