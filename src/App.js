import React from 'react';
import ProductTable from './component/productTable';
import SearchBar from './component/searchBar';
import './styles/App.css';

const data = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function App() {
  const [filterText, setFilterText] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  function handleFilterTextChange(value) {
    setFilterText(value);
  }

  function handleInStockOnlyChange(value) {
    setInStockOnly(value)
  }

  return (
    <div className='App'>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={handleFilterTextChange} onInStockOnlyChange={handleInStockOnlyChange} />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={data} />
    </div>
  );
}

export default App;
