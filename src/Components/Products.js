import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <a href={'#' + product.id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div>{product.price}</div>
                <button className="button primary">Add to cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
