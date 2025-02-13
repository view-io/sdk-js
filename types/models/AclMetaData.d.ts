export default class AclMetaData {
    /**
     * @param {Object} data - The input data object.
     * @param {Object} data.Owner - Information about the owner, using UserMaster class.
     * @param {Array} data.Users - List of users, each using UserMaster class.
     * @param {Array} data.Entries - List of access control entries.
     */
    constructor(data: {
        Owner: any;
        Users: any[];
        Entries: any[];
    });
    owner: UserMaster;
    users: UserMaster[];
    entries: AclEntry[];
}
import UserMaster from './UserMaster';
import AclEntry from './AclEntry';
