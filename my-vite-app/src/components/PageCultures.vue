<template>
  <EntreeCulture></EntreeCulture>
  <AfficherCulture></AfficherCulture>
</template>

<script>
import EntreeCulture from './EntreeCulture.vue';
import AfficherCulture from './AfficherCulture.vue';
export default {
  name: "App",

  components: {
    EntreeCulture,
    AfficherCulture,
  },
}
</script>