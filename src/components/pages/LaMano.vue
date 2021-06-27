<template>
  <div>
    <div id="manologo">
      <img
        class="logomano"
        src="../../../src/assets/logomano.jpeg"
        alt="Mano"
      />
    </div>
    <div id="resumemano">
      <li>Pablo met des coups de pression</li>
      <li>Ice-T envoie des emojis dans tous ses messages</li>
      <li class="textebarre">Haylie pas vraiment la #2 Mano</li>
      <li class="textebarre">Tic & Tac prennent pas le job au sérieux</li>
      <li>La meth c'est temporaire, la Mano aura les armes</li>
      <li>Paine pleurniche</li>
      <li>Guigui c'est un gamin</li>
      <li class="textebarre">Champ de meth spotted ou pas ?</li>
      <li>Concours de blagues à la transfo meth</li>
      <li>Miguel tente de négocier son PPA par tous les moyens</li>
      <li>Guigui le charo</li>
      <li>Lenny & Tim, les nouveaux Tic & Tac ?</li>
      <li class="textebarre">Haylie enceinte ?</li>
      <li>Quand Alex joue MJ Peterson, Miguel est-il donc mort ?</li>
      <li>Faire du biz (et + si affinité) avec Layna Jones</li>
      <li class="textebarre">Mike pleurniche</li>
      <li class="textebarre">Lenny parle à Charlie dans sa tête</li>
      <li>Tortue en allant au champ ?</li>
      <li>Oublie de s'enregistrer sur la pointeuse de la compta</li>
      <li>🐻 Ice-T et les pansements nounours 🐻</li>
      <li>Larry fait de la merde</li>
      <li>Gros silence</li>
      <li>Pas d'intéraction = C pa RP</li>
      <li>Pablo ennemi public n°1</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaMano",
};
</script>

<style>
@media screen and (max-width: 1320px) {

}
.textebarre {
  text-decoration: line-through;
}

#resumemano {
  text-align: center;
  line-height: 60px;
  padding-top: 20px;
  font-size: 20px;
  overflow-wrap: break-word;
  color: white;
}

#manologo {
  text-align: center;
}
.logomano {
  width: 100%;
  max-width: 550px;
}
</style>
