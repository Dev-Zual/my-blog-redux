import { useQuery } from "@tanstack/react-query";
import React from "react";

import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/blog/${id}`;

  const { isLoading, error, data } = useQuery({
    queryKey: ["detail"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  if (isLoading) {
    return <p>loading.....</p>;
  }
  if (error) {
    return <p>something wrong</p>;
  }
  const blog = data.data;
  console.log(blog);
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
