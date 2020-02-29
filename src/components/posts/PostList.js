import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';
import PostCard from './PostCard';
import { v1 as uuidv1 } from 'uuid';

const PostList = () => {
  const { blogPosts, getPosts, loading } = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);

  const postList = blogPosts.map(post => {
    return <PostCard key={uuidv1()} post={post} />;
  });

  console.log(blogPosts);

  return (
    <section className="posts">
      <h2>posts</h2>
      {loading ? <div>Loading...</div> : <div className="posts__list">{postList}</div>}
    </section>
  );
};

export default PostList;
