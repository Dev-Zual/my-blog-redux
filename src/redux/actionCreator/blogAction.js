const {
  LOAD_BLOG,
  ADD_BLOG,
  DELETE_BLOG,
} = require("../actionTypes/actionTypes");

exports.loadProduct = (blog) => {
  return {
    type: LOAD_BLOG,
    payload: blog,
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
