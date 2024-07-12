<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <NavbarCombination />
    <h1>Home</h1>
    <CategoryList />
  </div>
</template>

<script>
import NavbarCombination from '@/components/NavbarCombination.vue';
import CategoryList from '@/components/CategoryList.vue'; // Impor CategoryList.vue

export default {
  name: 'HomeView',
  components: {
    NavbarCombination,
    CategoryList // Daftarkan CategoryList sebagai komponen
  }
};
</script>

<style>
/* Gaya CSS untuk halaman Home */
</style>
