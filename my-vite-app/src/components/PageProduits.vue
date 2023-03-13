<template>
  <EntreeProduit></EntreeProduit>
  <AfficherProduits></AfficherProduits>
</template>

<script>
import EntreeProduit from './EntreeProduit.vue';
import AfficherProduits from './AfficherProduits.vue';
export default {
  name: "App",

  components: {
    EntreeProduit,
    AfficherProduits,
  },
}
</script>