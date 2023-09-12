
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
     <Header/>
     <Outlet/>
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
      }
    ]
  }
])

export default App;
