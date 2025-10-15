<template>
  <div class="container katalog-container">
    <h1 class="katalog-title mb-3">Katalog</h1>
    <p class="katalog-desc text-muted mb-2">
      Menu ini menampilkan daftar koleksi buku perpustakaan yang tersedia saat ini.
    </p>

    <hr class="katalog-divider mb-5" />

    <div class="search-section mb-4">
      <div class="input-group katalog-search-group mx-auto">
        <input
          type="text"
          class="form-control search-box"
          v-model="searchQuery"
          placeholder="Cari judul / pengarang / tahun..."
        />
        <span class="search-label d-flex align-items-center justify-content-center">
          <i class="bi bi-search"></i>
        </span>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover shadow-sm">
        <thead class="table-dark">
          <tr>
            <th class="align-middle text-center">
              <i class="bi bi-journal-text"></i> Judul Buku
            </th>
            <th class="align-middle text-center">
              <i class="bi bi-people"></i> Pengarang
            </th>
            <th class="align-middle text-center">
              <i class="bi bi-calendar"></i> Tahun
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book._id">
            <td class="align-middle text-center">{{ book.judul }}</td>
            <td class="align-middle text-center">{{ book.pengarang }}</td>
            <td class="align-middle text-center">{{ book.tahun }}</td>
          </tr>
          <tr v-if="filteredBooks.length === 0">
            <td colspan="3" class="text-muted align-middle text-center py-3">
              Tidak ada data ditemukan...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "catalog-page",
  props: ["bookList"],
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    filteredBooks() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) return this.bookList;
      return this.bookList.filter((book) => {
        return (
          book.judul.toLowerCase().includes(query) ||
          book.pengarang.toLowerCase().includes(query) ||
          book.tahun.toString().includes(query)
        );
      });
    },
  },
};
</script>

<style scoped>
.katalog-container {
  margin: 0 auto;
  text-align: center;
  max-width: 100%;
}

.katalog-title {
  font-weight: 700;
  color: #212529;
  font-size: 2rem;
}

.katalog-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: #495057;
}

.katalog-divider {
  border-top: 2px solid #5c5c5c;
  margin-bottom: 3rem;
}

.katalog-search-group {
  max-width: 500px;
  margin: 2.5rem auto;
}

.search-box {
  border: 2px solid #212529;
  background-color: #fff;
  color: #212529;
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  transition: all 0.25s ease;
  font-size: 0.95rem;
}

.search-box::placeholder {
  color: #6c757d;
  opacity: 0.8;
  font-size: 0.9rem;
}

.search-box:focus {
  outline: none;
  border-color: #6c757d;
  box-shadow: 0 0 0 0.05rem rgba(0, 0, 0, 0.25);
}

.search-label {
  background-color: #212529;
  color: #fff;
  font-weight: 600;
  border: 2px solid #212529;
  padding: 0.6rem 1.2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.search-label i {
  font-size: 1rem;
}

.table {
  border-radius: 0.5rem;
  font-size: 0.9rem;
  overflow: hidden;
}

.table thead {
  background-color: #212529 !important;
  color: #fff !important;
  font-weight: 700;
}

.table thead th i {
  font-size: 0.9rem;
}

.table tbody tr:nth-child(even) {
  background-color: #fff8e1;
}

.table tbody tr:nth-child(odd) {
  background-color: #fdf6da;
}

.table tbody tr:hover {
  background-color: #fff3cd;
  transition: background-color 0.3s ease;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .katalog-title {
    font-size: 1.6rem;
  }

  .katalog-desc {
    font-size: 0.9rem;
  }

  .katalog-search-group {
    max-width: 100%;
  }

  .search-box {
    font-size: 0.85rem;
  }

  .search-box::placeholder {
    font-size: 0.8rem;
  }

  .search-label {
    font-size: 0.9rem;
  }

  .search-label i {
    font-size: 0.9rem;
  }

  .table {
    font-size: 0.8rem;
  }

  .table thead th i {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .katalog-title {
    font-size: 1.3rem;
  }

  .katalog-desc {
    font-size: 0.8rem;
  }

  .katalog-search-group {
    width: 100%;
    margin: 0.8rem auto;
  }

  .search-box {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .search-box::placeholder {
    font-size: 0.75rem;
  }

  .search-label {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .search-label i {
    font-size: 0.8rem;
  }

  .table-responsive {
    overflow-x: auto;
  }

  .table {
    font-size: 0.7rem;
  }

  .table thead th i {
    display: none;
  }
}
</style>
