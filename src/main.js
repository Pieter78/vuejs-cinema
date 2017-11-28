import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import moment from 'moment-timezone';

import './style.scss';

import Tooltip from './util/tooltip';
import { checkFilter, setDay } from './util/bus';
import routes from './util/routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Tooltip);

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment; } });

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus; } });

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
    day: moment(),
    moment,
    bus,
  },
  created() {
    this.$http.get('/api').then((response) => {
      this.movies = response.data;
    });
    this.$bus.$on('check-filter', checkFilter.bind(this));
    this.$bus.$on('set-day', setDay.bind(this));
  },
  router,
});

