import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const PostCard = ({ postId, post: { urlToImage, author, title, publishedAt } }) => {
  return (
    <article className="card">
      <img
        className="card__image"
        alt=""
        src={
          urlToImage
            ? urlToImage
            : `https://via.placeholder.com/300X150.png/eee/333?text=No+image+available`
        }
      />
      <Link to={`/${postId}`}>
        <h3 className="card__title">{title}</h3>
      </Link>
      <p>{author}</p>
      <p>
        <Moment format="D MMM YYYY">{publishedAt}</Moment>
      </p>
    </article>
  );
};

export default PostCard;
