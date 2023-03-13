<template>
  <LeMenu></LeMenu>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
import LeMenu from './components/LeMenu.vue';
import { viewDepthKey } from 'vue-router';

export default {
  name: "App",

  components: {

  },
}
</script>