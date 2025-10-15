<template>
  <footer class="footer d-flex flex-column-reverse flex-md-row justify-content-between align-items-center p-4">
    <!-- Kolom Kiri (copyright) -->
    <div class="d-flex justify-content-center justify-content-md-start w-100 w-md-auto mb-2 mb-md-0 copyright">
      <span class="text-muted monospace">
        © 2022-{{ currentYear }} <strong>Bookshelf-Vue</strong>. All Rights Reserved
      </span>
    </div>

    <!-- Kolom Kanan (ikon sosial) -->
    <ul class="nav justify-content-center justify-content-md-end list-unstyled d-flex w-100 w-md-auto sosmed">
      <li class="ms-3"><a href="#" class="sosmed-link"><i class="bi bi-twitter"></i></a></li>
      <li class="ms-3"><a href="#" class="sosmed-link"><i class="bi bi-instagram"></i></a></li>
      <li class="ms-3"><a href="#" class="sosmed-link"><i class="bi bi-facebook"></i></a></li>
    </ul>
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

/* Efek hover ikon sosmed */
.sosmed-link {
  color: #6c757d;
  font-size: 1.4rem;
  transition: all 0.3s ease;
}

.sosmed-link:hover {
  color: #000;
  transform: scale(1.2) rotate(5deg);
  text-shadow: 0 0 5px rgba(0,0,0,0.3);
}

/* Responsif */
@media (max-width: 768px) {
  .sosmed {
    margin: 8px 0 10px 0;
  }

  .copyright > span {
    text-align: center;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .sosmed {
    margin: 8px 0 10px 0;
  }

  .copyright > span {
    text-align: center;
    margin: 0 auto;
  }
}
</style>