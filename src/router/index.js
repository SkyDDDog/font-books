import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login/Login";
import Register from "../views/Login/Register";
import Rmale from "../views/Rmale/rmale";
import Ranking from "../views/Hot/Ranking";
import Recommend from "../views/Recommend/Recommend";
import CationBooks from "../views/Cation/CationBooks";
import Booksinfo from "../components/Booksinfo"
import Controller from "../views/Manage/Controller"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {},
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      fullScreen: true,
    },
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      fullScreen: true,
    },
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      fullScreen: true,
    },
    component: Register,
  },
  {
    path: "/rmale",
    name: "Rmale",
    meta: {
      fullScreen: true,
    },
    component: Rmale,
  },
  {
    path: "/ranking",
    name: "Ranking",
    meta: {
      fullScreen: true,
    },
    component: Ranking,
  },
  {
    path: "/recommend",
    name: "Recommend",
    meta: {
      fullScreen: true,
    },
    component: Recommend,
  },
  {
    path: "/cationBooks",
    name: "CationBooks",
    meta: {
      fullScreen: true,
    },
    component: CationBooks,
  },
  {
    path: "/booksinfo",
    name: "Booksinfo",
    meta: {
      fullScreen: true,
    },
    component: Booksinfo,
  },
  {
    path: "/controller",
    name: "Controller",
    meta: {
      fullScreen: false,
    },
    component: Controller,
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
