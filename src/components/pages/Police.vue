<template>
  <div>
    <div id="logopolice">
      <a href="/"
        ><img id="logolspd" src="../../../src/assets/logo_lspd.png" alt="Mano"
      /></a>
    </div>
    <div id="resumepolice">
      <li>L'hélico est-il win RP ?</li>
      <li>Le procureur est rambo en hélico</li>
      <li>Fear/Mass RP ?</li>
      <li>Prigent en burnout</li>
      <li>la Mano avec un PPA = soulou merde</li>
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
  body {
    overflow-x: hidden;
  }
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
