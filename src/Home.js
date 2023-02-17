import { Link, useNavigate } from 'react-router-dom';

import './App.css'

function HomePage() {
  const nav = useNavigate();

  function navHandler(){
    nav('/products');
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p className='pInHome'>
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <button onClick={navHandler}>Navigate to Products</button>
    </>
  );
}

export default HomePage;