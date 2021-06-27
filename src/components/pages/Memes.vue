<template>
  <div>
    <div id="imgurembed">
      <h1 class="imgurtitle">Memes boucles HRP</h1>
      <blockquote class="imgur-embed-pub" lang="en" data-id="a/AqJQGMx">
        <a href="//imgur.com/a/AqJQGMx">Memes_21JC_HRP_Boucle</a>
      </blockquote>
      <h1 class="imgurtitle">Memes metagaming</h1>
      <blockquote class="imgur-embed-pub" lang="en" data-id="a/6U2Kwp4">
        <a href="//imgur.com/a/6U2Kwp4">Meme_21jc_meta_material</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memes",
  mounted() {
    const blockquotes = document.querySelectorAll("#imgurembed blockquote");
    blockquotes.forEach(function() {
      let yourScript = document.createElement("script");
      yourScript.setAttribute("src", "//s.imgur.com/min/embed.js");
      document.head.appendChild(yourScript);
    });
  },
};
</script>

<style>
@media screen and (max-width: 1320px) {
  body {
    overflow-x: hidden;
  }
}
#imgurembed {
  padding-top: 50px;
  text-align: center;
}
.imgurtitle {
  text-align: center;
  text-decoration: underline;
}
</style>
