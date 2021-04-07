<template>
  <div id="app">
    <Header nome="André Maciel Sousa"></Header>
    <router-view class="corpo"></router-view>
     <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style>

#app {
  font-family:sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:97vh;  
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
.corpo{
    width: 80%;
    margin: auto;
    height: 100%;
    padding: 36px 0;
    text-align: center;
}


</style>
