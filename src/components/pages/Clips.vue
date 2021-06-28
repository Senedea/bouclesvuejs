<template>
  <div>
    <h1 id="gourou">
      Clips d'officialisation du FC Boucle par le Grand Boucleur
    </h1>
    <iframe
      id="clip"
      src="https://clips.twitch.tv/embed?clip=RichKindMagpiePMSTwin-ZuFqF-VNr8RhImZU&parent=lessaintesboucles.fr"
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
    ></iframe>
    <iframe
      id="clip"
      src="https://clips.twitch.tv/embed?clip=SuccessfulTangibleWheelBleedPurple-ImLeQdJOZ410HP9b&parent=lessaintesboucles.fr"
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Clips",
};
</script>

<style>
@media screen and (max-width: 1320px) {
}
h1#gourou {
  text-align: center;
  padding-top: 50px;
  color: white;
}

#clip {
  max-width: 400px;
  width: 100vw;
  height: 100vh;
  max-height: 400px;
  display: block;
  margin: 0 auto;
  padding-top: 10px;
}
</style>
