<template>
  <div>
    <div id="logoserv">
      <a href="/"
        ><img class="servlogo" src="../../../src/assets/logo21.png" alt="Serv"
      /></a>
    </div>
    <div id="resumeserver">
      <li>Top-Achat & Instagram</li>
      <li>NO ZOB IN JOB</li>
      <li>Parnas et les potins</li>
      <li>Les modos du discord in the boucle</li>
      <li>Coma cause oubli manger/boire</li>
      <li>C'est oune bonne sitouation *insert métier* ?</li>
      <li>C'est ça le serious RP</li>
      <li>Balass en mode DD</li>
      <li>Les modos du discord parlent d'une certaine "mouette-taupe"</li>
      <li>"Le" ou "La" LSPD ?</li>
      <li>Des 9 3/4</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeServ",
};
</script>

<style>
@media screen and (max-width: 1320px) {
  body {
    overflow-x: hidden;
  }
}
#resumeserver {
  text-align: center;
  line-height: 60px;
  padding-top: 20px;
  font-size: 20px;
  overflow-wrap: break-word;
  color: white;
}

#logoserv {
  align-items: center;
  max-width: 660px;
  margin: auto;
}

.servlogo {
  max-width: 500px;
  margin: 0 auto 0 95px;
}
</style>
