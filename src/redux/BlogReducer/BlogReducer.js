import { LOAD_BLOG } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };

    default:
      return state;
  }
};
export default blogReducer;
