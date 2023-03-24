<template>
  <van-notice-bar text="1.选择步数 2.绑定设备" :scrollable="false" class="custom-center"/>
  <div class="text-xs p-2"><h1>提示：</h1>
    <p>当日步数只能多不能少，和走路步数不叠加，谁多取谁。</p>
    <p class="text-red-600">防止网址被屏蔽：请务必复制保存以下地址到 文件传输助手 备用 以防万一</p>
  </div>
  <van-divider/>
  <div class="text-center text-sm">
    <p>体验截止时间： {{ time }}</p>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
      戳我可增加免费体验次数
    </van-button>
  </div>
  <div class="bg-yellow-200 my-4 p-4	flex justify-center	">
    <van-tag type="warning" size="large">自定义区:可选择多个步数</van-tag>
  </div>
</template>


<script setup>
import { ref } from "vue"

const time = ref("2023-01-22")
</script>

<style scoped lang="less">
.custom-center {
  :deep(.van-notice-bar__wrap) {
    justify-content: center;
  }
}
</style>



