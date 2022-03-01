<template>
  <div class="wrapper">
    <desk />
  </div>
</template>

<script>
import Desk from './components/Desk.vue'

export default {
  name: 'App',
  components: {
    Desk
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
