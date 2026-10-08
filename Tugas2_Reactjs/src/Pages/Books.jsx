import React from 'react';

// Data Buku
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

export default function Books({ isHome = false }) {
  return (
    <>
      {/* Title Section Buku */}
      <section className="py-4 text-center container">
        <div className="row py-lg-3">
          <div className="col-lg-7 col-md-9 mx-auto">
            <h2 className="fw-bold text-dark mb-2">
              {isHome ? 'Koleksi Buku Terpopuler' : 'Katalog Lengkap Buku'}
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
  );
}