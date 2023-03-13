<template>
  <div class="overflow-x-auto mt-12">
    <table class="table w-11/12 mx-6">
      <tbody>
        <tr v-for="dispo in attributStore.lesDispos">
          <td>{{ dispo.produit }}</td>
          <td>{{ dispo.calibre }}</td>
          <td>{{ dispo.quantite }}</td>
          <td>{{ dispo.unite }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useAttributStore } from '../store/attributStore.js';
import { mapStores } from 'pinia';

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.attributStore.afficherDispos()
  },
  computed: {
    ...mapStores(useAttributStore),
  },
  methods: {
  },

}
</script>