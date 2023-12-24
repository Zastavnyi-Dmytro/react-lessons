import React, { useState } from "react";

const UserComponent = ({ user, posts }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <h3>Name:{user.name}</h3>
      {showInfo && (
        <p>
          {posts.filter((post) => post.userId === user.id).map((post) => <h4>Post id {post.id} : {post.body}</h4>)}
        </p>
      )}
      <button onClick={toggleInfo}>{showInfo? 'Hide post':'Show post'}</button>
    </div>
  );
};

export default UserComponent;
