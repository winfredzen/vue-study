<template>
  <div id="app" class="app">
    <Toolbar></Toolbar>
    <NoteList></NoteList>
    <Editor></Editor>
  </div>
</template>

<script>

import Editor from './components/Editor';
import NoteList from './components/NoteList'
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components: {
    Editor,
    NoteList,
    Toolbar
  }
}
</script>

<style>
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
  .app {
    display: flex;
    align-items: stretch;
    height: 100vh;
  }
</style>
