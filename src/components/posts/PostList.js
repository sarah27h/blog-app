import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';

const PostList = () => {
  const { blogPosts, getPosts } = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);
  console.log(blogPosts);

  return <div>PostList</div>;
};

export default PostList;
