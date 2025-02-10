/**
 * A posting from a parsed document.
 *
 * @property {string} term - The token in the posting.
 * @property {Array<number>} absolutePositions - The absolute positions in the token list where the token appears.
 * @property {Array<number>} relativePositions - The relative positions in the token list where the token appears.
 * @property {number} count - The frequency with which the token occurs, calculated from the positions.
 */
export default class Posting {
  /**
   * The token.
   * @type {string}
   */
  term = '';

  /**
   * The absolute positions in the token list where the token appears.
   * @type {Array<number>}
   */
  absolutePositions = [];

  /**
   * The relative positions in the token list where the token appears.
   * @type {Array<number>}
   */
  relativePositions = [];

  /**
   * The frequency with which the token occurs.
   * This is calculated based on the number of positions in both the absolute and relative position arrays.
   * @type {number}
   */
  get count() {
    let ret = 0;
    if (this.absolutePositions != null) ret += this.absolutePositions.length;
    if (this.relativePositions != null) ret += this.relativePositions.length;
    return ret;
  }

  /**
   * Instantiates the Token with a given value.
   *
   * @param {string} value - The token.
   * @throws {Error} If the value is null or empty.
   */
  constructor(value) {
    if (!value || value.trim() === '') {
      throw new Error('The token value cannot be null or empty');
    }

    this.term = value;
  }
}

// Usage example
// const posting = new Posting("exampleToken");
// posting.absolutePositions = [1, 2, 3];
// posting.relativePositions = [4, 5];
// console.log(posting.count); // Output: 5
