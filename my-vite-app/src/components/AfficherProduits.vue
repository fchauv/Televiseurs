<template>
  <div class="overflow-x-auto mt-12">
    <table class="table table-zebra w-11/12 mx-6">
      <tbody>
        <tr v-for="attribut in attributStore.attributs">
          <td>{{ attribut.nom }}</td>
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
    this.attributStore.afficherAttributs('produits')
  },
  computed: {
    ...mapStores(useAttributStore),
  },
  methods: {
  },

}
</script>