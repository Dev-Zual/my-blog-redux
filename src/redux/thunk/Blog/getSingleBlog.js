import { getSingleBlogAction } from "../../actionCreator/blogAction";

const getSingleBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://moontech-server-g4u6.onrender.com/blog/${id}`
    );
    const data = await res.json();

    if (data.data) {
      dispatch(getSingleBlogAction(data.data));
    }
  };
};
export default getSingleBlog;
