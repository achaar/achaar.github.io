<template>
  <ul class="social">
    <li v-for="item in social" :key="item.name">
      <a :href="item.link" target="_blank" :title="item.title">
        <i :class="`fa fa-${item.name}`" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({ social: [
    { name: 'linkedin', title: 'LinkedIn', link: '' },
    { name: 'twitter', title: 'Twitter', link: '' },
    { name: 'github', title: 'aby0 on gihub.com', link: '' }
  ] })
}
</script>

<style lang="scss">
@import '../styles/variables';

ul.social {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 1000px;
    width: 2em;
    height: 2em;
    text-align: center;
    margin: 0 .5rem;

    a {
      color: white;
    }
  }
}
</style>

