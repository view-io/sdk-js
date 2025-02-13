export default class Collection {
    /**
     * @param {Object} collection Information about the collection.
     * @param {number} collection.id - Collection ID.
     * @param {string} collection.GUID - Collection GUID (automatically generated if not provided).
     * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} collection.Name - Name of the collection.
     * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
     * @param {string} collection.AdditionalData - Additional data (optional).
     * @param {Date} collection.CreatedUtc - Creation timestamp in UTC.
     */
    constructor(collection: {
        id: number;
        GUID: string;
        TenantGUID: string;
        Name: string;
        AllowOverwrites: boolean;
        AdditionalData: string;
        CreatedUtc: Date;
    });
    GUID: any;
    TenantGUID: any;
    Name: string;
    AllowOverwrites: boolean;
    AdditionalData: string;
    CreatedUtc: Date;
}
