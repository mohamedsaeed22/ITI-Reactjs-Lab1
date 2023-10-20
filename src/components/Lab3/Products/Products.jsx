import React from "react";
import "./products.css";
import ProductCard from "./ProductCard";
import { productsArray } from "./ProductData";
const Products = () => {
  const productsData = productsArray;
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="cards">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
