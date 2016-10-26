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
      title: 'Homepage'
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
.slide-enter, .slide-leave-active {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 1s ease;
}

.container {
  height: 100vh;
}
</style>
