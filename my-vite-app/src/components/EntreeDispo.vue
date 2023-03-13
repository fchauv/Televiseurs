<template>
  <div class="grid grid-cols-5 gap-10 w-auto mx-4 mt-8">
    <div class="h-10 flex-row space-y-0">
      <h4 for="legume" class="lbl align-bottom">Légume correspondant:</h4>
      <select v-model="attributStore.calibreEntre.legume" class="w-full text-gray-900 bg-gray-200 rounded-md shadow-sm focus:bg-gray-300 mt-0 pr-4">
        <option v-for="produit in attributStore.lesProduits" :value=produit>{{ produit }}</option>
      </select>
    </div>
    <div class="mr-4 h-10 flex-row space-y-0">
      <h4 for="legume" class="lbl">Nom du calibre:</h4>
      <input type="text" v-model="attributStore.calibreEntre.nom" class="ipt">
    </div>
    <div class="mr-4 h-10 flex-row space-y-0">
      <h4 for="legume" class="lbl">Limite basse du calibre:</h4>
      <input type="text" class="ipt">
    </div>
    <div class="mr-4 h-10 flex-row space-y-0">
      <h4 for="legume" class="lbl">Limite haute du calibre:</h4>
      <input type="text" class="ipt">
    </div>
    <div class="pt-12 mt-1">
      <button @click="attributStore.ajouterCalibre()" class="btn w-full">ajouter</button>
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
    this.attributStore.afficherDispos()
  },
  computed: {
    ...mapStores(useAttributStore),
  },
  methods: {
  },

}
</script>