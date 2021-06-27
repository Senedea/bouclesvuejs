<template>
  <div>
    <div id="logovagos">
      <a href="/"
        ><img id="vagos" src="../../../src/assets/vag.png" alt="Vagos"
      /></a>
    </div>

    <div id="resumevagos">
      <li>Qu'est ce qui est jaune et qui attend ?</li>
      <li>Les vagos ne bossent pas</li>
      <li class="textebarre">La G36 va-t-elle être sorti ?</li>
      <li>Vagos torse nu</li>
      <li>Lakra roule sur tout avec son 6x6</li>
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
  body {
    overflow-x: hidden;
  }
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
