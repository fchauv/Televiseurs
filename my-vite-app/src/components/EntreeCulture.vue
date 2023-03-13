<template>
  <div class="grid grid-cols-3 gap-10 w-auto mr-16 mt-2">
    <div class="pt-14 mx-0 text-right text-xl">
      <h4 for="legume" class="lbl">Mode de culture:</h4>
    </div>
    <div class="pt-10 mx-0">
      <input type="text" v-model="attributStore.attributEntre.nom" class="ipt">
    </div>
    <div class="pt-12 mt-1 ml-4">
      <button @click="attributStore.ajouterAttribut('culture')" class="btn w-full">ajouter</button>
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
    this.attributStore.afficherAttributs('culture')
  },
  computed: {
    ...mapStores(useAttributStore),
  },
  methods: {
  },

}
</script>