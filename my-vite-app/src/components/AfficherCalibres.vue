<template>
  <div class="outline outline-black m-10">
    <div class="grid grid-cols-4 text-gray-900 bg-gray-200 px-6 py-2">
      <div class="col-span-2">Calibre:</div>
      <div class="text-right">Limite basse:</div>
      <div class="text-right">Limite haute:</div>
    </div>
    <div v-for="calibre in attributStore.lesCalibres" class="grid grid-cols-4 text-gray-900 bg-white px-6 py-2">
      <div class="col-span-2">{{ calibre.nom }}</div>
      <div class="text-right">{{ calibre.legume }}</div>
      <div class="text-right">{{ calibre[0] }}</div>
    </div>
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