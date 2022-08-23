import { useState } from 'react';

function SearchBar(props) {
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(props.products);
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    const newList = filteredList.filter((product) => {
      console.log(product.name.toLowerCase());
      return !product.name.toLowerCase().indexOf(e.target.value.toLowerCase());
    });

    props.setProducts(newList);
  };

  const handleCheck = () => {
    setIsAvailable(!isAvailable);

    console.log(isAvailable);

    const stockedProducts = filteredList.filter((product) => {
      return product.inStock === true;
    });

    console.log(stockedProducts);

    if (isAvailable === false) {
      props.setProducts(stockedProducts);
    } else {
      props.setProducts(filteredList);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="item-searched"
        value={search}
        onChange={handleSearch}
        className="search-bar"
      ></input>

      <div className="checkbox-container">
        <input
          type="checkbox"
          name="checkbox"
          className="checkbox"
          checked={isAvailable}
          onChange={handleCheck}
        />
        <label for="checkbox">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;

//  const productListCopy = products.filter((product) => {
//   //     return product.name.toLowerCase().includes(producttoSearch.toLowerCase());
//   //   });
