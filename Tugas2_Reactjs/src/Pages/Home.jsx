import React from 'react';
import Books from './Books';

export default function Home() {
  return (
    <>
      {/* Hero Section Banner */}
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

      {/* 3 Keunggulan Bookstore */}
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

      {/* Menampilkan Daftar Buku di Home */}
      <Books isHome={true} />
    </>
  );
}