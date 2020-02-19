import React, { createContext, useReducer } from 'react';
import { BlogReducer } from '../reducers/BlogReducer';
const BlogContext = createContext();

const BlogContextProvider = props => {
  const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const getPosts = () => {
    dispatch({ type: 'SEND_REQUEST' });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch({ type: 'SEND_REQUEST' });
        return response.json;
      })
      .then(data => dispatch({ type: 'SET_POSTS', payload: data.body }))
      .catch(err => console.log(err));
  };

  // what is differnce between
  // value={{blogPosts: state.blogPosts, currentBlogPost: state.currentBlogPost, loading: state.loading}}
  // and value={{state}}
  return (
    <BlogContext.Provider
      value={{
        state,
        getPosts
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
