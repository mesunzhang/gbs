<template>
  <van-notice-bar
    :scrollable="false"
    class="custom-center"
    text="尊敬的基础版自定义用户：感谢支持~"
  />
  <div class="p-4">
    <p class="my-8 text-gray-600">我的专属：丢给TA吧~</p>
    <p class="my-8 text-blue-400">h5.518study.com/gbs/hi-97WnxzB8u27.html</p>
    <van-button
      id="url"
      :data-clipboard-text="clipBoardText"
      block
      class="my-8"
      plain
      size="small"
      square
      type="danger"
      @click="copy"
    >
      点击复制
    </van-button>
    <p class="my-4 font-bold text-gray-800">（TA）可以体验：</p>
    <p class="my-6 pl-8">免费体验<span class="text-red-600"> 5 </span>天</p>
    <p class="my-4 font-bold text-gray-800">（我）可以增加体验：</p>
    <p class="my-6 pl-8">可增加<span class="text-red-600"> 1 </span>天体验</p>
    <p class="my-6 pl-8">用不用都行只要点开过</p>
  </div>
</template>
<script setup>
import Clipboard from 'clipboard'
import { showToast } from 'vant'
import { useUserStore } from '../store/index.js'
import { computed, ref } from 'vue'

const store = useUserStore()
const url = computed(() => {
  return `h5.518study.com/gbs/hi-${store.userId}.html`
})
const clipBoardText = ref(
  `${url.value} 最新版地址，微信内点击打开~如果将来打不开了，就去电脑或者手机任意浏览器中打开，可获取到最新地址~`
)
const copy = () => {
  let clipboard = new Clipboard('#url')
  clipboard.on('success', e => {
    showToast(
      '复制成功，可以粘贴了，建议以会话或者聊天记录的方式发送，也可以发送到各种地方~'
    )
    // 释放内存
    clipboard.destroy()
  })
  clipboard.on('error', e => {
    // 不支持复制
    console.log('该浏览器不支持自动复制', e)
    // 释放内存
    clipboard.destroy()
  })
}
</script>
