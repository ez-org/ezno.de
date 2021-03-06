<template>
    <aside class="sidebar" :class="{'sidebar--open' : this.$store.state.sidebarOpen}">
      <h2><g-link to="/"><span>eznode</span></g-link></h2>
      <nav>
        <ul>
          <li class="section" v-for="{ node } in $static.menu.edges" :key="node.id">
            <!--<h3 class="section-title">{{node.section}}</h3>-->
            <ul>
              <li class="icons">
                <a title="Github" href="https://github.com/ez-org/eznode"><github-icon /></a>
                <a title="Twitter" href="https://twitter.com/eznode_"><twitter-icon /></a>
                <a title="Telegram" href="https://t.me/ez_node"><send-icon /></a>
                <a title="IRC" href="https://webchat.freenode.net/#eznode"><hash-icon /></a>
              </li>
              <li v-for="item in node.topics" :key="item.title">
                <g-link class="topic" :to="'/' + item.slug">{{item.title}}</g-link>
                <ul v-if="checkAnchors(node.slug, item.slug)" v-for="{ node } in $static.docs.edges" :key="node.id">
                  <li v-for="heading in filterHeadings(node.headings)" :key="heading.value">
                    <g-link class="sub-topic" :to="'/' + item.slug + heading.anchor">{{heading.value}}</g-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
</template>

<static-query>
query Menu {
  menu: allMenu(order:ASC) {
    edges {
      node {
        section
        topics {
          title
          slug
        }
      }
    }
  }
  docs: allDoc {
    edges {
      node {
        slug
        headings {
          value
          anchor
          depth
        }
      }
    }
  }
}
</static-query>

<script>
import throttle from 'lodash/throttle'
import { GithubIcon, TwitterIcon, SendIcon, HashIcon } from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
    SendIcon,
    HashIcon,
  },
  watch: {
    '$route' () {
      this.$store.commit('closeSidebar')
    }
  },
  methods: {
    checkAnchors(slug, item) {
      if (slug == item) {
        return true
      }
    },
    stateFromSize: function() {
      if (window.getComputedStyle(document.body, ':before').content == '"small"') {
        this.$store.commit('closeSidebar')
      } else {
        this.$store.commit('openSidebar')
      }
    },
    sidebarScroll: function() {
      let mainNavLinks = document.querySelectorAll('.topic.active + ul .sub-topic')
      let fromTop = window.scrollY

      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash)
        let allCurrent = document.querySelectorAll('.current'), i

        if (section.offsetTop <= fromTop + 7) {
          for (i = 0; i < allCurrent.length; ++i) {
            allCurrent[i].classList.remove('current')
          }
          link.classList.add('current')
        } else {
          link.classList.remove('current')
        }
      })
    },
    filterHeadings: headings => headings.filter(h => h.depth < 3),
  },
  beforeMount () {
    this.stateFromSize()
  },
  mounted() {
    const throttled = throttle(this.sidebarScroll, 50)
    window.addEventListener('scroll', throttled)
    this.$root._router.afterEach(throttled)
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  transition: background .15s ease-in-out, transform .15s ease-in-out, border-color .15s linear;
  padding: 30px;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  will-change: transform;
  transform: translateX(-300px);
  border-right: 1px solid transparent;
  overflow: auto;

  @include respond-above(sm) {
    transform: translateX(0);
  }

  &--open {
    transform: translateX(0);
    z-index: 11;
  }
  
  .bright & {
    background: $sidebarBright;
    border-color: shade($sidebarBright, 10%);
  }

  .dark & {
    background: $sidebarDark;
    border-color: shade($sidebarDark, 40%);
  }
  
  h2 {
    font-size: 2em;
    margin: 0 0 13px 3px;
    a {
      color: inherit;
      text-decoration: none;
      letter-spacing: 2px;
    }
  }
}

nav {
  position: relative;
  border: 1px solid transparent;
  padding-bottom: 20px;
}

nav > ul { margin-bottom: 15px; }

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    color: inherit;
    padding: 5px 0;
    display: block;

    &.topic.active {
      color: $brandPrimary;
    }
  }
}

.section {
  ul ul { margin-left: 20px; }
}

.section-title {
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 20px;
  opacity: .3;
  letter-spacing: .15em;
  font-weight: 700;
}

.topic {
  font-weight: 700;
}

.sub-topic {
  font-size: .875em;
  position: relative;
  opacity: .8;

  &::after {
    content: '';
    transition: opacity .15s ease-in-out;
    width: 6px;
    height: 6px;
    background: $brandPrimary;
    border-radius: 100%;
    display: block;
    opacity: 0;
    position: absolute;
    top: 18px;
    left: -15px;
  }

  &.current {
    &::after {
      opacity: 1;
    }
  }
}

/*.topic, .sub-topic {
  &:hover {
    color: $brandPrimary;
  }
}*/

.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 139px;
  line-height: 1;
  margin-left: 3px;
  margin-bottom: 8px;

  a {
    display: inline;
    padding: 0;
  }
  svg {
    font-size: 0.95em;
    width: 1em;
    height: 1em;
    margin-right: 5px;
  }
  svg:not(:hover) { opacity: 0.7; }
  svg:hover { color: $brandPrimary; }
}
</style>