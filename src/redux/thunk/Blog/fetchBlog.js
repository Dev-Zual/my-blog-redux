import { loadBlog } from "../../actionCreator/blogAction";

const fetchBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moontech-server-g4u6.onrender.com/blogs");
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadBlog(data.data));
    }
  };
};
export default fetchBlogData;
