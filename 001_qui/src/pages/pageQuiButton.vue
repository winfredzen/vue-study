<template>
  <div id="pageQuiButton">
    <qui-btn msg="我可以点击" class="small" v-on:btnClickEvent="doSth"></qui-btn>

    <qui-btn v-on:btnClickEvent="doSth1" msg="确定"></qui-btn>

    <qui-btn v-on:btnClickEvent="doSth2" msg="取消"></qui-btn>

    <qui-btn msg="下载" class="with-icon">
      <img slot="icon" class="ico" src="../assets/strawberry.png" />
    </qui-btn>
    
  </div>
</template>

<script>
import quiBtn from "../components/quiButton";

export default {
  name: "pageQuiButton",

  components: {
    "qui-btn": quiBtn
  },

  methods: {
    doSth: function() {
      alert("你点击了组件的click:btnClickEvent");
    },
    doSth1: function() {
      alert("111");
    },
    doSth2: function() {
      alert("222");
    }
  }
};
</script>

<style>
</style>
