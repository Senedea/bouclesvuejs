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
        "La Mano aura le biz d'armes",
        "Ice-T oublie une info importante",
        "Ice-T numéro 3?",
        "Larry fait de la merde",
        "Champ spotted?",
        "Mike n°2 intérimaire?",
        "Lenny 'AH!'",
        "Gros silence Mano",
        "Pablo dis merci (cartel exclu)",
        "La Mano ennemi public n°1",
        "'Les mots ont leur importance'",
        "Pablo met la musique d'ascenseur",
        "Pablo veux manger quelqu'un",
        "Pablo met un coup de pression",
        "6x6 ? c'est Lakra",
        "KKangpae font du team-building",
        "Comprend pas KKangpae quand ils parlent",
        "Parnas et les potins",
        "Benny's oublie une custom",
        "Ah wéé / c'est carré",
        "Pain pleurniche",
        "9 3/4",
        "Bisous !",
        "Cé pa disnay",
        "Yé té tou",
        "Plus c'est gros, plus ça passe",
        "Tortue au champs",
        "Tortue LSPD/BCSO",
        "Blague sur Smoke",
        "Blague sur Charlie",
        "Achat nouveau véhicule",
        "Les Ballas font de la merde",
        "Démineur au champ ou à la transfo",
        "Réf à la Boucle en RP",
        "Ice-T centre d'appel",
        "Doc Lobby vol de drogue",
        "La Mano fait du team-building",
        "Manque de fear/pain RP",
        "Miguel parle de choisir un poulain à un autre groupe",
        "Pas d'intéraction = Pas RP",
        "Qque chose ou qqun en Blanc/Noir = Mano",
        "Bordel au retour de Miguel",
        "Miguel fait du gringue",
        "Miguel oublie de faire un truc qu'il avait prévu",
        "Milo vole un truc",
        "Milo parapluie au dessus du boss",
        "Pablo a pas confiance en Ice-T",
        "Pablo point faible : trop fort",
        "Tentative de retrait PPA de Pablo",
        "Pablo veut buter les LOST",
        "Visite de courtoisie au quartier",
        "Crimi ouin-ouin au gouvernement",
        "Teller négocie réduction d'amende/peine",
        "C'est la merde chez les LOST",
        "Un LOST se fracasse en moto",
        "Un LOST en fédé",
        "Smoke partie en fumée / à pris l'eau",
        "Retour de la G36",
        "Les Vagos bossent pas",
        "Combien sont les Vagos?",
        "'Yong, G comme Gérard, Jae, J comme Jurisprudence'",
        "C'est Kim ou c'est Yong ?",
        "KKangpae partie de foot",
        "Largo tacle le BCSO",
        "Nico petit clodo parti trop tôt",
        "Nico laisse un message Meta",
        "La brasserie/Layna dans la sauce",
        "Faut se débarasser des Streiter",
        "Asso Peace Green valide ?",
        "Les Verts braquent G6 ?",
        "From Ballas to Bollos",
        "From Bollos to Ballas",
        "Ballas crise existentielle (quartier / crimi)",
        "FightClub piscine des Verts",
        "Vespucci bourrés",
        "Destruction derby chez Vespucci",
        "Course de rue improvisée",
        "Police 'SVP On s'arrête'",
        "Descente SWAT/GIBS",
        "Un problème ? 'C'est la Mano, c'est une intuition'",
        "Pripri il est trop fort",
        "Mader 'Encore un mec en sanchez'",
        "Prigent en burnout",
        "Prigent activité civile interrompue",
        "Mader dans la sauce(Mader)",
        "Avion ou hélico écrasé au sol",
        "LSPD : Canibal en ville",
        "BCSO : le BCP, le BPS, le BCD, la police du nord",
        "Plan foireux : raté",
        "Plan foireux : réussi",
        "Miguel énervé 'Appelez le SWAT !'",
        "Vendre les Kuruma",
        "Random HRP en jeu",
        "ClaymD parle d'animaux",
        "C'est ça le Serious RP ?",
        "MAJ ? Crimi 2.0 qui arrive",
        "Message anonyme chez Prigent",
        "HRP discord : Honey whitelisted ?",
        "HRP discord : Honey a-t-elle mangé?",
        "HRP discord : Freki -> LIVRAISON !!",
        "HRP discord : Marie rejoins la boucle (ou pas)",
        "HRP Alexclick : la GOXLR c'est génial",
        "Nutzy : oublie de prendre le numéro de tél",
        "Nutzy : 'j'en ai plein de cul'",
        "Nutzy : 'qu'est ce que je fous là'",
        "Dona dona (hors alerte/pts de chaine twitch)",
        "RP poteau",
        "Bavure policière",
        "Une autre personne conduit la Shafter de Prigent",
        "Miguel interprète les choses",
        "LSPD dans le quartier KKangpae",
        // fin update 28/06/21
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
      this.$el.querySelectorAll("td").forEach(function(e) {
        e.classList.remove("active");
      });

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
