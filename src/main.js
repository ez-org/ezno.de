// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/globals.scss'
import Vuex from 'vuex'
require('typeface-source-sans-pro')

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en' }
  
  // Enable 'bright' theme by default on the server-side pre-rendered html (will get overwritten with the user's preference)
  if (!isClient) head.bodyAttrs = { class: 'bright' }
  
  head.base = { href: '/' }

  head.meta.push({
    name: 'description',
    content: 'A simple pruning-friendly setup for a personal bitcoin full node'
  }, {
    name: 'og:title',
    content: '✨ 𝚎𝚣𝚗𝚘𝚍𝚎'
  }, {
    name: 'og:description',
    content: 'A simple pruning-friendly setup for a personal bitcoin full node'
  }, {
    name: 'og:image',
    content: 'https://x.ezno.de/preview.png'
  }, {
    name: 'twitter:card',
    content: 'summary_large_image'
  }, {
    name: 'twitter:site',
    content: '@eznode_'
  })
  
  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })

  head.meta.push({
    name: 'theme-color',
    content: '#10c186'
  })

  /*
  head.meta.push({
    name: 'google-site-verification',
    content: process.env.GSV_META
  })
  */

  head.meta.push({
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'default'
  })

  // State
  appOptions.store = new Vuex.Store({
    state: {
      sidebarOpen: false
    },
    mutations: {
      toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen
      },
      closeSidebar(state) {
        state.sidebarOpen = false
      },
      openSidebar(state) {
        state.sidebarOpen = true
      }
    }
  })
  
  // Fix scroll to anchor/top
  // https://github.com/gridsome/gridsome/issues/1062
  router.options.scrollBehavior = (to, from, saved) => {
    if (saved) {
      return saved
    } else if (to.hash) {
      const el = document.querySelector(decodeURIComponent(to.hash))
      el && setTimeout(_ => el.scorllIntoView() , 100)
      return new Promise(resolve => setTimeout(_ => resolve({ selector: decodeURIComponent(to.hash) }), 0))
    } else {
      return new Promise(resolve => setTimeout(_ => resolve({ x: 0, y: 0 }), 0))
    }
  }
}