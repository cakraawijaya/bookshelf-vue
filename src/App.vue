<template>
    <Navbar />
    <main>
      <router-view 
        :bookList="filteredBooks"
        @store="storeData" 
        @update="updateData" 
        @delete="deleteData"
      />
    </main>
    <Footer />
</template>

<script>
import Navbar from "./components/layout/navbar-layout.vue";
import Footer from "./components/layout/footer-layout.vue";

export default {
  name: "App",
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
    storeData(bookCreated) {
      if (!bookCreated.judul || !bookCreated.pengarang || !bookCreated.tahun) {
        alert("Semua field wajib diisi!");
        return;
      }
      const newId = this.booksData.length > 0 ? Math.max(...this.booksData.map(b => b._id)) + 1 : 1;
      const newBook = { _id: newId, ...bookCreated };
      this.booksData.push(newBook);
      this.filteredBooks = [...this.booksData];
      alert("Data berhasil ditambahkan!");
    },

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
main {
  padding: 60px;
  flex: 1;
}

@media (min-width: 768px) and (max-width: 1024px) {
  main {
    padding: 50px;
  }
}

@media (max-width: 480px) {
  main {
    padding: 35px;
  }
}
</style>