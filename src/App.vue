<template>
  <div id="app" class="app-container">
    <Navbar />
    <main class="flex-grow-1">
      <router-view 
        :bookList="filteredBooks"
        @store="storeData" 
        @update="updateData" 
        @delete="deleteData"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layout/navbar-layout.vue';
import Footer from './components/layout/footer-layout.vue';

export default {
  name: 'App',
  components: { Navbar, Footer },
  data() {
    return {
      booksData: [
        { _id: 1, judul: "Things 1", pengarang: "David Williams", tahun: "2018" },
        { _id: 2, judul: "Things 2", pengarang: "Robert San Diego", tahun: "2019" },
        { _id: 3, judul: "Things 3", pengarang: "John Thomson", tahun: "2020" },
        { _id: 4, judul: "Things 4", pengarang: "Napoleon Davinchi", tahun: "2021" },
        { _id: 5, judul: "Things 5", pengarang: "Stephanus Eoyone", tahun: "2022" }
      ],
      filteredBooks: []
    }
  },
  created() {
    this.filteredBooks = this.booksData;
  },
  methods: {
    // Tambah Buku
    storeData(bookCreated) {
      if (!bookCreated.judul || !bookCreated.pengarang || !bookCreated.tahun) {
        alert("Semua field wajib diisi!");
        return;
      }
      // buat id unik baru
      const newId = this.booksData.length > 0 ? Math.max(...this.booksData.map(b => b._id)) + 1 : 1;
      const newBook = { _id: newId, ...bookCreated };
      this.booksData.push(newBook);
      this.filteredBooks = [...this.booksData];
      alert("Data berhasil ditambahkan!");
    },

    // Update Buku
    updateData(bookChanged) {
      const index = this.booksData.findIndex(b => b._id === bookChanged._id);
      if (index !== -1) {
        this.booksData[index] = { ...bookChanged };
        this.filteredBooks = [...this.booksData];
        alert("Data berhasil diubah!");
      } else {
        alert("Data tidak ditemukan!");
      }
    },

    // Hapus Buku
    deleteData(book) {
      const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus buku "${book.judul}"?`);
      if (confirmDelete) {
        this.booksData = this.booksData.filter(b => b._id !== book._id);
        this.filteredBooks = [...this.booksData];
        alert("Data berhasil dihapus!");
      }
    }
  }
}
</script>

<style scoped>
/* Membuat seluruh page full height dan footer selalu di bawah */
html, body, #app {
  height: 100%;
  margin: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* memastikan container setinggi layar */
}

.flex-grow-1 {
  flex: 1; /* mengambil sisa ruang sehingga footer terdorong ke bawah */
}

main {
  padding: 60px;
}
</style>