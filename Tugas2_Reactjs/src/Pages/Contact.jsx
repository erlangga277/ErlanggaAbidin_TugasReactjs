import React, { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
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
  );
}