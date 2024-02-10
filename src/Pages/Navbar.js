import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="/" className="nav-link text-white fs-5">Home</a>
          </li>
          <li className="nav-item">
            <a href="/Signup" className="nav-link text-white fs-5">Signup</a>
          </li>
          <li className="nav-item">
            <a href="/Login" className="nav-link text-white fs-5">Login</a>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
