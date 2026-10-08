import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './Layouts/RootLayouts.jsx';
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import Team from './Pages/Team.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<RootLayout />}>
          {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Fallback 404 Route */}
          <Route path="*" element={
            <div className="text-center py-5">
              <h2 className="display-4 fw-bold text-danger">404</h2>
              <p className="lead">Halaman yang Anda tuju tidak ditemukan.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;