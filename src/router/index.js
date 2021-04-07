import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Hobbies from "@/views/Hobbies.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/hobbies",
    name: "Hobbies",
    component: Hobbies,
  },
  {
    path: "/about",
    name: "Que Faço",
    component: About,
  },
  {
    path: "/home",
    name: "Quem Sou",
    component: Home,
  },
  {
    path: "/",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
