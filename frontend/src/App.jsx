import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from './Components/Home'
import ProductList from './Components/Products/ProductList';
import ProductDetails from './Components/Products/ProductDetails';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:item' element={<ProductList />} />
      <Route path='/:item/details' element={<ProductDetails />} />
    </Routes>
   </Router>
  )
}

export default App
