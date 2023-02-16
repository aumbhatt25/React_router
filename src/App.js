import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './Error';
import HomePage from './Home';
import ProductsPage from './Products';
import RootLayout from './Root';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
