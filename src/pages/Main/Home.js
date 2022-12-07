import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart";
import fetchBlogData from "../../redux/thunk/Blog/fetchBlog";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  const products = useSelector((state) => state.blogs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
      {products.map((product) => (
        <ProductCart product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Home;
