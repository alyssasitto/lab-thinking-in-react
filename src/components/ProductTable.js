import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
      <table>
        <tr className="row header">
          <th>Name</th>
          <th>Price</th>
        </tr>

        {props.products.map((product) => {
          console.log(product);
          return <ProductRow product={product} />;
        })}
      </table>
    </div>
  );
}

export default ProductTable;
