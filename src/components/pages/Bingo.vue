<template>
  <div>
    <p class="bingop">
      Cliquez sur les cases si un event de ton bingo se passe !
    </p>
    <button id="bingobutton" @click="shuffletemp">
      Nouvelle Grille
    </button>

    <div id="bingo">
      <table>
        <tr :key="index1" v-for="(item1, index1) in 4">
          <td
            class="noselect"
            @click="toggleactive($event)"
            :key="index2"
            v-for="(item2, index2) in tablotemp.slice(
              index1 * 4,
              4 * (index1 + 1)
            )"
          >
            {{ item2 }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bingo",
  data() {
    return {
      tablotemp: [],
      tablo: [
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
    shuffle: function(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }

      return a;
    },
    shuffletemp: function() {
      // document.querySelectorAll("td").classList.remove("active")
      this.$el.querySelectorAll("td").forEach(function(e){
        e.classList.remove("active")
      })
      
      
      
      this.tablotemp = this.shuffle(this.tablo).slice(0, 16);
    },
    toggleactive: function(e) {
      e.currentTarget.classList.toggle("active");
    },
  },
  mounted() {
    this.shuffletemp();
  },
};
</script>

<style>
#bingo > table tr td {
  height: 150px;
  width: 180px;
  background-color: white;
  color: black;
  font-weight: bold;
  text-align: center;
}

#bingo > table tr td.active {
  background-color: green;
}

#bingo {
  display: flex;
  justify-content: center;
}
#bingobutton {
  margin: 30px auto;
  display: block;
}

.bingop {
  text-align: center;
  color: red;
  padding-top: 30px;
  font-size: 30px;
}

@media screen and (max-width: 800px) {
  #bingo > table tr td {
    height: 150px;
    width: 180px;
    background-color: white;
    color: black;
    font-weight: bold;
    text-align: center;
  }

}
</style>
