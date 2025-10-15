<template>
  <section class="home-container">
    <div class="home-text">
      <h1>Selamat Datang di <span>Bookshelf-Vue</span></h1>
      <p>
        Bookshelf-Vue adalah media pustaka digital modern berbasis 
        <strong>Vue.js</strong>, tempat untuk mengelola dan menjelajahi koleksi buku favoritmu.
      </p>
    </div>

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
  margin: 0 auto;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.home-text {
  max-width: 900px;
  margin-bottom: 40px;
}

.home-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f2b3a;
}

.home-text h1 span {
  color: rgba(240, 184, 0, 1);
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

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
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

.feature-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 5px 15px rgba(184, 179, 194, 0.25);
  background: linear-gradient(145deg, #ffffff 0%, #f4ecff 100%);
}

.feature-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, rgba(240, 184, 0, 1), #b07cff);
  border-radius: 3px;
  transition: all 0.4s ease;
}

.feature-card:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.feature-card i {
  font-size: 2.5rem;
  color: rgba(240, 184, 0, 1);
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.feature-card:hover i {
  transform: scale(1.15) rotate(3deg);
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2f2b3a;
}

.feature-card p {
  color: #555;
  font-size: 1rem;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .home-container {
    padding: 40px 20px;
    border-radius: 20px;
  }

  .home-text h1 {
    font-size: 1.8rem;
  }

  .home-text p {
    font-size: 0.95rem;
  }

  .feature-card {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 40px 20px;
    min-height: auto;
    box-shadow: none;
  }

  .home-text h1 {
    font-size: 1.6rem;
    line-height: 1.4;
  }

  .home-text p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 15px;
    padding: 0 10px;
  }

  .features {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .feature-card {
    width: 100%;
    max-width: 100%;
    padding: 25px 15px;
  }

  .feature-card h3 {
    font-size: 1.1rem;
  }

  .feature-card p {
    font-size: 0.9rem;
  }

  .feature-card i {
    font-size: 2rem;
  }
}
</style>