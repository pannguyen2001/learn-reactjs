/**
 * Represents a user profile component.
 * Follow SRP (single responsibility principle): 1 component just do 1 thing
 *
 * @component
 * @param {Object} user - The user infomation.
 * @returns {React.ReactElement} A user profile element.
 */


import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";


export const UserProfile = ({ user }) => {
  return (
    <div>
      <UserAvatar user={user} />
      <UserInfo user={user} />
    </div>
  );
};

const UserProfileList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserProfile user={user} key={user.id} />
      ))}
    </>
  );
};

export default UserProfileList;
