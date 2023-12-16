import { posts } from "./posts";
import PostItem from './PostItems';

import React from 'react'

function PostsComponents() {
  return (
    <div>
        <h1>Posts</h1>
        {posts.map(post =>(
            <PostItem key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default PostsComponents
