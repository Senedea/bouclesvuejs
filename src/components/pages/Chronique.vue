<template>
  <div>
    <h1 class="resumedoctitle">
      <a
        href="https://docs.google.com/document/d/1xUUHUdXDIfV_BU5TolGgS5fphTv89ntZFBVEO9F2tJs"
        >&#x2192; Lien vers les chroniques &#x2190;</a
      >
    </h1>
    <div>
      <iframe
        class="resumedoc"
        src="https://docs.google.com/document/d/e/2PACX-1vT1WMa6Lq7-Rl5enMLO72Hgu-db0YmxWoJK38WPysK3govM1cpo8qcqN79gNBZYMppiwN7T2ygah6jx/pub?embedded=true"
        sandbox="allow-scripts allow-forms allow-same-origin"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chronique",
};
</script>

<style>
.resumedoc {
  width: 800px;
  height: 1000px;
  max-height: 90%;
  display: block;
  margin: 0 auto;
}

.resumedoctitle {
  text-align: center;
  padding-bottom: 25px;
  padding-top: 25px;
  font-size: 45px;
}

.resumedoctitle a {
  text-decoration: none;
  color: green;
}

@media screen and (max-width: 800px) {
  .resumedoc {
    max-width: 100%;
  }
}
</style>
