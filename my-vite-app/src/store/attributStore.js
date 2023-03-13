import { defineStore } from 'pinia'
import axios from 'axios'


export const useAttributStore = defineStore('attribut', {
	state: () => ({
    calibreEntre: {
      legume: '',
      nom: '',
      detail: false
    },
    attributEntre: {
      attribue: '',
      nom: ''
    },
    attribut: '',
    attributs: [],
    calibres: [],
    dispos: [],
	}),
  getters: {
    lesCalibres() {
      return this.calibres
    },
    lesAttributs() {
      return this.attributs
    },
    nouveauCalibre() {
      return this.calibreEntre
    },
    lesDispos() {
      return this.dispos
    },
  },
	actions: {
    afficherAttributs(attribut) {
      axios
      .post("http://localhost/legumes/afficherAttributs.php", attribut)
      .then(({data}) => {
        this.attributs = data;
        //console.log(this.lesAttributs);
      });
    },
    ajouterAttribut(attribut) {
      this.attributEntre.attribue = attribut;
      //console.log(attribut);
      axios
      .post("http://localhost/legumes/ajouterAttribut.php", JSON.stringify(this.attributEntre))
      .then(({data}) => { console.log(data)        
      });
      this.attributEntre.nom = '';
      setTimeout(function(){
        this.afficherAttributs(attribut);
    }, 1000); 
    },
    afficherCalibres() {
      axios
      .post("http://localhost/legumes/afficherCalibres.php")
      .then(({data}) => {
        this.calibres = data;
        console.log(this.lesCalibres);
      });
    },
    ajouterCalibre() {
      console.log("Toto")
      axios
      .post("http://localhost/legumes/ajouterCalibre.php", JSON.stringify(this.calibreEntre))
      .then(({data}) => { console.log(data)        
      });
      this.calibreEntre.nom = '';
      this.calibreEntre.legume = '';
    },
    afficherDispos() {
      axios
      .post("http://localhost/legumes/afficherDispos.php")
      .then(({data}) => {
        this.dispos = data;
        console.log(this.lesDispos);
      });
    },
    ajouterDispo() {
      console.log("Toto")
      axios
      .post("http://localhost/legumes/ajouterDispo.php", JSON.stringify(this.calibreEntre))
      .then(({data}) => { console.log(data)        
      });
    },
	},
})

