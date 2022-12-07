import { loadBlog } from "../../actionCreator/blogAction";

const fetchBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadBlog(data.data));
    }
  };
};
export default fetchBlogData;
