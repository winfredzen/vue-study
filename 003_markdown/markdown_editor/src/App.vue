<template>
  <div id="app">
    <editor/>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components: {
    Editor
  }
}
</script>

<style>

html, body, #app {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

</style>
