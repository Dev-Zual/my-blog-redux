import { addBlog } from "../../actionCreator/blogAction";

const addBlogData = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moontech-server-g4u6.onrender.com/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addBlog({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};
export default addBlogData;
