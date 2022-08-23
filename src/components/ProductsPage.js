import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  // const searchQuery = (producttoSearch) => {
  //   const productListCopy = products.filter((product) => {
  //     return product.name.toLowerCase().includes(producttoSearch.toLowerCase());
  //   });

  //   setProductsCopy(productListCopy);
  // };

  return (
    <div className="product-page">
      <h1>Ironstore</h1>

      <SearchBar products={products} setProducts={setProducts} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductPage;
