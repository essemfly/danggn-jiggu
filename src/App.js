import "./App.css";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";
import { getFormattedDate } from "./utils";

const App = () => {
  const limit = 50;
  let keyword = "직구";
  let offset = 0;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("ya?");
    fetchProducts(offset, keyword);
  }, []);

  const fetchProducts = async (offset, keyword) => {
    const response = await fetch(
      "https://handover.space/danggns?offset=" +
        offset +
        "&limit=" +
        limit +
        "&keyword=" +
        keyword
    );
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="App">
      <h1>해외직구 반품 상품들</h1>
      <SearchBar />
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
              written_at={getFormattedDate(product.written_at)}
              description={product.description}
              url={product.url}
              status={product.status}
              chat_counts={product.chat_counts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
