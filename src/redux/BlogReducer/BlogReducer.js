import {
  ADD_BLOG,
  DELETE_BLOG,
  GET_SINGLE_BLOG,
  LOADED_BLOG,
  LOADING_BLOG,
  LOAD_BLOG,
  UPDATE_BLOG,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  blog: [],
  loading: true,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_BLOG:
      return {
        ...state,
        loading: true,
      };
    case LOADED_BLOG:
      return {
        ...state,
        loading: false,
      };
    case LOAD_BLOG:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };

    case ADD_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };
    case GET_SINGLE_BLOG:
      return {
        ...state,
        blog: action.payload,
        loading: false,
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_BLOG:
      const oldBlog = state.blogs.find(
        (blog) => blog._id === action.payload.id
      );
      const newBlog = { ...oldBlog, ...action.payload.blog };
      return {
        ...state,
        blogs: [...state.blogs, newBlog],
      };

    default:
      return state;
  }
};
export default blogReducer;
