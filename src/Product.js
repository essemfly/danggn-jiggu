import React from "react";
import "react-multi-carousel/lib/styles.css";

const Product = ({
  images,
  category,
  name,
  price,
  written_addr,
  description,
}) => {
  let image = images[0];
  return (
    <div className="product">
      <img className="product-image" src={image} alt={name} key={image} />
      <div className="product-details">
        <div className="product-category">{category}</div>
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
        <div className="product-addr">{written_addr}</div>
        <div className="product-desc">{description}</div>
      </div>
    </div>
  );
};

export default Product;
