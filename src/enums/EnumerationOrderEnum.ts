/**
 * Enum for EnumerationOrder.
 * @enum {string}
 */
const EnumerationOrderEnum = Object.freeze({
  CreatedAscending: 'CreatedAscending', // Created ascending order
  CreatedDescending: 'CreatedDescending', // Created descending order
  LastAccessAscending: 'LastAccessAscending', // Last access ascending order
  LastAccessDescending: 'LastAccessDescending', // Last access descending order
  KeyAscending: 'KeyAscending', // Key ascending order
  KeyDescending: 'KeyDescending', // Key descending order
});

// Export the enum for use in other modules
module.exports = EnumerationOrderEnum;
