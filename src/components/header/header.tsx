import React from 'react';
import './header.css';

const header = () => {
  return (
    <div className="header-body">
       <h2 className='logo'>Vezeti</h2>
       <ul>
        <li>Home</li>
        <li>About us </li>
        <li>Cart</li>
       </ul>
    </div>
  );
}

export default header