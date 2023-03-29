<template><!-- 开启顶部安全区适配 -->
  <van-nav-bar safe-area-inset-top/>
  <router-view class="h-screen bg-gray-50"></router-view>
  <van-tabbar v-model="active" placeholder route>
    <van-tabbar-item v-for="i in tabbarList" :name="i.path" :to="i.path">{{ i.name }}
      <template #icon="props">
        <i :class="[i.class,{'text-4xl':props.active}]"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom/>
</template>
<script setup>
import { ref } from 'vue'

const tabbarList = [{
  name: '首页',
  path: '/index',
  class: 'iconfont iconjiahao icon-paobu1 text-green-600'
}, {
  name: '指定版',
  path: '/vip',
  class: 'iconfont icon-paobu text-blue-600'
}, {
  name: '客服',
  path: '/kefu',
  class: 'iconfont icon-kefudianhua text-gray-600'
}, {
  name: '我的',
  path: '/wode',
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