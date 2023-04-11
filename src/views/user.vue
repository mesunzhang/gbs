<template>
  <div class="p-4">
    <van-notice-bar
      :scrollable="false"
      class="custom-center"
      text="尊敬的基础版自定义用户：感谢支持~"
    />
    <van-divider />
    <p class="my-8 text-gray-600">我的专属：丢给TA吧~</p>
    <p class="my-8 text-blue-400">h5.518study.com/gbs/hi-97WnxzB8u27.html</p>
    <van-button
      id="url"
      block
      class="my-8"
      data-clipboard-text="h5.518study.com/gbs/hi-97WnxzB8u27.html"
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
