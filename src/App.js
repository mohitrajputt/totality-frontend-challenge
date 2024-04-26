import Filter from './components/filter/Filter';
import PropertyCard from './components/main/propertyCard/PropertyCard';
import Navbar from './components/navbar/Navbar';
import Review from './components/review/Review';
import Cart from './pages/book/Cart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Navbar/>, children: [
        {
          index: true, element: <main>
          <Filter/>
          <PropertyCard/>
          <Review/>
        </main>
        },
        {
          path: 'cart', element: <Cart/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
