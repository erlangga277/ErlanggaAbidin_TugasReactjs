import React, { useState } from 'react';
import initialBooks from '../Utils/books';

export default function Books({ isHome = false }) {
  //  useState Hooks untuk mengelola data buku
  const [bookList, setBookList] = useState(initialBooks);

  // State untuk form input penambahan buku baru
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    category: 'Umum',
    price: '',
    description: '',
    image: ''
  });

  // Handler input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler submit tambah buku
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) {
      alert("Harap isi minimal Judul dan Penulis buku!");
      return;
    }

    const createdBook = {
      id: Date.now(),
      title: newBook.title,
      author: newBook.author,
      year: newBook.year || new Date().getFullYear(),
      category: newBook.category || 'Umum',
      price: newBook.price ? `Rp ${newBook.price}` : 'Rp 90.000',
      description: newBook.description || 'Deskripsi buku baru...',
      image: newBook.image || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
    };

    // Update state books menggunakan Hooks
    setBookList([createdBook, ...bookList]);

    // Reset Form
    setNewBook({
      title: '',
      author: '',
      year: '',
      category: 'Umum',
      price: '',
      description: '',
      image: ''
    });

    const modalElement = document.getElementById('addBookModal');
    if (modalElement && window.bootstrap) {
      const modal = window.bootstrap.Modal.getInstance(modalElement);
      if (modal) modal.hide();
    }
  };

  return (
    <>
      {/* Title Section */}
      <section className="py-4 text-center container">
        <div className="row py-lg-3">
          <div className="col-lg-7 col-md-9 mx-auto">
            <h2 className="fw-bold text-dark mb-2">
              {isHome ? 'Koleksi Buku Terpopuler' : 'Katalog Lengkap Buku'}
            </h2>
            <p className="lead text-secondary">
              Temukan berbagai karya inspiratif dari penulis ternama untuk menemani perjalanan belajarmu.
            </p>

            {/* Tombol Tambah Buku (Hooks Action) */}
            <button
              type="button"
              className="btn btn-primary px-4 py-2 mt-2 shadow-sm rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#addBookModal"
            >
              <i className="fa-solid fa-plus me-2"></i> Tambah Buku Baru
            </button>
          </div>
        </div>
      </section>

      {/* Grid Katalog Buku menggunakan metode .map() */}
      <div className="album py-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {bookList.map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                  <div className="position-relative text-center bg-light p-3" style={{ height: "260px" }}>
                    <img
                      src={book.image}
                      className="img-fluid rounded shadow-sm h-100"
                      alt={book.title}
                      style={{ objectFit: "cover", width: "160px" }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    {book.category && (
                      <span className="position-absolute top-0 start-0 m-3 badge bg-dark">
                        {book.category}
                      </span>
                    )}
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark mb-1">{book.title}</h5>
                    <p className="card-subtitle text-muted small mb-1">
                      Oleh: <strong>{book.author}</strong> ({book.year})
                    </p>
                    <p className="card-text text-secondary small flex-grow-1 mt-2">
                      {book.description}
                    </p>
                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <div>
                        <span className="fw-bold text-primary fs-5">{book.price || 'Rp 85.000'}</span>
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

      <div className="modal fade" id="addBookModal" tabIndex="-1" aria-labelledby="addBookModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title fw-bold" id="addBookModalLabel">
                <i className="fa-solid fa-book-medical me-2"></i>Tambah Data Buku
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddBook}>
              <div className="modal-body text-start">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Judul Buku *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                    placeholder="Contoh: Mastering TypeScript"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Penulis *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      value={newBook.author}
                      onChange={handleInputChange}
                      placeholder="Nama Penulis"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Tahun Terbit</label>
                    <input
                      type="number"
                      className="form-control"
                      name="year"
                      value={newBook.year}
                      onChange={handleInputChange}
                      placeholder="2024"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Kategori</label>
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      value={newBook.category}
                      onChange={handleInputChange}
                      placeholder="Teknologi / Fiksi"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Harga (tanpa Rp)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      value={newBook.price}
                      onChange={handleInputChange}
                      placeholder="120.000"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">URL Gambar Cover</label>
                  <input
                    type="url"
                    className="form-control"
                    name="image"
                    value={newBook.image}
                    onChange={handleInputChange}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Deskripsi Singkat</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="description"
                    value={newBook.description}
                    onChange={handleInputChange}
                    placeholder="Tulis ringkasan singkat buku..."
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer bg-light">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="submit" className="btn btn-primary px-4 fw-bold">
                  Simpan Buku
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}