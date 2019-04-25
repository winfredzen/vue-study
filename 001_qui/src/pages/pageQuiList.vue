<template>
  <div>
    <qui-list tipsText="自定义文案，默认右边是按钮" msg="弹层"></qui-list>
    <qui-list v-on:btnClickEvent="test"></qui-list>
    <qui-list ref="child1" tipsText="最右边是箭头" currentView="qui-arrow" msg='箭头'></qui-list>
  </div>
</template>

<script>
import quiList from "../components/quiList";

export default {
  components: {
    "qui-list": quiList
  },
  methods: {
    test() {
      console.log(this.$children[0].msg);//通过数组获取
      console.log(this.$refs.child1.msg);//通过对象集合获取
    }
  }
};
</script>

<style>
</style>
