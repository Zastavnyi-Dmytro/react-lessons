import React, { useState } from "react";

function PostItems({post}) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return <div>
     <h2>{post.title}</h2>
      <p>ID: {post.id}</p>
      {showInfo && <p>Body: {post.body}</p>}
      <button onClick={toggleInfo}>
        {showInfo ? 'Hide Info' : 'Show Info'}
      </button>
      <hr />
  </div>;
}

export default PostItems;
