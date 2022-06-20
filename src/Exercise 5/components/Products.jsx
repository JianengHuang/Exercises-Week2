import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Products.css';

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <div className='container'>
        <Link to='/products/fruits'>Fruits</Link>
        <Link to='/products/gpu'>GPU</Link>
        <Link to='/products/mice'>Mice</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Products;
