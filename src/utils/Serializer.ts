export default class Serializer {
  /**
   * Serializes data into json
   * @template T
   * @param {jsonString} jsonString
   * @param {Class} typeConstructor
   * @return {T}
   */
  static deserializeJson(jsonString, typeConstructor) {
    try {
      const data = JSON.parse(jsonString);

      if (Array.isArray(data)) {
        const deserializedData = data.map((item) => new typeConstructor(item));
        return deserializedData;
      } else {
        return new typeConstructor(data);
      }
    } catch (err) {
      throw Error('Error deserializing data.');
    }
  }
}
