<template>
  <router-view class="h-screen bg-gray-50"></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item v-for="i in tabbarList" :name="i.path">{{ i.name }}
      <template #icon="props">
        <i :class="[i.class,{'text-4xl':props.active}]"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref } from 'vue'

const tabbarList = [{
  name: '首页',
  path: 'index',
  class: 'iconfont iconjiahao icon-paobu1 text-green-600'
}, {
  name: '指定版',
  path: 'gaoji',
  class: 'iconfont icon-paobu text-blue-600'
}, {
  name: '工具箱',
  path: 'gongjuxiang',
  class: 'iconfont icon-paobu3 text-red-600'
}, {
  name: '客服',
  path: 'kefu',
  class: 'iconfont icon-kefudianhua text-gray-600'
}, {
  name: '我的',
  path: 'wode',
  class: 'iconfont icon-wode1 text-yellow-600'
}]
const active = ref('index')
</script>

<style scoped lang="less">
@import url("@/css/iconfont015.css");
.van-tabbar {
  align-items: flex-end;
}
.van-tabbar-item {
  justify-content: flex-end;
  padding: 4px 0;
}
.van-tabbar-item--active {
  z-index: 9;
  background: transparent;
  :deep(.van-tabbar-item__icon) {
    border: 3px dotted;
    border-radius: 50%;
    padding: 8px;
    background: #fff;
    transition: .3s;
  }
}
</style>