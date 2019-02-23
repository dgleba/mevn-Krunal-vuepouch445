import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import dayjs from "dayjs";
import PouchDB from "pouchdb-browser";
import lf from "pouchdb-find";
import plf from "pouchdb-live-find";
PouchDB.plugin(lf);
PouchDB.plugin(plf);

Vue.use(require("vue-pouch"), {
  pouch: PouchDB,
  defaultDB: "config"
});

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent
  },
  {
    name: "edit",
    //path: "/edit/:_id",

    // temporarily avoid error: [vue - router] missing param for named route "edit": Expected "id" to be defined
    path: "/edit/__thistobecompleted_undefined_record",
    component: EditComponent
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount("#app");

// ??
//
/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   template: "<App/>",
//   components: { App }
// });
