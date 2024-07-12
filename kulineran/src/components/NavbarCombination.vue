<!-- src/components/NavbarCombination.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Food App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="item in navItems" :key="item.name">
            <router-link class="nav-link" :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Home', link: '/' },
        { name: 'Categories', link: '/categories' },
        // Tambahkan item menu lain sesuai kebutuhan
      ]
    };
  }
};
</script>

<style scoped>
/* Gaya CSS untuk navbar */
</style>
