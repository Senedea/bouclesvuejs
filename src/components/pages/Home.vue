<template>
  <div id="homebouc">
    <h2 id="welcome">
      <p>Bienvenue sur les Saintes Boucles de 21JC</p>
      <p>
        Vous trouverez un recensement des différents sujets RP qui, lors de
        discussions HRP, reviennent en boucle !
      </p>

      <img
        id="onzedeboucle"
        src="../../../src/assets/les_11_de_la_boucle_V2.png"
      />
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
#onzedeboucle {
  padding-top: 20px;
  max-width: 1400px;
}

#homebouc #welcome {
  text-align: center;
  color: white;
  font-size: 22px;
}

#homebouc p {
  padding-top: 70px;
}

.marieresume {
  width: 500px;
  height: 500px;
}

@media screen and (max-width: 800px) {
}
</style>
