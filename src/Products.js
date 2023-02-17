import { Link } from "react-router-dom";
import './App.css'

function ProductsPage() {

  const product = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
  ];
  return (<>
  <h1>List of Products</h1>
  <ul className="listProd">
    {product.map((prod) => (
      <li key={prod.id}><Link to={`/products/${prod.id}`}>{prod.title}</Link></li>
    ))}
  </ul>
  </>);
}

export default ProductsPage;