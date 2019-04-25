<template>
  <div class="qui-list">
    <span class="list-tips">{{tipsText}}</span>
    <component :is="currentView" v-on:btnClickEvent="btnClickEvent" :msg=msg class="small" keep-alive></component>
  </div>
</template>

<script>
import quiButton from "./quiButton";
import quiArrow from './quiArrow'

export default {
  data() {
    return {};
  },
  props: {
    msg: {
      default: "下载"
    },
    tipsText: {
      default: "默认的文案"
    },
    currentView: {
      default: 'qui-btn'
    }
  },
  components: {
    "qui-btn": quiButton,
    'qui-arrow': quiArrow
  },
  methods: {
    btnClickEvent: function() {
      alert("按钮点击事件");
      this.$emit('btnClickEvent');
    }
  }
};
</script>

<style scoped>

  .qui-list{
    padding: 10px 0;
    margin-left: 10px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;
    display: flex;
    justify-content:center;
    align-items:Center;
    min-height: 30px;
  }
  .qui-list .qui-btn{
    float: right;
    margin-right: 10px;

  }
  .qui-list .list-tips{
    padding: 0 5px;
    color: #00A0D8;
    float: left;
    vertical-align: middle;
    flex:1;
    text-align: left;
    font-size: 14px;
  }

</style>
