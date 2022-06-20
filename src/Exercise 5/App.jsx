import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Fruits from './components/products/Fruits';
import Mice from './components/products/Mice';
import GPU from './components/products/GPU';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to='/' className='home'>
          Home
        </Link>
        <Link to='/products' className='products'>
          Products
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />}>
          <Route path='/products/Fruits' element={<Fruits />} />
          <Route path='/products/Mice' element={<Mice />} />
          <Route path='/products/GPU' element={<GPU />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
