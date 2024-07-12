<template>
  <div>
    <NavbarCombination /> <!-- Include the Navbar here -->
    
    <div v-if="meal" class="meal-detail">
      <h1>{{ meal.strMeal }}</h1>
      <div class="meal-image">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-img">
      </div>
      <div class="meal-content">
        <div class="instructions">
          <h3>Instruksi:</h3>
          <p>{{ meal.strInstructions }}</p>
        </div>
        <div class="recipe">
          <h3>Resep:</h3>
          <ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
          </ul>
        </div>
        <div class="tutorial-label">
          <h1>Tutorial</h1>
        </div>
      </div>
      <div class="video">
        <iframe v-if="meal.strYoutube" :src="`https://www.youtube.com/embed/${getVideoId()}`" frameborder="0"></iframe>
        <p v-else>Tidak ada video resep yang tersedia.</p>
      </div>
    </div>
    <div v-else>
      Loading... <!-- Optionally show a loading state -->
    </div>
  </div>
</template>

<script>
import NavbarCombination from '@/components/NavbarCombination.vue'; // Import the Navbar component
import axios from 'axios';

export default {
  components: {
    NavbarCombination // Register the Navbar component
  },
  data() {
    return {
      meal: null,
      ingredients: []
    };
  },
  created() {
    const mealId = this.$route.params.mealId;
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => {
        this.meal = response.data.meals[0];
        this.ingredients = this.getIngredients();
      })
      .catch(error => {
        console.error('Error fetching meal details:', error);
      });
  },
  methods: {
    getIngredients() {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = this.meal[`strIngredient${i}`];
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      return ingredients;
    },
    getVideoId() {
      if (this.meal && this.meal.strYoutube) {
        const videoUrl = this.meal.strYoutube;
        const videoId = videoUrl.split('v=')[1];
        return videoId;
      }
      return ''; // Return empty string if no video URL available
    }
  }
};
</script>

<style scoped>
.meal-detail {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

.meal-image {
  flex: 1 0 100%;
  position: relative;
}

.meal-img {
  width: 100%;
  max-width: 400px; /* Set maksimum lebar gambar */
  height: auto;
  border-radius: 8px;
}

.meal-content {
  flex: 1 0 100%;
  margin-top: 20px;
}

.instructions h3,
.recipe h3 {
  margin-bottom: 8px;
}

.tutorial-label {
  margin-top: 20px;
}

.video {
  flex: 1 0 100%;
  margin-top: 20px;
}

.video iframe {
  width: 100%;
  height: 500px;
}
</style>
