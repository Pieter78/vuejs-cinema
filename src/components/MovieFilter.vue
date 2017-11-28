<template>
    <div id="movie-filter">
        <h2>Filter results</h2>
        <h3>By time of day</h3>
        <div class="filter-group">
          <check-filter :title="time" category="time" v-for="time in times"></check-filter>
        </div>
        <h2>Filter results</h2>
        <h3>By genre</h3>
        <div class="filter-group">
          <check-filter :title="genre" category="genre" v-for="genre in genres"></check-filter>
        </div>
      </div>
</template>

<script>
import CheckFilter from './CheckFilter.vue';

import genres from '../util/genres';
import times from '../util/times';

export default {
  data() {
    return {
      genres,
      times,
    };
  },
  components: {
    CheckFilter,
  },
};
</script>
