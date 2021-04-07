<template>
  <div >
    <hr>
    <div class="footer">
    <a href="https://github.com/AndreMacielSousa" target="_blank">
      <img src="@/assets/social/github.svg" />
    </a>
    <a href="https://www.facebook.com/andresousa.rebordoes" target="_blank">
      <img src="@/assets/social/facebook.svg" />
    </a>
    <a href="https://www.instagram.com/amacss/" target="_blank">
      <img src="@/assets/social/instagram.svg" />
    </a>
    <a href="https://www.linkedin.com/in/amdss/" target="_blank">
      <img src="@/assets/social/linkedin.svg" />
    </a>
    <a href="https://twitter.com/sousandre" target="_blank">
      <img src="@/assets/social/twitter.svg" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCa-EREAhtx1iqUsK1VIkPuA"
      target="_blank"
    >
      <img src="@/assets/social/youtube.svg" />
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
  margin: 10px;
}
.footer {
  align-items: center;
  justify-content: center;
  padding: 32px;
  display: flex;
  bottom: 0;
}
hr{
  width: 50%;
}
</style>