<template>
  <button class="qui-btn" v-on:click="btnEventClick">
    <slot name="icon"></slot>
    <span>{{ msg }}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      default: "下载"
    }
  },
  methods: {
    btnEventClick: function() {
      alert("先弹出默认的文案");
      this.$emit("btnClickEvent"); //关键代码父组件触发自定义事件
    }
  }
};
</script>

<style scoped>
@import "./css/reset.import.css";
@import "./css/qui-btn.import.css";
</style>
