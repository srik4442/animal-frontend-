// frontend/src/components/Nav.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Nav.css'; // Import custom CSS

function Nav() {
    return (
      <nav className="ttttt">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Pets Lost and Found Platform
          </Link>
          <div className="nav-links">
            <div className="nav-link">
              <Link to="/create-pet" className="t">
              </Link>
            </div>
            <div className="nav-link" className="t1">
              <Link to="/pet-list" className="t">
              Pets DB
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  

export default Nav;
