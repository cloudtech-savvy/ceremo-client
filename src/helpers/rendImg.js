import React from "react";

const ProductComponent = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.img} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.text}</p>
          <p>{product.tips}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
