import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';
import { useParams, Link } from 'react-router-dom';
import Moment from 'react-moment';

const PostPage = () => {
  let { postId } = useParams();

  console.log(postId);

  const { currentBlogPost, blogPosts, getPostBYId, loading } = useContext(BlogContext);

  useEffect(() => {
    getPostBYId(postId);
  }, []);

  console.log(currentBlogPost, blogPosts);

  return (
    <div>
      {currentBlogPost ? (
        <article className="post">
          <img
            className="card__image"
            alt=""
            src={
              currentBlogPost[0].urlToImage
                ? currentBlogPost[0].urlToImage
                : `https://via.placeholder.com/300X150.png/eee/333?text=No+image+available`
            }
          />

          <h3 className="card__title">{currentBlogPost[0].title}</h3>
          <p>{currentBlogPost[0].author}</p>
          <p>
            <Moment format="D MMM YYYY">{currentBlogPost[0].publishedAt}</Moment>
          </p>
          <p>
            {currentBlogPost[0].content} <a href={currentBlogPost[0].url}>read more...</a>
          </p>
        </article>
      ) : (
        <p className="error-message">
          No data to display please <Link to="/">click here</Link>
        </p>
      )}
    </div>
  );
};

export default PostPage;
