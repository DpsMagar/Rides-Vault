import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Components/Home'
import ProductList from './Components/Products/ProductList';
import ProductDetails from './Components/Products/ProductDetails';
import Cart from './Components/User Specific/Cart';


function App() {
  return (
   <Router>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:item' element={<ProductList />} />
        <Route path='/:item/details' element={<ProductDetails />} />
        <Route path='/user/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
