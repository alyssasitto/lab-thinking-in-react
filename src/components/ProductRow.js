function ProductRow(props) {
  return (
    <div className="rows">
      <tr className="row">
        <td className={props.product.inStock ? '' : 'out-of-stock'}>
          {props.product.name}
        </td>
        <td>{props.product.price}</td>
      </tr>
    </div>
  );
}

export default ProductRow;
