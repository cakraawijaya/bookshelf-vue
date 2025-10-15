<template>
  <div class="container manajemen-container">
    <h1 class="manajemen-title mb-3">Menu Manajemen Buku</h1>
    <p class="manajemen-desc text-muted mb-2">
      Menu ini menampilkan daftar koleksi buku perpustakaan secara interaktif, serta memungkinkan 
      Anda menambah, mengubah, atau menghapus data buku secara mudah dan cepat.
    </p>

    <hr class="manajemen-divider mb-5" />

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

.manajemen-title {
  font-weight: 700;
  font-size: 2rem;
  color: #212529;
}

.manajemen-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: #495057;
}

.manajemen-divider {
  border-top: 2px solid #5c5c5c;
}

.manajemen-search-group {
  max-width: 500px;
}

.search-box {
  border: 2px solid #212529;
  background-color: #fff;
  color: #212529;
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  font-size: 0.95rem;
  transition: all 0.25s ease;
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
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-label i {
  font-size: 1rem;
}

.form-control.form-control-sm {
  background-color: #fff;
  color: #212529;
  font-weight: 500;
  transition: all 0.25s ease;
  font-size: 0.9rem;
}

.form-control.form-control-sm::placeholder {
  color: #6c757d;
  opacity: 0.8;
  font-size: 0.9rem;
}

.form-control.form-control-sm:focus,
.form-control.form-control-sm:hover {
  outline: none;
  border-color: #6c757d;
  box-shadow: 0 0 0 0.05rem rgba(0, 0, 0, 0.25);
}

.input-group-text {
  font-size: 0.9rem;
  font-weight: 500;
}

.input-group-text i {
  font-size: 0.9rem;
  margin-right: 0.3rem;
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

.table thead th {
  text-align: center;
  font-size: 0.9rem;
}

.table thead th i {
  font-size: 0.9rem;
  margin-right: 0.3rem;
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

.table tbody td {
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #212529;
}

.btn {
  font-size: 0.9rem;
  font-weight: 500;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .manajemen-title {
    font-size: 1.6rem;
  }

  .manajemen-desc {
    font-size: 0.9rem;
  }

  .manajemen-search-group {
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

  .search-label i,
  .input-group-text,
  .input-group-text i,
  .table thead th i {
    font-size: 0.85rem;
  }

  .table {
    font-size: 0.8rem;
  }

  .table tbody td,
  .btn,
  .form-control.form-control-sm {
    font-size: 0.85rem;
  }
}

@media (max-width: 540px) {
  .manajemen-desc {
    margin-top: 35px;
  }

  .manajemen-container > .row .btn.btn-warning {
    width: 100% !important;
    text-align: left;
    line-height: 2.5;
    margin-bottom: 10px;
  }

  .manajemen-search-group {
    margin-bottom: 20px;
  }

  .table thead th i {
    display: none;
  }
}

@media (max-width: 480px) {
  .manajemen-title {
    font-size: 1.3rem;
  }

  .manajemen-desc {
    font-size: 0.8rem;
    margin-top: 30px;
  }

  .manajemen-container > .row .btn.btn-warning {
    width: 100% !important;
    text-align: left;
    line-height: 2.4;
    margin-bottom: -5px;
  }

  .manajemen-search-group {
    width: 100%;
    margin: 0.8rem auto;
  }

  #formTambah .row > div,
  #formEdit .row > div {
    width: 100% !important;
    margin-bottom: 0.5rem;
  }

  #formTambah button,
  #formEdit button {
    width: 100% !important;
  }

  .table td.d-flex {
    flex-direction: column !important;
    gap: 0.25rem !important;
    align-items: stretch !important;
  }

  .table td.d-flex button {
    width: 100% !important;
  }

  .table-responsive {
    overflow-x: auto;
  }

  .table thead th {
    font-size: 0.7rem;
  }

  .table thead th i {
    display: none;
  }

  .form-control.form-control-sm,
  .search-box,
  .input-group-text,
  .btn {
    font-size: 0.75rem;
    padding: 0.5rem !important;
  }

  .input-group-text i {
    font-size: 0.75rem;
  }

  .input-group-text.bginput-create,
  .input-group-text.bginput-update {
    font-size: 0.75rem;
  }

  .search-box::placeholder,
  .form-control.form-control-sm::placeholder {
    font-size: 0.75rem;
  }

  .table tbody td {
    font-size: 0.75rem;
  }
}
</style>