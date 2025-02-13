export default class Serializer {
    /**
     * Serializes data into json
     * @template T
     * @param {jsonString} jsonString
     * @param {Class} typeConstructor
     * @return {T}
     */
    static deserializeJson<T>(jsonString: any, typeConstructor: Class): T;
}
