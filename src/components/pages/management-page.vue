<template>
  <div class="container manajemen-container">
    <h1 class="manajemen-title mb-3">Menu Manajemen Buku</h1>
    <p class="manajemen-desc text-muted mb-2">
      Menu ini menampilkan daftar koleksi buku perpustakaan secara interaktif, serta memungkinkan 
      Anda menambah, mengubah, atau menghapus data buku secara mudah dan cepat.
    </p>

    <hr class="manajemen-divider mb-5" />

    <!-- Baris atas: Tambah Buku & Search -->
    <div class="row align-items-stretch justify-content-between mb-3 flex-column flex-md-row">
      <div class="col-md-4 text-start mb-2 mb-md-0 d-flex">
        <button class="btn btn-warning w-70 w-md-auto flex-fill-md" @click="formMode = 'create'">
          <i class="bi bi-journal-plus me-1"></i> Tambah Buku
        </button>
      </div>

      <div class="col-md-4 text-end d-flex justify-content-md-end">
        <div class="input-group manajemen-search-group w-100 w-md-auto">
          <input
            type="text"
            class="form-control search-box"
            v-model="searchQuery"
            placeholder="Cari judul / pengarang / tahun..."
          />
          <span class="search-label">
            <i class="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>

    <!-- Form Tambah Buku -->
    <div id="formTambah" v-if="formMode == 'create'" class="mt-5 mb-4">
      <form class="form-row" @submit.prevent="submitAdd">
        <div class="row">
          <div class="col-12 col-md-3 mb-2 mb-md-0">
            <div class="input-group input-group-sm">
              <span class="input-group-text bginput-create">
                <i class="bi bi-journal-richtext me-1"></i>Judul
              </span>
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Isi data.."
                v-model="newBook.judul"
              />
            </div>
          </div>
          <div class="col-12 col-md-4 mb-2 mb-md-0">
            <div class="input-group input-group-sm">
              <span class="input-group-text bginput-create">
                <i class="bi bi-people-fill me-1"></i>Pengarang
              </span>
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Isi data.."
                v-model="newBook.pengarang"
              />
            </div>
          </div>
          <div class="col-12 col-md-3 mb-2 mb-md-0">
            <div class="input-group input-group-sm">
              <span class="input-group-text bginput-create">
                <i class="bi bi-calendar-range-fill me-1"></i>Tahun
              </span>
              <input
                type="number"
                class="form-control form-control-sm"
                placeholder="Isi data.."
                v-model="newBook.tahun"
              />
            </div>
          </div>
          <div class="col-12 col-md-2 d-grid">
            <button type="submit" class="btn btn-sm btn-warning col-12">
              <i class="bi bi-check2-square me-1"></i>Tambah
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Form Edit Buku -->
    <div id="formEdit" v-if="formMode == 'edit'" class="mt-5 mb-4">
      <form class="form-row" @submit.prevent="submitChange">
        <div class="row">
          <div class="col-12 col-md-3 mb-2 mb-md-0">
            <div class="input-group input-group-sm">
              <span class="input-group-text bginput-update">
                <i class="bi bi-journal-richtext me-1"></i>Judul
              </span>
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Ubah judul buku..."
                v-model="updatedBook.judul"
              />
            </div>
          </div>
          <div class="col-12 col-md-4 mb-2 mb-md-0">
            <div class="input-group input-group-sm">
              <span class="input-group-text bginput-update">
                <i class="bi bi-people-fill me-1"></i>Pengarang
              </span>
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Ubah pengarang buku..."
                v-model="updatedBook.pengarang"
              />
            </div>
          </div>
          <div class="col-12 col-md-3 mb-2 mb-md-0">
            <div class="input-group input-group-sm">
              <span class="input-group-text bginput-update">
                <i class="bi bi-calendar-range-fill me-1"></i>Tahun
              </span>
              <input
                type="number"
                class="form-control form-control-sm"
                placeholder="Ubah tahun..."
                v-model="updatedBook.tahun"
              />
            </div>
          </div>
          <div class="col-12 col-md-2 d-grid">
            <button type="submit" class="btn btn-sm btn-info col-12">
              <i class="bi bi-check2-square me-1"></i>Edit
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Tabel Data Buku -->
    <div class="table-responsive mt-4">
      <table class="table table-bordered table-striped table-hover shadow-sm">
        <thead class="table-dark">
          <tr>
            <th class="align-middle text-center">
              <i class="bi bi-journal-text me-1"></i> Judul Buku
            </th>
            <th class="align-middle text-center">
              <i class="bi bi-people me-1"></i> Pengarang
            </th>
            <th class="align-middle text-center">
              <i class="bi bi-calendar me-1"></i> Tahun
            </th>
            <th v-if="filteredBooks.length > 0" class="align-middle text-center">
              <i class="bi bi-activity me-1"></i> Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book._id">
            <td class="align-middle text-center">{{ book.judul }}</td>
            <td class="align-middle text-center">{{ book.pengarang }}</td>
            <td class="align-middle text-center">{{ book.tahun }}</td>
            <td
              v-if="filteredBooks.length > 0"
              class="d-flex flex-column flex-md-row justify-content-center gap-1 gap-md-2 align-middle text-center"
            >
              <button @click="showEdit(book)" class="btn btn-sm btn-info">
                <i class="bi bi-pencil"></i> Edit
              </button>
              <button @click="HapusBuku(book)" class="btn btn-sm btn-danger">
                <i class="bi bi-trash"></i> Hapus
              </button>
            </td>
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
  name: "management-page",
  props: ["bookList"],
  data() {
    return {
      formMode: "",
      searchQuery: "",
      newBook: { judul: "", pengarang: "", tahun: "" },
      updatedBook: { _id: "", judul: "", pengarang: "", tahun: "" },
    };
  },
  computed: {
    filteredBooks() {
      const q = this.searchQuery.toLowerCase().trim();
      if (!q) return this.bookList;
      return this.bookList.filter(
        (b) =>
          b.judul.toLowerCase().includes(q) ||
          b.pengarang.toLowerCase().includes(q) ||
          b.tahun.toString().includes(q)
      );
    },
  },
  methods: {
    submitAdd() {
      this.$emit("store", { ...this.newBook });
      this.newBook = { judul: "", pengarang: "", tahun: "" };
      this.formMode = "";
    },
    submitChange() {
      if (!this.updatedBook.judul || !this.updatedBook.pengarang || !this.updatedBook.tahun) {
        alert("Semua field wajib diisi!");
        return;
      }
      this.$emit("update", { ...this.updatedBook });
      this.formMode = "";
    },
    showEdit(b) {
      this.formMode = "edit";
      this.updatedBook = { ...b };
    },
    HapusBuku(b) {
      this.$emit("delete", b);
    }
  }
};
</script>

<style scoped>
.manajemen-container {
  margin: 0 auto;
  text-align: center;
  max-width: 100%;
}

/* Heading */
.manajemen-title {
  font-weight: 700;
  font-size: 2rem;
  color: #212529;
}
.manajemen-desc {
  font-size: 1.05rem;
  color: #495057;
}
.manajemen-divider {
  border-top: 2px solid #5c5c5c;
}

/* Search */
.manajemen-search-group {
  max-width: 350px;
}
.search-box {
  border: 2px solid #212529;
  background-color: #ffffff;
  color: #212529;
  font-weight: 500;
  padding: 0.6rem 1rem;
  transition: all 0.25s ease;
  border-radius: 8px 0 0 8px;
}
.search-box::placeholder {
  color: #6c757d;
  opacity: 0.8;
}
.search-box:focus {
  outline: none;
  border-color: #6c757d;
  box-shadow: 0 0 0 0.05rem rgba(0, 0, 0, 0.25);
}
.search-label {
  background-color: #212529;
  color: #ffffff;
  font-weight: 600;
  border: 2px solid #212529;
  padding: 0.6rem 1.2rem;
  border-radius: 0 8px 8px 0;
  transition: all 0.3s ease;
}

/* Form Input */
.form-control.form-control-sm {
  background-color: #ffffff;
  color: #212529;
  font-weight: 500;
  transition: all 0.25s ease;
}
.form-control.form-control-sm::placeholder {
  color: #6c757d;
  opacity: 0.8;
}
.form-control.form-control-sm:focus,
.form-control.form-control-sm:hover {
  outline: none;
  border-color: #6c757d;
  box-shadow: 0 0 0 0.05rem rgba(0, 0, 0, 0.25);
}

/* Table */
.table {
  font-size: 0.95rem;
  border-radius: 10px;
  overflow: hidden;
}
.table thead {
  background-color: #212529;
  color: #fff;
  font-weight: bold;
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

/* Responsive */
@media (min-width: 768px) and (max-width: 1024px) {
  .manajemen-title {
    font-size: 1.25rem;
  }

  .manajemen-desc {
    font-size: 0.9rem;
  }

  .manajemen-search-group {
    max-width: 100% !important;
    margin-top: 0.5rem;
  }

  .search-box::placeholder {
    font-size: 1.5vw;
    color: #6c757d;
    opacity: 0.8;
  }

  .table-responsive {
    overflow-x: auto;
  }
  .table thead th i {
    display: none;
  }
  .table td .btn {
    width: 100%;
  }
}

/* ===== Layar super kecil <= 400px ===== */
@media (max-width: 400px) {
  .manajemen-title {
    font-size: 1.1rem;
  }

  .manajemen-desc {
    font-size: 0.85rem;
  }

  /* Search bar full width */
  .manajemen-search-group {
    width: 100% !important;
    margin-top: 0.5rem;
  }

  /* Form tambah/edit: semua kolom full width */
  #formTambah .row > div,
  #formEdit .row > div {
    width: 100% !important;
    margin-bottom: 0.5rem;
  }

  /* Tombol tambah/edit full width */
  #formTambah button,
  #formEdit button {
    width: 100% !important;
  }

  /* Tombol aksi tabel: stack vertikal */
  .table td.d-flex {
    flex-direction: column !important;
    gap: 0.25rem !important;
    align-items: stretch !important;
  }

  .table td.d-flex button {
    width: 100% !important;
  }

  /* Table scroll horizontal */
  .table-responsive {
    overflow-x: auto;
  }

  .table thead th i {
    display: none;
  }

  /* Padding input lebih nyaman di layar kecil */
  .form-control.form-control-sm,
  .search-box {
    padding: 0.5rem !important;
  }
}
</style>