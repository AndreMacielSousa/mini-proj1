<template>
  <div class="nav">
    <ul>
      <li class="name">{{ nome }}</li>
      <li class="item" v-for="(route, idx) in routes" :key="idx">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "@/router/index.js";
export default {
  name: "Header",
  props: {
    nome: String,
  },
  data() {
    return { routes };
  },
};
</script>

<style scoped>
.nav {
  background-color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
  top: 0;
}

li.name {
  float: left;
  font-size: 18px;
}
li.item {
  float: right;
  padding-top: 12px;
  margin-right: 5px;
  padding-right: 10px;
}
a:link,
a:visited {
  color: #ffffff;
}

a:hover {
  color: #04afff;
}
</style>