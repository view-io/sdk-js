import UserMaster from './UserMaster';
import AclEntry from './AclEntry';

export default class AclMetaData {
  /**
   * @param {Object} data - The input data object.
   * @param {Object} data.Owner - Information about the owner, using UserMaster class.
   * @param {Array} data.Users - List of users, each using UserMaster class.
   * @param {Array} data.Entries - List of access control entries.
   */
  constructor(data) {
    const { Owner = {}, Users = [], Entries = [] } = data;

    this.owner = new UserMaster(Owner);
    this.users = Users.map((user) => new UserMaster(user));
    this.entries = Entries.map((entry) => new AclEntry(entry));
  }
}
