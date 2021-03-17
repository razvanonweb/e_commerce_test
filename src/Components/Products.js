import React from 'react';

const Products = ({ products }) => {
  return (
    <ul className="products-list">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <a href={'#' + product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </a>
            <div className="product-price">
              <div className="product-price_value">$ {product.price}</div>
              <button className="button primary">Add to cart</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;
