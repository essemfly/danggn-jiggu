import "./App.css";
import React, { useState, useEffect } from "react";
import Product from "./Product";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "http://52.79.251.236/danggns?offset=0&limit=100&keyword=직구"
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>해외직구 반품 상품들</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              images={product.images !== null ? product.images : []}
              category={product.crawl_category}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
