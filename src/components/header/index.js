import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = ({numItems, total}) => {
  return (
    <header className="header row">
      <Link to="/" className="logo text-dark"><span className="logo-blue">Futu</span>Books</Link>
      <Link to="/cart" className="cart text-dark">
        <i className="cart-icon fa fa-shopping-cart"></i>
        {numItems} шт. (Q{total})
      </Link>
    </header>
  )
};

export default Header
