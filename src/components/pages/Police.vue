<template>
  <div>
    <div id="logopolice">
      <img id="logolspd" src="../../../src/assets/logo_lspd.png" alt="Mano" />
    </div>
    <div id="resumepolice">
      <li>L'hélico est-il win RP ?</li>
      <li>Fear/Mass RP ?</li>
      <li class="textebarre">Prigent en burnout</li>
      <li class="textebarre">la Mano avec un PPA = soulou merde</li>
      <li class="textebarre">Le procureur est rambo en hélico</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Police",
};
</script>

<style>
@media screen and (max-width: 1320px) {
}
#logopolice {
  align-items: center;
  max-width: 300px;
  max-height: 350px;
  margin: auto;
}

#logolspd {
  display: block;
  max-width: 300px;
}

#resumepolice {
  text-align: center;
  line-height: 60px;
  padding-top: 20px;
  font-size: 20px;
  overflow-wrap: break-word;
  color: white;
}
</style>
