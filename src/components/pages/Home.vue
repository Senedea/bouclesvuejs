<template>
  <div id="homebouc">
    <h2 id="welcome">
      <p>Bienvenue sur les Saintes Boucles de 21JC</p>
      <p>
        Vous trouverez un recensement des différents sujets RP qui, lors de
        discussions HRP, reviennent en boucle !
      </p>

      <div id="onzeboucle">
        <img
          class="onzedeboucle"
          src="../../../src/assets/les_11_de_la_boucle_crimi.png"
        />
        <img
          class="onzedeboucle"
          src="../../../src/assets/les_11_de_la_boucle_civil.png"
        />
        <img
          class="onzedeboucle"
          src="../../../src/assets/les_11_de_la_boucle_police.png"
        />
        <img
          class="onzedeboucle"
          src="../../../src/assets/les_11_de_la_boucle_boucle.png"
        />
      </div>
    </h2>
    <!-- <Prediction/> -->
  </div>
</template>

<script>
// import Prediction from "./Prediction.vue"
export default {
  name: "Home",
  // components: {
  //   Prediction
  // }
};
</script>

<style>
#homebouc #welcome {
  text-align: center;
  color: white;
  font-size: 22px;
}

#homebouc p {
  padding-top: 70px;
}

.onzedeboucle {
  padding-top: 20px;
  margin: 0 5px;
  max-width: 400px;
}

#onzeboucle {
  width: 100%;
}

@media screen and (max-width: 800px) {
}
</style>
