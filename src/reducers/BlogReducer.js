export const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'SEND_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'REQUEST_FINISH':
      return {
        ...state,
        loading: false
      };
    case 'SET_POSTS':
      return {
        ...state,
        blogPosts: action.payload
      };
    case 'SET_POST':
      return {
        ...state,
        currentBlogPost: action.payload
      };
    default:
      return state;
  }
};
