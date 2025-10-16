<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex align-items-center">
      
      <a class="navbar-brand d-flex align-items-center user-select-none" href="#">
        <img
          src="favicon/favicon-32x32.png"
          alt="Logo"
          class="logo me-2"
        />
        <span class="brand-text">Bookshelf-Vue</span>
      </a>

      <button
        class="navbar-toggler custom-toggler user-select-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse user-select-none" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">
              <i class="bi bi-house-fill me-1"></i>Beranda
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Katalog" class="nav-link" aria-current="page">
              <i class="bi bi-journal-bookmark-fill me-1"></i>Katalog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Manajemen-Buku" class="nav-link" aria-current="page">
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
.navbar {
  background: linear-gradient(-180deg, rgb(206, 187, 244), rgb(246, 231, 181));
  position: sticky;
  top: 0;
  z-index: 999;
  font-weight: bold;
  height: 70px;
  transition: background 0.3s ease;
  padding: 1rem 2rem;
}

.custom-toggler {
  border: none;
  outline: none;
  padding: 6px;
}

.navbar-toggler {
  display: none;
}

@media (max-width: 991.98px) {
  .navbar-toggler {
    display: block;
  }
  .navbar-toggler-icon {
    width: 28px;
    height: 28px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='%23666'%3E%3Cpath stroke='rgba(0,0,0,0.7)' stroke-width='2' d='M4 8h20M4 14h20M4 20h20'/%3E%3C/svg%3E");
  }
}

@media (max-width: 575.98px) {
  .navbar-toggler-icon {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23666'%3E%3Cpath stroke='rgba(0,0,0,0.7)' stroke-width='2' d='M3 7h18M3 12h18M3 17h18'/%3E%3C/svg%3E");
  }
}

.logo {
  width: 26px;
  height: 26px;
}

.brand-text {
  font-size: 1.3rem;
  font-weight: 600;
}

.navbar-nav {
  display: flex;
  margin-left: auto;
  gap: 12px;
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
  font-size: 0.9rem;
  padding: 8px 14px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.nav-link:hover {
  border-color: rgba(255, 231, 154, 1);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 991.98px) {
  .navbar {
    height: auto;
    padding: 10px 15px;
  }

  .container-fluid {
    flex-wrap: wrap;
  }

  .navbar-collapse {
    margin-top: 8px;
    width: 100%;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 0;
  }

  .nav-item {
    width: 90%;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 8px 12px;
    width: 100%;
  }

  .logo {
    width: 24px;
    height: 24px;
  }

  .brand-text {
    font-size: 1.2rem;
  }
}

@media (max-width: 575.98px) {
  .navbar {
    padding: 8px 12px;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 7px;
    border-radius: 8px;
  }

  .logo {
    width: 22px;
    height: 22px;
  }

  .brand-text {
    font-size: 1rem;
  }
}
</style>