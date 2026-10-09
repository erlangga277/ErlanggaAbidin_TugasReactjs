import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center justify-content-between g-3">
          <div className="col-md-4 text-center text-md-start">
            <Link to="/" className="d-inline-flex align-items-center text-decoration-none text-dark fw-bold fs-5">
              <i className="fa-solid fa-book-open text-primary me-2"></i> bookstore
            </Link>
            <p className="text-muted small mb-0 mt-1">&copy; 2026 Bookstore Inc. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-secondary fs-5"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/a.erlangg44/" target="_blank" rel="noreferrer" className="text-secondary fs-5">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}