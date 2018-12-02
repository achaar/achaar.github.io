<template>
    <div>
      <nuxt/>
      <br>
      <br>
      <nuxt-link class="back-to-home" to="/"><i class="fa fa-home"></i></nuxt-link>
    </div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '//unpkg.com/katex/dist/katex.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  }
}
</script>


<style lang="scss" src="../styles/app.scss"></style>
