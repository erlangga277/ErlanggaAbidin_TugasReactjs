import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  // Helper fungsi untuk styling NavLink yang aktif & interaktif
  const getNavLinkClass = ({ isActive }) =>
    `nav-link px-3 rounded-pill transition-all ${
      isActive 
        ? 'active bg-primary text-white fw-bold shadow-sm' 
        : 'text-secondary hover-primary'
    }`;

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between py-3">
          {/* Brand Logo */}
          <Link to="/" className="d-flex align-items-center text-decoration-none text-dark">
            <i className="fa-solid fa-book-open fa-2xl text-primary me-2"></i>
            <span className="fs-3 fw-bold tracking-tight">bookstore</span>
          </Link>

          {/* Navigation Links */}
          <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-2">
            <li className="nav-item">
              <NavLink to="/" end className={getNavLinkClass}>
                <i className="fa-solid fa-house me-1 small"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/books" className={getNavLinkClass}>
                <i className="fa-solid fa-book me-1 small"></i> Book Catalog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" className={getNavLinkClass}>
                <i className="fa-solid fa-users me-1 small"></i> Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={getNavLinkClass}>
                <i className="fa-solid fa-envelope me-1 small"></i> Contact
              </NavLink>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="text-end">
            <button type="button" className="btn btn-outline-primary me-2 fw-semibold">Login</button>
            <button type="button" className="btn btn-primary fw-semibold">Register</button>
          </div>
        </div>
      </div>
    </header>
  );
}