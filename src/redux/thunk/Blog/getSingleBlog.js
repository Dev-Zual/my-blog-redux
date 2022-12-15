import { getSingleBlogAction } from "../../actionCreator/blogAction";

const getSingleBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`);
    const data = await res.json();

    if (data.data) {
      dispatch(getSingleBlogAction(data.data));
    }
  };
};
export default getSingleBlog;
