<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex align-items-center">
      <!-- Kolom Kiri: Logo + Brand -->
      <a class="navbar-brand d-flex align-items-center me-auto" href="#" style="pointer-events: none">
        <img src="favicon/favicon-32x32.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-2"/>
        perpusvue404
      </a>

      <!-- Toggle button untuk versi mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Kolom Kanan: Menu -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/" class="nav-link active me-3 navbar-link" aria-current="page">
            <i class="bi bi-house-fill me-1"></i>Beranda
          </router-link>
          <router-link to="/Katalog" class="nav-link active me-3 navbar-link" aria-current="page">
            <i class="bi bi-journal-bookmark-fill me-1"></i>Katalog
          </router-link>
          <router-link to="/Manajemen-Buku" class="nav-link active navbar-link" aria-current="page">
            <i class="bi bi-book-half me-1"></i>Manajemen Buku
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-layout"
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(-180deg, rgb(206, 187, 244), rgb(246, 231, 181));
  position: sticky;
  top: 0;
  z-index: 999;
  font-weight: bold;
}

.navbar-link:hover {
  border: rgb(132, 72, 0) 1px;
  border-style: double;
  border-radius: 15px;
}

.navbar-brand img {
  max-width: 100%;
  max-height: 100%;
}
</style>