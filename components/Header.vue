<template>
  <div class="top-bar container-fluid">
      <div class="actions float-right">
          <a class="btn btn-primary hidden-xs" href="mailto:someone@example.com"><i class="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a>
          <a class="btn btn-primary" href="#"><i class="fa fa-download" aria-hidden="true"></i> Download My Resume</a>
      </div><!--//actions-->
      
      <Social/>
  </div><!--//top-bar-->
</template>

<script>
import Social from './Social.vue'

export default {
  components: { Social }
}
</script>


<style lang="scss" scoped>
@import '../styles/variables';

.top-bar {
  background: $brand-secondary;
}

.btn {
  padding: 8px 15px;
  background-clip: padding-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    background: #00a5bb;
  }
}
</style>

