import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from './Components/Home'
import ProductList from './Components/Products/ProductList';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<ProductList />} />
    </Routes>
   </Router>
  )
}

export default App
