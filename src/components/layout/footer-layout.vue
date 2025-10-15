<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
      
      <ul class="nav sosmed justify-content-center justify-content-md-end list-unstyled d-flex gap-3 order-1 order-md-2">
        <li><a href="#" class="sosmed-link"><i class="bi bi-twitter"></i></a></li>
        <li><a href="#" class="sosmed-link"><i class="bi bi-instagram"></i></a></li>
        <li><a href="#" class="sosmed-link"><i class="bi bi-facebook"></i></a></li>
      </ul>

      <div class="copyright text-center text-md-start mb-md-0 order-2 order-md-1">
        <span class="text-muted monospace">
          © 2022-{{ currentYear }} <strong>Bookshelf-Vue</strong>. All Rights Reserved
        </span>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-layout",
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(-180deg, rgb(206, 187, 244), rgb(246, 231, 181));
}

.footer .container-fluid {
  padding: 1.2rem 3rem;
}

.sosmed-link {
  color: #6c757d;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.sosmed-link:hover {
  color: #000;
  transform: scale(1.2) rotate(5deg);
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}

.copyright span {
  font-size: 1rem;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer .container-fluid {
    flex-direction: column;
    text-align: center;
    padding: 1rem 2.2rem;
  }

  .sosmed-link {
    font-size: 1.5rem;
  }

  .copyright span {
    font-size: 0.95rem;
  }
}

@media (max-width: 767px) {
  .footer .container-fluid {
    flex-direction: column;
    text-align: center;
    padding: 0.8rem 1.2rem;
  }

  .sosmed {
    order: 1;
    margin-bottom: 8px;
    gap: 1rem;
  }

  .sosmed-link {
    font-size: 1.2rem;
  }

  .copyright {
    order: 2;
  }

  .copyright span {
    font-size: 0.85rem;
  }
}
</style>