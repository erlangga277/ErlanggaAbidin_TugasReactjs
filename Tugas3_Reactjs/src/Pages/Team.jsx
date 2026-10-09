import React from 'react';

const teamMembers = [
  {
    name: 'Erlangga Abidin',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Pencetus ide Bookstore dengan visi meningkatkan minat baca dan literasi masyarakat.',
    social: { linkedin: '#', instagram: '#' }
  },
  {
    name: 'Sarah Sehan',
    role: 'Head of Editorial',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Pengalaman 8+ tahun dalam mengurasi buku-buku terbaik berstandar internasional.',
    social: { linkedin: '#', instagram: '#' }
  },
  {
    name: 'Rian Hilma',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Mengembangkan platform digital agar responsif, cepat, dan nyaman bagi para pembaca.',
    social: { linkedin: '#', instagram: '#' }
  },
  {
    name: 'Nadia Tanjung',
    role: 'Customer Care Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Memastikan setiap pelanggan mendapatkan pengalaman belanja buku terbaik dan cepat.',
    social: { linkedin: '#', instagram: '#' }
  }
];

export default function Team() {
  return (
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
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="btn btn-sm btn-light rounded-circle text-secondary">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="btn btn-sm btn-light rounded-circle text-secondary">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    )}
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
  );
}