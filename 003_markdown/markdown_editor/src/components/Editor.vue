<template>
  <div id="editor">
    <textarea :value='input' @input="update"></textarea>
    <div v-html="compliedMarkdown"></div>
  </div>
</template>

<script>

import marked from 'marked';
import _ from 'lodash';

export default {
  el: '#editor',
  data () {
    return {
      input: '# hello'
    }
  },
  computed: {
    compliedMarkdown: function() {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function(e){
      this.input = e.target.value;
    }, 300)
  }
}
</script>

<style scoped>

#editor {
  height: 100%;
}

textarea, #editor div {
  display: inline-block;
  height: 100%;
  width: 50%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}


</style>
