import { Provider } from 'react-redux';
import './App.css';
import Filter from './components/filter/Filter';
import PropertyCard from './components/main/propertyCard/PropertyCard';
import Navbar from './components/navbar/Navbar';
import Review from './components/review/Review';
import Cart from './pages/book/Cart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {store} from "./redux/store";

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
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;
