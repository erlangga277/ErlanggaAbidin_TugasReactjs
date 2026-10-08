import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      <main className="flex-grow-1">
        {/* Outlet akan merender halaman yang aktif sesuai route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}