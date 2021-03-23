<template>
  <footer>
    <p>
      <a :href="`https://github.com/ez-org/ezno.de/edit/master/${docPath}`">Edit page</a>
      · <a href="https://github.com/ez-org/eznode">Github</a>
      · <a href="https://twitter.com/eznode_">Twitter</a>
      · <a href="https://t.me/ez_node">Telegram</a>
      · <a href="https://webchat.freenode.net/#eznode">IRC</a>
      · <a href="https://btcpay.shesek.info/">Donate</a>
    </p>
    <p>Cypherpunks write code.</p>
  </footer>
</template>

<script>
export default {
  props: {
    docPath: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: inherit;
  padding-right: inherit;
  padding-bottom: inherit;

  font-size: 0.8em;

  p { margin: 0; }
  p:first-child a:first-child { font-weight: 600; }
  p:last-child { font-weight: 300; }

  @media (min-width: 610px) and (max-width: 767px), (min-width: 920px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-child { margin-right: 5px; }
    p:last-child { text-align: right }
  }
  @media (max-width: 609px), (min-width: 768px) and (max-width: 919px) {
    p { display: inline }
    p:last-child:before { content: ' · '; }
  }
}
</style>
