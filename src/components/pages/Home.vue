<template>
  <div id="homebouc">
    <h2 id="welcome">
      <p>Bienvenue sur les Saintes Boucles de 21JC</p>
      <p>
        Vous trouverez un recensement des différents sujets RP qui, lors de
        discussions HRP, reviennent en boucle !
      </p>

   
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


@media screen and (max-width: 800px) {
}
</style>
