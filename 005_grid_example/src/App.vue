<template>
  <div id="app">
    <data-grid 
      :columns="gridColumns"
      :heroes="gridData"></data-grid>
  </div>
</template>

<script>

import DataGrid from './components/DataGrid'

export default {
  name: 'app',
  components: {
    'data-grid': DataGrid
  },
  data () {
    return {
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    }
  }
}
</script>

<style scoped>

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

</style>
