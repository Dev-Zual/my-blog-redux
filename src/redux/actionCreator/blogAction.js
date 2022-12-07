const { LOAD_BLOG } = require("../actionTypes/actionTypes");

exports.loadProduct = (blog) => {
  return {
    type: LOAD_BLOG,
    payload: blog,
  };
};
