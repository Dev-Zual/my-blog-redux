import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
  const [blog, setBlog] = useState([]);
  const { brand, model, image, price } = blog;
  console.log(blog);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const url = `http://localhost:5000/blog/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data.data));
  }, [id]);
  return (
    <div>
      <h1>{model}</h1>
      <h2>{brand}</h2>
      <img src={image} alt="" />
      <p>{price}</p>
    </div>
  );
};

export default UpdateBlog;
