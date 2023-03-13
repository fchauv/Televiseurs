<template>
  <EntreeCalibre></EntreeCalibre>
  <AfficherCalibres></AfficherCalibres>
</template>

<script>
import EntreeCalibre from './EntreeCalibre.vue';
import AfficherCalibres from './AfficherCalibres.vue';
export default {
  name: "App",

  components: {
    EntreeCalibre,
    AfficherCalibres,
  },
}
</script>