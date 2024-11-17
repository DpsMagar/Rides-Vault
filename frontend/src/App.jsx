import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Components/Home'
import ProductList from './Components/Products/ProductList';
import ProductDetails from './Components/Products/ProductDetails';
import Cart from './Components/User Specific/Cart';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import LogOut from './Components/Auth/LogOut';
import Invoice from './Components/User Specific/Invoice';

function App() {
  return (
   <Router>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:item' element={<ProductList />} />
        <Route path='/:item/details' element={<ProductDetails />} />
        <Route path='/user/cart' element={<Cart />} />
        <Route path='/user/register' element={<SignUp />} />
        <Route path='/user/logout' element={<LogOut />} />
        <Route path='/user/login' element={<SignIn />} />
        <Route path='/user/invoice' element={<Invoice />} />
      </Routes>
    </Router>
  )
}

export default App
