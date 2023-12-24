import React from "react";
import UserDetails from "./UserDetails";
import UserAddress from "./UserAddress";
import Company from "./Company";

const User = ({ user }) => {
  return (
    <div className="drill">
      <UserDetails user={user} />
      <UserAddress address={user.address} />
      <Company company={user.company} />
    </div>
  );
};

export default User;
