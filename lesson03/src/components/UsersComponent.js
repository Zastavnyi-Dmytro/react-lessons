import React from "react";
import UserComponent from "./UserComponent";

const UsersComponent = ({users,posts}) => {
  return (
    <div>
      {users.map(user => (
        <UserComponent key={user.id} user={user} posts={posts} />
      ))}
    </div>
  );
};

export default UsersComponent;
