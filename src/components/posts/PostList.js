import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';
import PostCard from './PostCard';
import { v1 as uuidv1 } from 'uuid';

const PostList = () => {
  const { blogPosts, getPosts, loading } = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);

  const postList = blogPosts.map((post, index) => {
    return <PostCard key={index} post={post} postId={index} />;
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
