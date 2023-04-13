<template>
  <!-- 开启顶部安全区适配 -->
  <van-nav-bar safe-area-inset-top />
  <router-view class="h-screen bg-gray-50"></router-view>
  <van-tabbar
    v-model="active"
    class="z-30"
    placeholder
    @change="tabChangeHandle"
  >
    <van-tabbar-item v-for="i in tabbarList" :name="i.path" :to="i.path"
      >{{ i.name }}
      <template #icon>
        <i :class="[i.class, { 'text-4xl': active == i.path }]"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { needReOauth } from './http/services.js'
import { useUserStore } from './store/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
watch(
  () => router.currentRoute.value.path,
  e => {
    active.value = e
  },
  { deep: true }
)
const userStore = useUserStore()
const userId = userStore.userId
userStore.initUserInfo()

const tabbarList = [
  {
    name: '首页',
    path: `/index-${userId}`,
    class: 'iconfont iconjiahao icon-paobu1 text-green-600'
  },
  {
    name: '指定版',
    path: '/vip',
    class: 'iconfont icon-paobu text-blue-600'
  },
  {
    name: '客服',
    path: '/help',
    class: 'iconfont icon-kefudianhua text-gray-600'
  },
  {
    name: '我的',
    path: '/user',
    class: 'iconfont icon-wode1 text-yellow-600'
  }
]
const active = ref(tabbarList[0].path)

const tabChangeHandle = i => {
  router.push(i)
}

onMounted(async () => {
  try {
    const res = await needReOauth()
  } catch (err) {
    console.log(err)
  }
})
</script>

<style lang="less" scoped>
@import url('@/css/iconfont015.css');
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
    transition: 0.3s;
  }
}
</style>
