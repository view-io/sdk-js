import CryptoJS from 'crypto-js';

/**
 * Hash methods using the crypto-js library.
 */
export default class HashHelper {
  /**
   * Generate an MD5 hash from a byte array (word array in crypto-js).
   * @param {string | ArrayBuffer} data Data to hash.
   * @returns {string} MD5 hash.
   */
  static MD5Hash(data) {
    if (!data) {
      data = '';
    }

    const hash = CryptoJS.MD5(data);
    return hash.toString(CryptoJS.enc.Hex);
  }

  /**
   * Generate a SHA1 hash from a byte array (word array in crypto-js).
   * @param {string | ArrayBuffer} data Data to hash.
   * @returns {string} SHA1 hash.
   */
  static SHA1Hash(data) {
    if (!data) {
      data = '';
    }

    const hash = CryptoJS.SHA1(data);
    return hash.toString(CryptoJS.enc.Hex);
  }

  /**
   * Generate a SHA256 hash from a byte array (word array in crypto-js).
   * @param {string | ArrayBuffer} data Data to hash.
   * @returns {string} SHA256 hash.
   */
  static SHA256Hash(data) {
    if (!data) {
      data = '';
    }

    const hash = CryptoJS.SHA256(data);
    return hash.toString(CryptoJS.enc.Hex);
  }
}
