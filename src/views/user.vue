<template>
  <div class="p-4">
    <van-notice-bar
      :scrollable="false"
      class="custom-center"
      text="尊敬的基础版自定义用户：感谢支持~"
    />
    <van-divider />
    <p class="text-base font-bold text-blue-400">
      我的专属：丢给TA吧~
      <van-button
        id="url"
        class="float-right ml-4 align-top"
        data-clipboard-text="h5.518study.com/gbs/hi-97WnxzB8u27.html"
        plain
        size="mini"
        type="danger"
        @click="copy"
      >
        点击复制
      </van-button>
    </p>
    <a
      class="text-sm text-red-400"
      href="h5.518study.com/gbs/hi-97WnxzB8u27.html"
      >h5.518study.com/gbs/hi-97WnxzB8u27.html</a
    >

    我的使用权限 功能模块 权限 有效期至 管理 体验 长期有效 🎁🎁🎁🎁 点击红色复制
    （TA）可以体验： 可以体验 5 天 （我）可以增加体验： 可增加 1 天体验
    用不用都行只要点开过
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
