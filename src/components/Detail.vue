<template>
  <div id="detail" v-if="movie">
    <movie-item :movie="movie">
      <div class="movie-details">
        <p class="movie-genre">{{ movie.Genre }}</p>
        <p class="movie-plot">{{ movie.Plot }}</p>
        <table>
            <tr><td>Release date: {{ movie.Released }}</td></tr>
            <tr><td>Running time: {{ movie.Runtime }}</td></tr>
            <tr><td>Director: {{ movie.Director }}</td></tr>
            <tr><td>Cast: {{ movie.Actors }}</td></tr>
        </table>
      </div>
    </movie-item>
    <div class="home">
      <router-link :to="{ name: 'home' }"></router-link>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  props: ['movies'],
  components: {
    MovieItem,
  },
  computed: {
    movie() {
      const foundMovie = this.movies.find(movie => movie.id === this.$route.params.id);
      return foundMovie ? foundMovie.movie : null;
    },
  },
  created() {
    console.log(this.$route.params.id);
  },
};

</script>
