
const UserInfo = ({ user }) => {
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
      </div>
    );
  };

export default UserInfo;