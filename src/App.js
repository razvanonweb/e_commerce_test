import React, { useState } from 'react';
import Products from './Components/Products';
import data from './data.json';

function App() {
  const [items, setItems] = useState({
    products: data.products,
    size: '',
    sort: '',
  });

  return (
    <div className="container">
      <header>
        <a className="logo" href="/">
          E-commerce
        </a>
      </header>
      <main>
        <div className="products">
          <Products products={items.products} />
        </div>
        <div className="cart">Cart items</div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
