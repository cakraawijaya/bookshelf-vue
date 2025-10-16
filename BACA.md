[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?style=flat)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?logo=github&color=%23F7DF1E)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/cakraawijaya/bookshelf-vue?logo=Codeforces&logoColor=white&color=%23F7DF1E)
![Project](https://img.shields.io/badge/Project-Website-light.svg?style=flat&logo=googlechrome&logoColor=white&color=%23F7DF1E)
![Type](https://img.shields.io/badge/Type-Course-light.svg?style=flat&logo=gitbook&logoColor=white&color=%23F7DF1E)

# Bookshelf-Vue
<p>Bookshelf-Vue adalah aplikasi perpustakaan digital berbasis Vue.js yang memiliki fitur manajemen buku dan tampilan katalog.</p>

<br>

## Kebutuhan Proyek
| Bagian | Deskripsi |
| --- | --- |
| Fitur | • Buat<br>• Baca<br>• Ubah<br>• Hapus |
| Kerangka kerja | • Bootstrap 5<br>• Vue.js 3 |
| Peralatan | • Visual Studio Code<br>• Node.js |
| VS Code Extensions | • Prettier<br>• Vetur |

<br>

## Unduh & Instal
1. Visual Studio Code

   <table><tr><td width="810">
      
   ```
   https://bit.ly/VScode_Installer
   ```
   
   </td></tr></table><br>
   
2. NodeJS

   <table><tr><td width="810">
      
   ```
   https://bit.ly/NodeJS_Installer
   ```
   
   </td></tr></table>
   
<br><br>

## Memulai
1. Buka ``` Terminal ```, lalu Instal Vue CLI secara global:<br>
   <table><tr><td width="810">
      
   ```bash
   npm install -g @vue/cli
   ```
   
   </td></tr></table>
   <br>
2. Buat proyek baru:<br>
   <table><tr><td width="810">
      
   ```bash
   vue create bookshelf-vue
   ```
   
   </td></tr></table>
   <br>
3. Selama setup, akan ditanya:<br>
   <table>
      <tr>
         <th width="200">Pertanyaan</th>
         <th align="center" width="350">Opsi</th>
         <th align="center" width="260">Yang dipilih</th>
      </tr>
      <tr>
         <td>? Please pick a preset:</td>
         <td align="center">> Default ([Vue 3] babel, eslint)<br>> Default ([Vue 2] babel, eslint)<br>> Manually select features</td>
         <td align="center">Default ([Vue 3] babel, eslint)</td>
      </tr>
   </table>
   <br>
4. Unduh dan ekstrak repositori ini.<br><br>
5. Salin direktori: ``` public ``` dan ``` src ```.<br><br>
6. Salin berkas: ``` BACA.md ```, ``` README.md ```, dan ``` License.txt ```.<br><br>
7. Tempel dan Timpa ke dalam direktori ``` bookshelf-vue ```.<br><br>
8. Buka ``` Terminal ``` di dalam direktori tersebut.<br><br>
9. Instal ``` bootstrap ``` untuk mengatur tampilan (layout):<br>
   <table><tr><td width="810">
      
   ```bash
   npm install bootstrap
   ```
   
   </td></tr></table>
   <br>
10. Instal ``` bootstrap-icons ``` untuk ikon:<br>
    <table><tr><td width="810">
      
    ```bash
    npm install bootstrap-icons
    ```
   
    </td></tr></table>
    <br>
11. Instal ``` vue-router ``` untuk mengatur rute halaman:<br>
    <table><tr><td width="810">
      
    ```bash
    npm install vue-router
    ```
   
    </td></tr></table>
    <br>
12. Untuk menjalankan web, ketikan perintah:<br>
    <table><tr><td width="810">
      
    ```bash
    npm run serve
    ```
   
    </td></tr></table>
    <br>
13. Buka peramban anda, lalu ketik -> ``` http://localhost:8080/ ```.<br><br>
14. Silakan akses fitur-fiturnya dan nikmatilah [Selesai].

<br><br>

## Deploy di Vercel
1. Buka platform Vercel:&nbsp;&nbsp;<strong><a href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme">Klik Disini</a></strong> &nbsp;, lalu Daftar dan Login terlebih dahulu.<br><br>
2. Izinkan Vercel untuk mengakses repositori.<br><br>
3. Upload proyek ke GitHub.<br><br>
4. Masuk ke dashboard Vercel:&nbsp;&nbsp;<strong><a href="https://vercel.com/dashboard">Klik Disini</a></strong><br><br>
5. Klik ``` Add New Project ```.<br><br>
6. Pilih repositori GitHub mana yang diinginkan.<br><br>
7. Klik ``` Deploy ```.

<br><br>

## Sorotan
<table>
<tr>
<th width="280">Beranda</th>
<th width="280">Katalog</th>
<th width="280">Pencarian</th>
</tr>
<tr>
<td><img src="documentation/Home.jpg" alt="home"></td>
<td><img src="documentation/Catalog.jpg" alt="catalog"></td>
<td><img src="documentation/Search.jpg" alt="search"></td>
</tr>
</table>
<table>
<tr>
<th width="280">Tambah Buku</th>
<th width="280">Ubah Buku</th>
<th width="280">Hapus Buku</th>
</tr>
<tr>
<td><img src="documentation/Add Book.jpg" alt="add-book"></td>
<td><img src="documentation/Edit Book.jpg" alt="edit-book"></td>
<td><img src="documentation/Delete Book.jpg" alt="delete-book"></td>
</tr>
</table>

<br><br>

## Apresiasi
Jika karya ini bermanfaat bagi anda, maka dukunglah karya ini sebagai bentuk apresiasi kepada penulis dengan mengklik tombol ``` ⭐Bintang ``` di bagian atas repositori.

<br><br>

## Penafian
Aplikasi ini merupakan hasil pengembangan dari Kursus CAMP404. Saya tidak memungkiri bahwa saya masih menggunakan layanan pihak ketiga dalam pengerjaan ini, antara lain: library, framework, dan lain sebagainya.

<br><br>

## LISENSI 
LISENSI MIT - Hak Cipta © 2022 - Devan C. M. Wijaya, S.Kom

Dengan ini diberikan izin tanpa biaya kepada siapa pun yang mendapatkan salinan perangkat lunak ini dan file dokumentasi terkait perangkat lunak untuk menggunakannya tanpa batasan, termasuk namun tidak terbatas pada hak untuk menggunakan, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau menjual salinan Perangkat Lunak ini, dan mengizinkan orang yang menerima Perangkat Lunak ini untuk dilengkapi dengan persyaratan berikut:

Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus menyertai semua salinan atau bagian penting dari Perangkat Lunak.

DALAM HAL APAPUN, PENULIS ATAU PEMEGANG HAK CIPTA DI SINI TETAP MEMILIKI HAK KEPEMILIKAN PENUH. PERANGKAT LUNAK INI DISEDIAKAN SEBAGAIMANA ADANYA, TANPA JAMINAN APAPUN, BAIK TERSURAT MAUPUN TERSIRAT, OLEH KARENA ITU JIKA TERJADI KERUSAKAN, KEHILANGAN, ATAU LAINNYA YANG TIMBUL DARI PENGGUNAAN ATAU URUSAN LAIN DALAM PERANGKAT LUNAK INI, PENULIS ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB, KARENA PENGGUNAAN PERANGKAT LUNAK INI TIDAK DIPAKSAKAN SAMA SEKALI, SEHINGGA RISIKO ADALAH MILIK ANDA SENDIRI.
