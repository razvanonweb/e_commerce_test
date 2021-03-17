import React, { useState } from 'react';
import data from './data.json';
import Products from './Components/Products';
import Filter from './Components/Filter';

function App() {
  const [items, setItems] = useState({
    products: data.products,
    size: '',
    sort: '',
  });

  const filterProducts = (event) => {
    if (event.target.value === '') {
      setItems({ ...items, size: event.target.value, products: data.products });
    } else {
      setItems({
        ...items,
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0,
        ),
      });
    }
    // console.log(event.target.value);
  };
  const sortProducts = (event) => {
    setItems({
      ...items,
      sort: event.target.value,
      products: data.products
        .slice()
        .sort((a, b) =>
          event.target.value === 'lowest'
            ? a.price - b.price
            : event.target.value === 'highest'
            ? b.price - a.price
            : event.target.value === 'latest'
            ? a.id < b.id
              ? 1
              : -1
            : null,
        ),
    });
    // console.log(event.target.value);
  };

  return (
    <div className="container">
      <header>
        <a className="logo" href="/">
          E-commerce
        </a>
      </header>
      <main>
        <div className="products">
          <Filter
            count={items.products.length}
            size={items.size}
            sort={items.sort}
            filterProducts={(e) => filterProducts(e)}
            sortProducts={(e) => sortProducts(e)}
          />
          <Products products={items.products} />
        </div>
        <div className="cart">Cart items</div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
