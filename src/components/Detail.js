import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { loadedBlog, loadingBlog } from "../redux/actionCreator/blogAction";

import getSingleBlog from "../redux/thunk/Blog/getSingleBlog";

const Detail = () => {
  const { blog, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadingBlog());
    dispatch(getSingleBlog(id));
    dispatch(loadedBlog());
  }, [id, dispatch]);

  if (loading) {
    return <p>loading.....</p>;
  }

  return (
    <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
      <div className="h-52 w-52 mx-auto">
        <img src={blog.image} alt={blog.model} />
      </div>
      <h1 className="font-bold text-center">{blog.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {blog.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {blog.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
