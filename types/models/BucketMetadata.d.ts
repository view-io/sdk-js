export default class BucketMetadata {
    /**
     * @param {Object} metadata Information about the bucket metadata.
     * @param {string} metadata.GUID - Bucket GUID (automatically generated if not provided).
     * @param {string} metadata.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} metadata.PoolGUID - Pool GUID (automatically generated if not provided).
     * @param {string} metadata.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} metadata.Category - Bucket category.
     * @param {string} metadata.Name - Name of the bucket.
     * @param {string} metadata.RegionString - Region string (default is 'us-west-1').
     * @param {boolean} metadata.Versioning - Enable or disable versioning (default is true).
     * @param {number|null} metadata.RetentionMinutes - Retention in minutes (optional).
     * @param {number|null} metadata.MaxUploadSize - Maximum upload size (optional).
     * @param {number} metadata.MaxMultipartUploadSeconds - Maximum multipart upload seconds (default is seven days).
     * @param {Date} metadata.LastAccessUtc - Last access timestamp in UTC.
     * @param {Date} metadata.CreatedUtc - Created timestamp in UTC.
     * @param {Object} metadata.Owner Information about the credential.
     * @param {string} metadata.Owner.GUID - User's unique identifier (automatically generated if not provided).
     * @param {string} metadata.Owner.TenantGUID - Tenant's unique identifier (automatically generated if not provided).
     * @param {string} metadata.Owner.FirstName - User's first name.
     * @param {string} metadata.Owner.LastName - User's last name.
     * @param {string} metadata.Owner.Notes - Any additional notes for the user.
     * @param {string} metadata.Owner.Email - User's email address.
     * @param {string} metadata.Owner.PasswordSha256 - SHA-256 hashed password (not serialized).
     * @param {boolean} metadata.Owner.Active - Whether the user is active (default: true).
     * @param {Date} metadata.Owner.CreatedUtc - Date and time the user was created (in UTC, default: current time).
     */
    constructor(metadata: {
        GUID: string;
        TenantGUID: string;
        PoolGUID: string;
        OwnerGUID: string;
        Category: string;
        Name: string;
        RegionString: string;
        Versioning: boolean;
        RetentionMinutes: number | null;
        MaxUploadSize: number | null;
        MaxMultipartUploadSeconds: number;
        LastAccessUtc: Date;
        CreatedUtc: Date;
        Owner: {
            GUID: string;
            TenantGUID: string;
            FirstName: string;
            LastName: string;
            Notes: string;
            Email: string;
            PasswordSha256: string;
            Active: boolean;
            CreatedUtc: Date;
        };
    });
    GUID: any;
    TenantGUID: any;
    PoolGUID: any;
    OwnerGUID: any;
    Category: string;
    Name: string;
    RegionString: string;
    Versioning: boolean;
    /**
     * RetentionMinutes setter with validation.
     * @param {number|null} value - The retention minutes value.
     */
    set RetentionMinutes(value: number | null);
    /**
     * RetentionMinutes getter.
     */
    get RetentionMinutes(): number | null;
    MaxUploadSize: number;
    MaxMultipartUploadSeconds: number;
    LastAccessUtc: Date;
    CreatedUtc: Date;
    Owner: UserMaster;
    _retentionMinutes: number;
}
import UserMaster from './UserMaster';
