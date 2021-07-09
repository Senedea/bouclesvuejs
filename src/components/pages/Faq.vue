<template>
  <div id="faqbouc">
    <div id="logo">
      <img
        id="bouclelogo"
        src="../../../src/assets/FC-Boucle-2.png"
        alt="Boucle"
      />
    </div>
   <img
        id="onzedeboucle"
        src="../../../src/assets/les_11_de_la_boucle_V2.png"
      />
    <h1 id="gdoc">
      <a
        href="https://docs.google.com/spreadsheets/d/18yQvnIIEZ4QPKGWWE3ozhg-seh9zppmfIbVvMh7WlZc/"
        >&#x2192; Gdoc La Boucle &#x2190;</a
      >
    </h1>
    <h1 id="gdoc">
      <a
        href="https://docs.google.com/spreadsheets/d/1yS_ZZPbNGcfcpUGsAl06HyNJHffN-xNAVyYx1EN4OlU"
        >&#x2192; Gdoc Bingo Boucle &#x2190;</a
      >
    </h1>
    <div class="faqboucle">
      <h1 class="titrefaq">Qu'est ce que la boucle</h1>
      <div class="pregle">
        <p>
          La boucle réprésente tous les sujets en rapport avec le RP,
          principalement liés a tous les acteurs tournant autour du groupe "La
          Mano"
        </p>
        <p>
          Elle a été créer du fait que les membres du discord ne lisent pas
          forcément les messages précédents, ce qui créer une répétition des
          sujets de conversation
        </p>
        <p>
          La <span style="color: #1DF503">"Boucle"</span> B majuscule, désigne
          le phénomène de redondance expliqué précédemment
        </p>
        <p>
          La <span style="color: #03D5F5">"boucle"</span> B minuscule, désigne
          un nouveau sujet entrant dans le cadre de la Boucle
        </p>
        <p>
          Le <span style="color: red;">"FC Boucle"</span> désigne le groupe de
          participants qui alimente la Boucle
        </p>
        <p>
          On nous prend pour une secte d'extrémistes, mais nous sommes gentil
        </p>
        <p style="color: #E4FC00">
          Tout le monde est le bienvenu au sein de la Boucle
        </p>
      </div>

      <h1 id="titreregle" class="titrefaq">Les règles de la Boucle</h1>
      <div class="pregle">
        <p>Répondre à l'appel de la Boucle si un camarade à besoin d'aide</p>
        <p>Mettre un émoji Boucle si un sujet de la boucle est lancé</p>
        <p>
          Tous les soirs applaudir à 20h en vocal ou par message sur le chan
          #gta5-hrp pour les modos, et à 20h05 pour la Boucle
        </p>
        <p style="color: red; text-decoration: underline; font-weight: bold;">
          NE PAS SPAMMER LES CHATS TWITCH DES DIFFERENTS STREAMEURS
        </p>
        <p>
          Si un streameur parle de la Boucle, vous pouvez en parler, sinon on
          s'abstient !
        </p>
        <p>
          Les sujets entrent et sortent de la boucle d'eux même, pas besoin de
          faire de forcing !
        </p>
        <p>
          ☠ Si vous voulez quitter la Boucle, ce sera les pieds en avant dans un
          tobbogan ☠
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
};
</script>

<style>
#onzedeboucle {
  padding-top: 20px;
  max-width: 1300px;
  width: 100%;
  display: block;
  margin: 0 auto;
  
}
@media screen and (max-width: 1320px) {
}
#faqbouc h1#titreregle {
  padding-top: 30px;
  text-align: center;
}

#faqbouc h1.titrefaq {
  font-size: 40px;
  text-align: center;
  padding-top: 25px;
  text-decoration: underline;
}

#faqbouc #gdoc {
  text-align: center;
  padding-top: px;
}

#faqbouc #bouclelogo {
  height: 60%;
  width: 60%;
  display: block;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 550px;
}

#faqbouc h1 {
  color: white;
  margin-bottom: 15px;
}
#faqbouc p {
  color: white;
  font-size: 22px;
  margin-bottom: 25px;
}

#faqbouc .pregle {
  margin: 0 auto;
  max-width: 800px;
  padding: 5px;
}

#faqbouc a { text-decoration: none; color:green;}



</style>
