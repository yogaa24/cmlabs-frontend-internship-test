<template>
  <div>
    <NavbarCombination /> <!-- Gunakan NavbarCombination di sini -->
    <div class="categories-container">
      <h1 class="page-title">See All The Delicious Foods</h1> <!-- Tambahkan judul di sini -->
      <div class="categories">
        <router-link v-for="category in categories" :key="category.idCategory" :to="'/category/' + category.strCategory" class="category-card">
          <div class="image-container">
            <img :src="category.strCategoryThumb" :alt="category.strCategory">
            <div class="overlay"></div>
            <h3>{{ category.strCategory }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavbarCombination from '@/components/NavbarCombination.vue'; // Import navbar component

export default {
  components: {
    NavbarCombination // Daftarkan NavbarCombination sebagai komponen
  },
  name: 'CategoryList',
  data() {
    return {
      categories: []
    };
  },
  created() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        this.categories = response.data.categories;
      });
  }
};
</script>

<style>
.categories-container {
  max-width: 900px; /* Lebar maksimum untuk kontainer */
  margin: auto; /* Pusatkan kontainer secara horizontal */
  text-align: center; /* Pusatkan teks judul */
}

.page-title {
  margin-top: 20px; /* Jarak dari atas */
  font-size: 2rem; /* Ukuran font judul */
}

.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 kolom */
  grid-gap: 16px; /* Jarak antar item grid */
  padding: 16px; /* Padding untuk jarak yang seimbang di semua sisi */
  margin-top: 20px; /* Jarak dari judul */
}

.category-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;
  position: relative;
  max-width: 200px; /* Batas lebar maksimum untuk setiap kartu */
  margin: auto; /* Pusatkan kartu secara horizontal */
}

.category-card:hover {
  transform: scale(1.05);
}

.image-container {
  position: relative;
}

.category-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Sesuaikan opasitas jika diperlukan */
  border-radius: 8px;
}

.category-card h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.25rem;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Opsional: untuk membuat teks lebih mudah dibaca */
  padding: 5px 10px; /* Opsional: untuk membuat teks lebih mudah dibaca */
  border-radius: 4px; /* Opsional: untuk membuat teks lebih mudah dibaca */
}
</style>
