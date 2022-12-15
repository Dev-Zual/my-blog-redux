const { updateBlogAction } = require("../../actionCreator/blogAction");

const updateBlog = (id, upBlog) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://moontech-server-g4u6.onrender.com/blog/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(upBlog),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      dispatch(
        updateBlogAction({
          id,
          ...upBlog,
        })
      );
    }
  };
};
export default updateBlog;
