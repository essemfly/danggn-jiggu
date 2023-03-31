import "./App.css";
import React, { useState, useEffect } from "react";
import Product from "./Product";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://handover.space/danggns?offset=0&limit=500&keyword=직구"
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
              written_addr={product.seller_region_name}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
