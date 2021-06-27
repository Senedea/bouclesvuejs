<template>
  <div>
    <div id="blocprediction">
      <div id="predict">
        {{ textpredic }}
      </div>

      <div id="blocbouton">
        <button id="boutonpredict" @click="boutonpred" :disabled="btndisabled">
          Clique
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prediction",
  data() {
    return {
      btndisabled: false,
      textpredic:
        "Clique sur le bouton pour faire une prédiction d'un sujet de boucle",
      predictions: [
        "La Mano a le biz d'armes",
        "Ice-T & les pansements nounours",
        "Ice-T le forceur",
        "Ice-T parle de mariage",
        "Lenny : Blague validée",
        "Lenny : AH!",
        "champ spotted?",
        "Miguel fait du gringe",
        "Miguel oubli de faire qque chose au bout de 5min",
        "Milo : voiture cassée",
        "Pablo coup de pression",
        "Pablo dit merci (cartel exlu)",
        "Personnage X serait une plus-value pour la Mano",
        "Visite de courtoisie chez la Mano",
        "Lenny : bras droit ?",
        "La Mano croise les Lost sur leur champs",
        "C'est la merde chez les Lost",
        "Un Lost se fracasse en moto",
        "Blague sur Smoke",
        "Blague sur Charlie",
        "LittleSeoul en mode YOLO",
        "Personne comprend ce que LS disent",
        "Parnas & les potins",
        "Largo gouverneur",
        "Nico : petit clodo partit trop tôt",
        "Layna est passée sous le bureau",
        "Benny's : oubli d'une custom",
        "Paragon R : sujet de jalousie",
        "Dodo : plan de merde",
        "Dodo : enfaite c'est bien",
        "Kuruma pour LS",
        "Faut virer les streiter",
        "Craquage non prévu pour un new véhicule",
        "Ah wéééé / c'est carré",
        "Un Ballas fait de la merde",
        "SVP ON S'ARRÊTE (police)",
        "Descente SWAT/GIBS",
        "Leah au LSPD",
        "Un problème ? c'est la Mano (police)",
        "Pripri trop fort",
        "C pas disnay",
        "Yé té tou!",
        "PPA, le retour",
        "Bisous!",
        "9 3/4",
        "La MethMut, elle assure",
        "Plus c'est gros, plus ça passe",
        "Plan foireux : raté",
        "Plan foireux : réussite",
        "Tortues au champs",
        "Où est Charlie ?",
        "Où sont les fusils à pompe?",
        "Démineur au champ ou à la transfo",
        "Random HRP chez la Mano",
        "Réf à la Boucle en RP",
        "ClaymD parle d'animaux",
        "Cé ça le sérious RP ?",
        "une MAJ ? crimi 2.0 !",
        "Doc Lobby vol de la drogue",
        "Le chat : Haylie a quitter le serv ?",
        "Le chat : Où sont Julian & Noah ?",
        "Prédiction de Clipper se réalise",
        "Milo vole un truc",
        "Pablo : point faible -> trop fort",
        "Pablo = ennemi public n°1",
        "Mec/voiture en noir ou blanc = c'est la Mano !!",
        "Mano : pas d'intéraction = pas RP",
        "Larry fait de la merde",
        "Mano : gros silence",
        "Ice-T au tél quasi h24",
        "Les Ballas sans couleur sur la map",
        "From Ballass to Bolloss",
        "From Bolloss to Ballass",
        "Prigent en burnout",
        "Rencard de Prigent interrompu",
        "LSPD : Mano peut acheter des armes = soulou merde",
      ],
    };
  },
  methods: {
    boutonpred: function() {
      this.btndisabled = true;
      this.i = setInterval(() => {
        const randomise = Math.floor(
          Math.random() * (this.predictions.length - 1)
        );
        this.textpredic = this.predictions[randomise];
      }, 100);
      setTimeout(() => {
        clearInterval(this.i);
        this.btndisabled = false;
      }, 2500);
    },
  },
};
</script>

<style>
@media screen and (max-width: 1320px) {
  
}
#blocprediction {
  width: 100%;
  min-width: 70px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 100px;
}

#predict {
  font-size: 35px;
  text-align: center;
  width: 100%;
  height: 180px;
  background-color: rgb(39, 104, 104);
  padding-top: 50px;
  border: 5px solid red;
  font-weight: bold;
}

#blocbouton {
  text-align: center;
}

#boutonpredict {
  width: 200px;
  height: 50px;
  border: 5px solid rgb(188, 192, 200);
  font-size: 25px;
  margin-top: 10px;
  background-color: rgb(216, 49, 8);
}
@media screen and (max-width: 800px) {
  #predict {
    font-size: 25px;
  }
}
</style>
