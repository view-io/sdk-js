export default class TagMetaData {
    /**
     * @param {Object} tagMetaData Information about the tag metadata.
     * @param {string} tagMetaData.GUID - Globally unique identifier  (automatically generated if not provided).
     * @param {string} tagMetaData.TenantGUID - Tenant GUID (default is "default").
     * @param {string} tagMetaData.BucketGUID - Bucket GUID.
     * @param {string} tagMetaData.OwnerGUID - Owner GUID (default is "default").
     * @param {string} tagMetaData.Key - Key associated with the metadata.
     * @param {string} tagMetaData.Value - Value associated with the metadata.
     * @param {Date} tagMetaData.CreatedUtc - Creation timestamp in UTC.
     */
    constructor(tagMetaData: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Key: string;
        Value: string;
        CreatedUtc: Date;
    });
    GUID: any;
    TenantGUID: string;
    BucketGUID: string;
    OwnerGUID: string;
    Key: string;
    Value: string;
    CreatedUtc: Date;
}
