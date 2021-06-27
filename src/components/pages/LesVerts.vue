<template>
  <div>
    <div id="logovert">
      <a href="/"
        ><img id="vert" src="../../../src/assets/Families_Logo.png" alt="Verts"
      /></a>
    </div>
    <div id="resumevert">
      <li>Champ de weed spotted ?</li>
      <li>Pourquoi un hélico attendait au sol à la mine ?</li>
      <li>Mass RP concernant le van "Smoke on the water" des verts</li>
      <li>Le FC Boucle devient le FC Diouf le week-end</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "LesVerts",
};
</script>

<style>
@media screen and (max-width: 1320px) {
  body {
    overflow-x: hidden;
  }
}
#logovert {
  align-items: center;
  max-width: 350px;
  max-height: 500px;
  margin: auto;
}

#vert {
  display: block;
  max-width: 350px;
  margin: auto;
  width: 100%;
}

#resumevert {
  text-align: center;
  line-height: 60px;
  padding-top: 20px;
  font-size: 20px;
  overflow-wrap: break-word;
  color: white;
}
</style>
