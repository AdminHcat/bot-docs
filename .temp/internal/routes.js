/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\87554\\AppData\\Roaming\\npm\\node_modules\\vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-8751a5ac",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8751a5ac").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c4575e6a",
    path: "/cubepic/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c4575e6a").then(next)
    },
  },
  {
    path: "/cubepic/index.html",
    redirect: "/cubepic/"
  },
  {
    name: "v-3e0f1c3b",
    path: "/cuber/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3e0f1c3b").then(next)
    },
  },
  {
    path: "/cuber/index.html",
    redirect: "/cuber/"
  },
  {
    name: "v-6edd5bd7",
    path: "/admin/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6edd5bd7").then(next)
    },
  },
  {
    path: "/admin/index.html",
    redirect: "/admin/"
  },
  {
    name: "v-23eb84ad",
    path: "/scramble/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-23eb84ad").then(next)
    },
  },
  {
    path: "/scramble/index.html",
    redirect: "/scramble/"
  },
  {
    name: "v-2952dc86",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2952dc86").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-29f2df6d",
    path: "/comp/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-29f2df6d").then(next)
    },
  },
  {
    path: "/comp/index.html",
    redirect: "/comp/"
  },
  {
    name: "v-1ebfd8f1",
    path: "/welcome/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1ebfd8f1").then(next)
    },
  },
  {
    path: "/welcome/index.html",
    redirect: "/welcome/"
  },
  {
    name: "v-17fb8e8b",
    path: "/wca/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-17fb8e8b").then(next)
    },
  },
  {
    path: "/wca/index.html",
    redirect: "/wca/"
  },
  {
    name: "v-7f9d290d",
    path: "/switch/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7f9d290d").then(next)
    },
  },
  {
    path: "/switch/index.html",
    redirect: "/switch/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]