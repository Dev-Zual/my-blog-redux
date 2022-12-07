import { deleteBlog } from "../../actionCreator/blogAction";

const deleteSingleBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(deleteBlog(id));
    }
  };
};

export default deleteSingleBlog;
