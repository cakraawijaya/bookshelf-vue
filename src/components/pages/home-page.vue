<template>
    <div class="beranda" style="text-align: center">
        <img src="favicon/logo.png" class="Logo" alt="Logo"/>
        <h1>Selamat datang di website Bookshelf-Vue</h1>
        <p>- Website Bookshelf-Vue ini merupakan media pustaka digital yang dibuat dengan bantuan framework Vue JS -</p>
    </div>
</template>

<script>
    export default {
      name: "home-page"
    }
</script>

<style scoped>
.beranda {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  min-height: 80vh;
  box-sizing: border-box;
}

.logo {
  width: 200px;      /* ukuran default logo */
  max-width: 50%;    /* agar logo mengecil di layar kecil */
  height: auto;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

h1 {
  font-size: 2rem;
  margin-bottom: 15px;
}

p {
  font-size: 1rem;
  max-width: 600px;   /* agar teks tidak terlalu panjang di layar besar */
}

/* Media Queries untuk layar lebih kecil */
@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.9rem;
  }
  .logo {
    width: 150px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.2rem;
  }
  p {
    font-size: 0.8rem;
  }
  .logo {
    width: 120px;
  }
}
</style>
