import React, { createContext, useReducer } from 'react';
import { BlogReducer } from '../reducers/BlogReducer';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true,
  };

  const API_KEY = process.env.REACT_APP_NEWS_KEY;

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const getPosts = async () => {
    if (state.blogPosts.length === 0) {
      try {
        dispatch({ type: 'SEND_REQUEST' });
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=javascript&pageSize=10&apiKey=${API_KEY}`
        );
        const data = await response.json();
        dispatch({ type: 'REQUEST_FINISH' });
        dispatch({ type: 'SET_POSTS', payload: data.articles });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getPostBYId = (id) => {
    if (state.blogPosts.length > 0) {
      dispatch({ type: 'SEND_REQUEST' });
      const currentPost = state.blogPosts.filter((post, index) => index === Number(id));
      console.log(id);
      dispatch({ type: 'SET_POST', payload: currentPost });
      dispatch({ type: 'REQUEST_FINISH' });
    } else return null;
  };

  // what is differnce between
  // value={{blogPosts: state.blogPosts, currentBlogPost: state.currentBlogPost, loading: state.loading}}
  // and value={{state}}
  return (
    <BlogContext.Provider
      value={{
        blogPosts: state.blogPosts,
        currentBlogPost: state.currentBlogPost,
        loading: state.loading,
        getPosts,
        getPostBYId,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
