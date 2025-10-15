<template>
  <section class="home-container">
    <!-- Home Section -->
    <div class="home">
      <div class="home-text">
        <h1>Selamat Datang di <span>Bookshelf-Vue</span></h1>
        <p>
          Bookshelf-Vue adalah media pustaka digital modern berbasis 
          <strong>Vue.js</strong>, tempat untuk mengelola dan menjelajahi koleksi buku favoritmu.
        </p>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features">
      <router-link to="/katalog" class="feature-card">
        <i class="bi bi-journal-bookmark"></i>
        <h3>Katalog Buku</h3>
        <p>Telusuri berbagai koleksi buku menarik dalam satu tempat.</p>
      </router-link>

      <router-link to="/manajemen-buku" class="feature-card">
        <i class="bi bi-book-half"></i>
        <h3>Manajemen Buku</h3>
        <p>Tambah, ubah, atau hapus data buku dengan mudah dan cepat.</p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "home-page",
};
</script>

<style scoped>
.home-container {
  background: linear-gradient(180deg, #f6f0ff 0%, #fff9e6 100%);
  min-height: 100vh;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  max-width: 1200px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* ===============================
   Home Section
================================= */
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 900px;
  text-align: center;
  margin-bottom: 60px;
}

.home-text {
  flex: 1 1 100%;
}

.home-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f2b3a;
}

.home-text h1 span {
  color: #6f42c1;
}

.home-text p {
  margin-top: 20px;
  color: #4d4d4d;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* ===============================
   Features Section
================================= */
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.feature-card {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 280px;
  padding: 30px 25px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease;
}

/* Efek hover modern & elegan */
.feature-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 10px 25px rgba(111, 66, 193, 0.25);
  background: linear-gradient(145deg, #ffffff 0%, #f4ecff 100%);
}

/* Garis cahaya lembut di bawah kartu */
.feature-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, #6f42c1, #b07cff);
  border-radius: 3px;
  transition: all 0.4s ease;
}

.feature-card:hover::after {
  transform: translateX(-50%) scaleX(1);
}

/* Animasi ikon saat hover */
.feature-card i {
  font-size: 2.5rem;
  color: #6f42c1;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.feature-card:hover i {
  transform: scale(1.15) rotate(3deg);
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #2f2b3a;
}

.feature-card p {
  color: #555;
  font-size: 1rem;
}

/* ===============================
   Responsive
================================= */
@media (max-width: 768px) {
  .home-container {
    padding: 60px 20px;
    border-radius: 20px;
  }

  .home-text h1 {
    font-size: 2rem;
  }

  .home-text p {
    font-size: 1rem;
  }

  .feature-card {
    width: 100%;
    max-width: 320px;
  }
}
</style>