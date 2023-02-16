import { Link } from 'react-router-dom';

import './App.css'

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p className='pInHome'>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
}

export default HomePage;