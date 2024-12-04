import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//import pages/layouts here

import './App.css'
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import MainLayout from './Layouts/MainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<MainLayout/>} >
      <Route index element={<HomePage />} />
    </Route>
    <Route path='/products/:id' element={<MainLayout/>} >
      <Route index element={<ProductPage/>} />
     </Route>
    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;



