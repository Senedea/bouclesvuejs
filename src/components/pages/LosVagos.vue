<template>
  <div>
    <div id="logovagos">
      <img id="vagos" src="../../../src/assets/vag.png" alt="Vagos" />
    </div>

    <div id="resumevagos">
      <li>Smoke partie en fumée / Smoke a pris l'eau</li>
      <li>Les vagos ne bossent pas</li>
      <li>Vagos torse nu</li>
      <li>Un 6x6 ? C'est Lakra</li>
      <li>Sortie de la G36</li>
      <li>Les vagos sont combien ?</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "LosVagos",
};
</script>

<style>
@media screen and (max-width: 1320px) {
}
#logovagos {
  align-items: center;
  max-width: 300px;
  max-height: 350px;
  margin: auto;
}

#vagos {
  display: block;
  max-width: 300px;
}

#resumevagos {
  text-align: center;
  line-height: 60px;
  padding-top: 20px;
  font-size: 20px;
  overflow-wrap: break-word;
  color: white;
}
</style>
