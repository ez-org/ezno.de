<template>
  <Layout docPath="docs/index.md">
     <div class="markdown" v-html="this.content" />
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MarkdownContent from '../../docs/index.md'

export default {
  data() {
    return {
      content: MarkdownContent.replace(/^<hr>.*<hr>/s, ''), // strip front matter
    }
  },
  metaInfo() {
    return {
      title: 'eznode'
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep h1 {
  margin-bottom: 0;
  font-size: 2.5em;
  letter-spacing: 1.5px;
}

::v-deep h3 {
  font-weight: 500;
  font-size: 1.3em;
  margin-top: 0.4em;
}

::v-deep .button {
  font-size: 1.2em;
  margin: 0.5em 0 0 0;
  display: inline-block;
  padding: .5rem 1.5rem;
  color: #fff;
  border: 0;
}

::v-deep .github-btn svg {
  font-size: 1.8em;
  width: 1em;
  height: 1em;
  vertical-align: -0.3em;
  margin-left: 0.4em;
}

</style>
