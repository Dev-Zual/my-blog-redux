const {
  LOAD_BLOG,
  ADD_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG,
  GET_SINGLE_BLOG,
  LOADING_BLOG,
  LOADED_BLOG,
} = require("../actionTypes/actionTypes");

exports.loadBlog = (blog) => {
  return {
    type: LOAD_BLOG,
    payload: blog,
  };
};
exports.loadingBlog = () => {
  return {
    type: LOADING_BLOG,
  };
};
exports.loadedBlog = () => {
  return {
    type: LOADED_BLOG,
  };
};

exports.addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};
exports.deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};
exports.getSingleBlogAction = (data) => {
  return {
    type: GET_SINGLE_BLOG,
    payload: data,
  };
};
exports.updateBlogAction = (id, blog) => {
  return {
    type: UPDATE_BLOG,
    payload: {
      id,
      blog,
    },
  };
};
