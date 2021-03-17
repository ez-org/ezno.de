<template>
  <g-link to="/" class="logo" title="Back to home">
    eznode
  </g-link>
</template>

<style lang="scss" scoped>
.logo {
  display: block;
  color: inherit;
  perspective: 200px;
  font-weight: bolder;
  font-size: 1.15em;
  
  div {
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.theme-enter, .theme-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
