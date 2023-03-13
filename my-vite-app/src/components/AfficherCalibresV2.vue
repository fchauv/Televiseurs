<template>
  <div class="overflow-x-auto mt-12">
    <table class="table w-11/12 mx-6">
      
      <!-- en-tête -->
      <thead>
        <tr class="text-center">
          <th class="w-50">Légume</th>
          <th>Nom</th>
          <th class="w-40">sous-calibre</th>
        </tr>
      </thead>
      <!-- liste -->
      <tbody>
        <tr v-for="calibre in attributStore.lesCalibres" class="">
          <td>{{ calibre.legume }}</td>
          <td>{{ calibre.nom }}</td>
          <td>{{ calibre[0] }}</td>
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
    this.attributStore.afficherCalibres()
  },
  computed: {
    ...mapStores(useAttributStore),
  },
  methods: {
  },

}
</script>