import React, {  useState } from "react";
import "./products.css";
import ProductCard from "./ProductCard";
import { productsArray } from "./ProductData";

const Products = () => {
  
  const [products ,setProducts] = useState(productsArray);

  
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="cards">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
