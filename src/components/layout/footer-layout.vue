<template>
  <footer class="footer d-flex flex-column-reverse flex-md-row justify-content-between align-items-center p-3">
    <!-- Kolom Kiri (copyright) -->
    <div class="d-flex justify-content-center justify-content-md-start w-100 w-md-auto mb-2 mb-md-0">
      <span class="text-muted monospace">
        © 2022-{{ currentYear }} <strong>perpusvue404</strong>. All Rights Reserved
      </span>
    </div>

    <!-- Kolom Kanan (ikon sosial) -->
    <ul class="nav justify-content-center justify-content-md-end list-unstyled d-flex w-100 w-md-auto">
      <li class="ms-3"><a href="#" class="text-muted"><i class="bi bi-twitter"></i></a></li>
      <li class="ms-3"><a href="#" class="text-muted"><i class="bi bi-instagram"></i></a></li>
      <li class="ms-3"><a href="#" class="text-muted"><i class="bi bi-facebook"></i></a></li>
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

.footer .nav a:hover {
  color: #000;
  transition: color 0.3s;
}
</style>