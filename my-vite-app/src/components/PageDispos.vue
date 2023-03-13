<template>
  <EntreeDispo></EntreeDispo>
  <AfficherDispos></AfficherDispos>
</template>

<script>
import EntreeDispo from './EntreeDispo.vue';
import AfficherDispos from './AfficherDispos.vue';
export default {
  name: "App",

  components: {
    EntreeDispo,
    AfficherDispos,
  },
}
</script>