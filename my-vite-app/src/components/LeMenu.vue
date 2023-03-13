<template>
<div class="dropdown dropdown-hover dropdown-right">
  <label tabindex="0" class="btn m-1">Click</label>
  <ul tabindex="0" class="dropdown-content bg-gray-900 menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><router-link to="/produits" class="no-underline">Produits</router-link></li>
    <li><router-link to="/calibres" class="no-underline">Calibres</router-link></li>
    <li><router-link to="/origines" class="no-underline">Origines</router-link></li>
    <li><router-link to="/cultures" class="no-underline">Cultures</router-link></li>
    <li><router-link to="/dispos" class="no-underline">Dispos</router-link></li>
    <li><router-link to="/ventes" class="no-underline">Ventes</router-link></li>
  </ul>
</div>
</template>
