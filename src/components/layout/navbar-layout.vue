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
        Bookshelf-Vue
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
  transition: background 0.3s ease;
}

/* Navbar Links */
.navbar-link {
  position: relative;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 8px 15px;
}

/* Hover */
.navbar-link:hover {
  border-color: rgba(255, 231, 154, 1);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
    margin-left: auto;
    gap: 15px;
    align-items: center;
  }

  .nav-item {
    display: flex;
    align-items: center;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-1px);
  }

  .navbar-link i {
    margin-right: 0.5rem;
  }
}

/* ===============================
   Tablet & Mobile Layout
================================= */
@media (max-width: 932px) {
  .navbar {
    height: auto;
    padding: 10px 15px;
  }

  .container-fluid {
    flex-wrap: wrap;
  }

  .navbar-collapse {
    margin-top: 8px;
    text-align: center;
  }

  .navbar-nav {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px 0;
  }

  .nav-item {
    width: 90%;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-1px);
  }

  .navbar-link::after {
    display: none;
  }

  .navbar-toggler {
    border: none;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navbar-brand {
    flex: 1;
  }

  .navbar-link i {
    margin-right: 0.5rem;
  }
}
</style>