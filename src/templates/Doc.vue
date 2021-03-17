<template>
  <Layout>
    <h1>
      {{ $page.doc.title }}
    </h1>
     <div class="markdown" v-html="$page.doc.content" />
  </Layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.$page.doc.title} - eznode`
    }
  }
}
</script>


<style lang="scss" scoped>

/deep/ > h2 {
  margin-top: -10px;
  padding-top: 30px;

  @include respond-below(sm) {
    padding-top: 100px;
    margin-top: -80px;
  }

  @include respond-above(md) {
    font-size: 1.8em;
  }
}

.markdown {
  padding-bottom: 10vh;
}
</style>
