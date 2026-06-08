
const UserAvatar = ({ user }) => {
    return <img src={user.avatarUrl??""} alt={`${user.name}'s avatar`} />;
  };

export default UserAvatar;