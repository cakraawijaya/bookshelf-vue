<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex align-items-center">
      <!-- Logo + Brand -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img
          src="favicon/favicon-32x32.png"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top me-2"
        />
        perpusvue404
      </a>

      <!-- Toggle button untuk versi mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link navbar-link" aria-current="page">
              <i class="bi bi-house-fill me-1"></i>Beranda
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Katalog" class="nav-link navbar-link" aria-current="page">
              <i class="bi bi-journal-bookmark-fill me-1"></i>Katalog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Manajemen-Buku" class="nav-link navbar-link" aria-current="page">
              <i class="bi bi-book-half me-1"></i>Manajemen Buku
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-layout",
};
</script>

<style scoped>
/* Navbar General */
.navbar {
  background: linear-gradient(-180deg, rgb(206, 187, 244), rgb(246, 231, 181));
  position: sticky;
  top: 0;
  z-index: 999;
  font-weight: bold;
  height: 70px;
}

/* Navbar Links */
.navbar-link {
  position: relative;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.navbar-link:hover {
  border: 2px double rgb(132, 72, 0);
  border-radius: 12px;
}

/* Logo */
.navbar-brand img {
  max-width: 100%;
  max-height: 100%;
}

/* ===============================
   Desktop Layout
================================= */
@media (min-width: 933px) {
  .navbar-nav {
    display: flex;
    margin-left: auto; /* menu ke kanan */
    gap: 15px;
    align-items: center;
  }

  .nav-item .nav-link {
    padding: 8px 15px;
  }
}

/* ===============================
   Tablet & Mobile Layout
================================= */
@media (max-width: 932px) {
  .navbar {
    height: auto;
  }

  .navbar-nav {
    width: 100%;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav-link {
    width: 100%;
    font-size: 0.95rem;
    padding: 12px 20px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
  }

  /* Underline tipis tepat di bawah icon + teks */
  .navbar-link::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 20%;
    right: 20%;
    height: 2px;
    background-color: #000;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  /* Munculkan underline saat hover / active */
  .navbar-link:hover::after,
  .navbar-link.active::after {
    transform: scaleX(1);
  }

  /* Jarak icon & teks */
  .navbar-link i {
    margin-right: 0.5rem;
  }
}
</style>