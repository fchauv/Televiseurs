<template>
  <EntreeOrigine></EntreeOrigine>
  <AfficherOrigines></AfficherOrigines>
</template>

<script>
import EntreeOrigine from './EntreeOrigine.vue';
import AfficherOrigines from './AfficherOrigines.vue';
export default {
  name: "App",

  components: {
    EntreeOrigine,
    AfficherOrigines,
  },
}
</script>