<template>
  <div>
    <NavbarCombination /> <!-- Gunakan NavbarCombination di sini -->
    <h1 class="category-title">{{ categoryName }}</h1> <!-- Tambahkan judul dinamis -->
    <div class="meals">
      <router-link v-for="meal in meals" :key="meal.idMeal" :to="'/meal/' + meal.idMeal" class="meal-card">
        <div class="image-container">
          <img :src="meal.strMealThumb" :alt="meal.strMeal">
          <h3>{{ meal.strMeal }}</h3>
        </div>
      </router-link>
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
  name: 'CategoryDetail',
  data() {
    return {
      meals: [],
      categoryName: '' // Menambahkan categoryName sebagai data
    };
  },
  created() {
    const categoryName = this.$route.params.categoryName;
    this.categoryName = categoryName; // Set judul berdasarkan categoryName
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then(response => {
        this.meals = response.data.meals;
      });
  }
};
</script>

<style>
.category-title {
  text-align: center; /* Pusatkan judul */
  margin-top: 20px; /* Jarak dari atas */
  font-size: 2rem; /* Ukuran font judul */
}

.meals {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 kolom */
  grid-gap: 16px; /* Jarak antar item grid */
  padding: 16px; /* Padding untuk jarak yang seimbang di semua sisi */
  max-width: 1200px; /* Batas lebar maksimum grid */
  margin: auto; /* Pusatkan grid secara horizontal */
}

.meal-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden; /* Mengatasi masalah overlay teks */
  position: relative;
}

.meal-card img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  transition: transform 0.2s, filter 0.5s ease; /* Tambahkan transisi untuk transformasi dan filter */
}

.meal-card .image-container {
  position: relative;
}

.meal-card .image-container:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Warna gelapkan */
  opacity: 0; /* Sembunyikan secara default */
  transition: opacity 0.5s ease; /* Efek transisi opacity */
}

.meal-card:hover .image-container:before {
  opacity: 1; /* Tampilkan saat hover */
}

.meal-card h3 {
  font-size: 1.25rem;
  margin: 0;
  color: white; /* Warna teks */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 16px; /* Padding untuk teks */
  border-radius: 4px; /* Sudut bulat untuk teks */
  text-align: center; /* Teks berada di tengah */
  z-index: 1; /* Pastikan teks berada di atas overlay */
}
</style>
