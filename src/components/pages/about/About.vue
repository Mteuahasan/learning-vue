<template lang="html">
  <transition name="slide">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      title: 'About'
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.fade-leave, .fade-enter-active {
  opacity: 0;
  transform: translateX(100px);
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}

.container {
  height: 100vh;
}
</style>
