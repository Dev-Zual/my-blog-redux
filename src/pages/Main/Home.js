import React, { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
      {products.map((product) => (
        <ProductCart product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Home;
