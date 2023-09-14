
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import ProductDetails from './Components/Product/ProductDetails';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
  );
}

export const appRoute = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children : [
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'/product/:id',
        element:<ProductDetails/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])

export default App;
