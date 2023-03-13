import { createApp } from 'vue';
import { createPinia } from "pinia";

import { createRouter, createWebHashHistory } from "vue-router";


import App from './App.vue';
import "~/styles/tailwind.css";
import "~/styles/main.css";
import PageProduits from './components/PageProduits.vue';
import PageCalibres from './components/PageCalibres.vue';
import PageOrigines from './components/PageOrigines.vue';
import PageCultures from './components/PageCultures.vue';
import PageDispos from './components/PageDispos.vue';
import PageVentes from './components/PageVentes.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: PageDispos },
    { path: '/produits', component: PageProduits },
    { path: '/calibres', component: PageCalibres },
    { path: '/origines', component: PageOrigines },
    { path: '/cultures', component: PageCultures },
    { path: '/dispos', component: PageDispos },
    { path: '/ventes', component: PageVentes }
  ]
});

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');
