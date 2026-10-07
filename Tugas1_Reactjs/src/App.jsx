import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  // Data Buku untuk Halaman Home & Catalog
  const booksData = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Pengembangan Diri',
      price: 'Rp 108.000',
      oldPrice: 'Rp 135.000',
      rating: 4.9,
      reviews: 1240,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
      description: 'Cara mudah & terbukti untuk membentuk kebiasaan baik dan menghancurkan kebiasaan buruk.'
    },
    {
      id: 2,
      title: 'Filosofi Teras',
      author: 'Henry Manampiring',
      category: 'Filsafat Stoik',
      price: 'Rp 88.000',
      oldPrice: 'Rp 110.000',
      rating: 4.8,
      reviews: 980,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
      description: 'Penerapan stoisisme dalam kehidupan modern untuk menjaga ketenangan mental.'
    },
    {
      id: 3,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      category: 'Keuangan & Bisnis',
      price: 'Rp 95.000',
      oldPrice: 'Rp 120.000',
      rating: 4.9,
      reviews: 1560,
      image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=600&q=80',
      description: 'Pelajaran abadi mengenai kekayaan, keserakahan, dan kebahagiaan finansial.'
    },
    {
      id: 4,
      title: 'Seni Berpikir Besar',
      author: 'David J. Schwartz',
      category: 'Pengembangan Diri',
      price: 'Rp 92.000',
      oldPrice: 'Rp 115.000',
      rating: 4.7,
      reviews: 840,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
      description: 'Teknik praktis untuk meraih tujuan besar dan membangun rasa percaya diri.'
    },
    {
      id: 5,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Teknologi & Coding',
      price: 'Rp 245.000',
      oldPrice: 'Rp 280.000',
      rating: 4.9,
      reviews: 2100,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80',
      description: 'Panduan utama penulisan kode software yang rapi, terstruktur, dan mudah dirawat.'
    },
    {
      id: 6,
      title: 'Bumi',
      author: 'Tere Liye',
      category: 'Novel & Fiksi',
      price: 'Rp 85.000',
      oldPrice: 'Rp 100.000',
      rating: 4.8,
      reviews: 1120,
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      description: 'Petualangan fantastis tiga remaja di dunia paralel bertema klan klan ajaib.'
    }
  ];

  // Data Anggota Tim
  const teamMembers = [
    {
      name: 'Erlangga Abidin',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Pencetus ide Bookstore dengan visi meningkatkan minat baca dan literasi masyarakat.',
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Sarah Sehan',
      role: 'Head of Editorial',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Pengalaman 8+ tahun dalam mengurasi buku-buku terbaik berstandar internasional.',
      social: { linkedin: '#', instagram: '#', twitter: '#' }
    },
    {
      name: 'Rian Hilma',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Mengembangkan platform digital agar responsif, cepat, dan nyaman bagi para pembaca.',
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Nadia Tanjung',
      role: 'Customer Care Lead',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Memastikan setiap pelanggan mendapatkan pengalaman belanja buku terbaik dan cepat.',
      social: { linkedin: '#', instagram: '#', twitter: '#' }
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header Navigation */}
      <header className="sticky-top bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between py-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
              className="d-flex align-items-center text-decoration-none text-dark"
            >
              <i className="fa-solid fa-book-open fa-2xl text-primary me-2"></i>
              <span className="fs-3 fw-bold tracking-tight">bookstore</span>
            </a>

            <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <button 
                  className={`nav-link px-3 ${activeTab === 'home' ? 'active fw-bold' : 'text-secondary'}`}
                  onClick={() => setActiveTab('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link px-3 ${activeTab === 'books' ? 'active fw-bold' : 'text-secondary'}`}
                  onClick={() => setActiveTab('books')}
                >
                  Book Catalog
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link px-3 ${activeTab === 'team' ? 'active fw-bold' : 'text-secondary'}`}
                  onClick={() => setActiveTab('team')}
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link px-3 ${activeTab === 'contact' ? 'active fw-bold' : 'text-secondary'}`}
                  onClick={() => setActiveTab('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-primary me-2 fw-semibold">Login</button>
              <button type="button" className="btn btn-primary fw-semibold">Register</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow-1">
        {/*  HOME & BOOKS   */}
        {(activeTab === 'home' || activeTab === 'books') && (
          <>
            {/* Hero Section (Hanya di Halaman Home) */}
            {activeTab === 'home' && (
              <div className="container my-4">
                <div className="row p-4 p-lg-5 align-items-center rounded-4 border bg-white shadow-sm overflow-hidden">
                  <div className="col-lg-7 p-3 p-lg-4">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-2 mb-3 fw-bold">
                      <i className="fa-solid fa-fire me-1"></i> Bestseller #1 Minggu Ini
                    </span>
                    <h1 className="display-5 fw-bold lh-1 text-dark mb-3">
                      Atomic Habits
                    </h1>
                    <p className="lead text-secondary mb-4">
                      Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk. Pelajari strategi nyata dari James Clear untuk meraih perubahan besar dari langkah-langkah kecil.
                    </p>
                    <div className="d-flex align-items-center mb-4">
                      <div className="text-warning me-2">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                      <span className="fw-bold me-2">4.9 / 5.0</span>
                      <span className="text-muted">(1,240 Ulasan Pembaca)</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button type="button" className="btn btn-primary btn-lg px-4 fw-bold shadow">
                        <i className="fa-solid fa-cart-shopping me-2"></i>Beli Sekarang - Rp 108.000
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-5 text-center mt-4 mt-lg-0">
                    <img 
                      className="img-fluid rounded-3 shadow-lg border" 
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80" 
                      alt="Atomic Habits Cover" 
                      style={{ maxHeight: "360px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'home' && (
              <div className="container my-5">
                <div className="row g-4 text-center">
                  <div className="col-md-4">
                    <div className="p-4 bg-white rounded-3 border shadow-sm h-100">
                      <div className="text-primary fs-1 mb-3">
                        <i className="fa-solid fa-truck-fast"></i>
                      </div>
                      <h5 className="fw-bold">Pengiriman Cepat</h5>
                      <p className="text-muted mb-0">Gratis ongkir ke seluruh Indonesia dengan garansi pengiriman aman.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-4 bg-white rounded-3 border shadow-sm h-100">
                      <div className="text-primary fs-1 mb-3">
                        <i className="fa-solid fa-certificate"></i>
                      </div>
                      <h5 className="fw-bold">100% Original</h5>
                      <p className="text-muted mb-0">Semua koleksi buku dijamin asli langsung dari penerbit resmi.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-4 bg-white rounded-3 border shadow-sm h-100">
                      <div className="text-primary fs-1 mb-3">
                        <i className="fa-solid fa-headset"></i>
                      </div>
                      <h5 className="fw-bold">Dukungan 24/7</h5>
                      <p className="text-muted mb-0">Layanan pelanggan siap membantu konsultasi dan pemesanan setiap saat.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Title Section Buku */}
            <section className="py-4 text-center container">
              <div className="row py-lg-3">
                <div className="col-lg-7 col-md-9 mx-auto">
                  <h2 className="fw-bold text-dark mb-2">
                    {activeTab === 'home' ? 'Koleksi Buku Terpopuler' : 'Katalog Lengkap Buku'}
                  </h2>
                  <p className="lead text-secondary">
                    Temukan ribuan karya inspiratif dari penulis ternama lokal dan internasional untuk menemani perjalanan belajarmu.
                  </p>
                </div>
              </div>
            </section>

            {/* Grid Katalog Buku */}
            <div className="album py-4">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                  {booksData.map((book) => (
                    <div className="col" key={book.id}>
                      <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                        <div className="position-relative text-center bg-light p-3" style={{ height: "260px" }}>
                          <img 
                            src={book.image} 
                            className="img-fluid rounded shadow-sm h-100" 
                            alt={book.title}
                            style={{ objectFit: "cover", width: "160px" }}
                          />
                          <span className="position-absolute top-0 start-0 m-3 badge bg-dark">
                            {book.category}
                          </span>
                        </div>
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex align-items-center mb-1 text-warning small">
                            <i className="fa-solid fa-star me-1"></i>
                            <span className="fw-bold text-dark me-1">{book.rating}</span>
                            <span className="text-muted">({book.reviews})</span>
                          </div>
                          <h5 className="card-title fw-bold text-dark mb-1">{book.title}</h5>
                          <p className="card-subtitle text-muted small mb-2">Oleh: {book.author}</p>
                          <p className="card-text text-secondary small flex-grow-1">
                            {book.description}
                          </p>
                          <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                            <div>
                              <span className="fw-bold text-primary fs-5">{book.price}</span>
                              <span className="text-decoration-line-through text-muted ms-2 small">{book.oldPrice}</span>
                            </div>
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-primary">
                                <i className="fa-solid fa-cart-plus"></i>
                              </button>
                              <button type="button" className="btn btn-sm btn-primary">
                                Detail
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/*  TEAM   */}
        {activeTab === 'team' && (
          <div className="py-5">
            <div className="container">
              {/* Header Team */}
              <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-dark">Tim Di Balik Bookstore</h1>
                <p className="lead text-secondary mx-auto" style={{ maxWidth: '650px' }}>
                  Kami adalah sekelompok pecinta literasi dan pengembang teknologi yang berdedikasi untuk memberikan akses buku terbaik bagi seluruh masyarakat Indonesia.
                </p>
              </div>

              {/* Grid Anggota Tim */}
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
                {teamMembers.map((member, idx) => (
                  <div className="col" key={idx}>
                    <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                      <div className="position-relative d-inline-block mx-auto mt-3 mb-3">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="rounded-circle img-thumbnail shadow-sm"
                          style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="card-body d-flex flex-column p-2">
                        <h5 className="fw-bold mb-1">{member.name}</h5>
                        <p className="text-primary fw-medium small mb-3">{member.role}</p>
                        <p className="text-muted small mb-4 flex-grow-1">{member.bio}</p>
                        
                        <div className="d-flex justify-content-center gap-2 pt-2 border-top">
                          <a href="#" className="btn btn-sm btn-light rounded-circle text-secondary">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                          <a href="#" className="btn btn-sm btn-light rounded-circle text-secondary">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banner Statistik Perusahaan */}
              <div className="bg-primary text-white p-4 p-md-5 rounded-4 shadow">
                <div className="row text-center g-4">
                  <div className="col-6 col-md-3">
                    <h2 className="display-6 fw-bold mb-1">50.000+</h2>
                    <p className="mb-0 text-white-50">Pembaca Aktif</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <h2 className="display-6 fw-bold mb-1">15.000+</h2>
                    <p className="mb-0 text-white-50">Koleksi Buku</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <h2 className="display-6 fw-bold mb-1">99,8%</h2>
                    <p className="mb-0 text-white-50">Kepuasan Pelanggan</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <h2 className="display-6 fw-bold mb-1">24/7</h2>
                    <p className="mb-0 text-white-50">Layanan Bantuan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*  CONTACT  */}
        {activeTab === 'contact' && (
          <div className="py-5">
            <div className="container">
              {/* Header Contact */}
              <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-dark">Ada Pertanyaan atau Saran?</h1>
                <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                  Tim dukungan kami selalu siap mendengar dari Anda. Silakan isi formulir di bawah ini atau hubungi saluran resmi kami.
                </p>
              </div>

              <div className="row g-4">
                {/* Form Kontak */}
                <div className="col-lg-7">
                  <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
                    <h4 className="fw-bold mb-4 text-dark">Kirim Pesan</h4>

                    {formSubmitted && (
                      <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                        <i className="fa-solid fa-circle-check me-2 fs-5"></i>
                        <div>Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.</div>
                      </div>
                    )}

                    <form onSubmit={handleContactSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label fw-medium">Nama Lengkap</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Contoh: Erlangga Abidin" 
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-medium">Alamat Email</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            placeholder="nama@email.com" 
                            required 
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-medium">Kategori Pertanyaan</label>
                          <select className="form-select" defaultValue="Umum">
                            <option value="Umum">Informasi Umum & Pembelian</option>
                            <option value="Kendala">Kendala Pengiriman / Pesanan</option>
                            <option value="Kerjasama">Kerjasama & Penulis</option>
                            <option value="Lainnya">Lainnya</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-medium">Subjek</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ringkasan topik pesan Anda" 
                            required 
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-medium">Pesan / Masukan</label>
                          <textarea 
                            className="form-control" 
                            rows="5" 
                            placeholder="Tuliskan pesan Anda secara rinci..." 
                            required
                          ></textarea>
                        </div>
                        <div className="col-12 mt-4">
                          <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm">
                            <i className="fa-solid fa-paper-plane me-2"></i>Kirim Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Kartu Informasi Kontak */}
                <div className="col-lg-5">
                  <div className="d-flex flex-column gap-3">
                    {/* Kartu Lokasi */}
                    <div className="bg-white p-4 rounded-4 border shadow-sm d-flex align-items-start gap-3">
                      <div className="bg-primary-subtle text-primary p-3 rounded-circle fs-4">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Alamat Kantor Utama</h6>
                        <p className="text-secondary mb-0 small">
                          Jl. Literasi ParungIndah No. 27, Parung Baru, Parung Selatan 12110
                        </p>
                      </div>
                    </div>

                    {/* Kartu Email */}
                    <div className="bg-white p-4 rounded-4 border shadow-sm d-flex align-items-start gap-3">
                      <div className="bg-success-subtle text-success p-3 rounded-circle fs-4">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Email Resmi</h6>
                        <p className="text-secondary mb-0 small">
                          Dukungan: support.er@gmail.com<br />
                          Informasi: info.er@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Kartu Telepon */}
                    <div className="bg-white p-4 rounded-4 border shadow-sm d-flex align-items-start gap-3">
                      <div className="bg-warning-subtle text-warning p-3 rounded-circle fs-4">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Telepon & WhatsApp</h6>
                        <p className="text-secondary mb-0 small">
                          +62 812-3456-7890 (Customer Service)<br />
                          +62 21-555-0199 (Hunting)
                        </p>
                      </div>
                    </div>

                    {/* Kartu Jam Operasional */}
                    <div className="bg-white p-4 rounded-4 border shadow-sm d-flex align-items-start gap-3">
                      <div className="bg-info-subtle text-info p-3 rounded-circle fs-4">
                        <i className="fa-solid fa-clock"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Jam Operasional</h6>
                        <p className="text-secondary mb-0 small">
                          Senin - Jumat: 08.00 - 20.00 WIB<br />
                          Sabtu - Minggu: 09.00 - 17.00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer Navigasi */}
      <footer className="bg-white border-top py-4 mt-auto">
        <div className="container">
          <div className="row align-items-center justify-content-between g-3">
            <div className="col-md-4 text-center text-md-start">
              <a href="#" className="d-inline-flex align-items-center text-decoration-none text-dark fw-bold fs-5">
                <i className="fa-solid fa-book-open text-primary me-2"></i> bookstore
              </a>
              <p className="text-muted small mb-0 mt-1">&copy; 2026 Bookstore Inc. All rights reserved.</p>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-secondary fs-5"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/a.erlangg44/" target='_blank' className="text-secondary fs-5"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;