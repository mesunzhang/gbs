<template>
  <van-notice-bar text="1.选择步数 2.绑定设备" :scrollable="false" class="custom-center"/>
  <div class="text-xs p-2"><h1>提示：</h1>
    <p>当日步数只能多不能少，和走路步数不叠加，谁多取谁。</p>
    <p class="text-red-600">防止网址被屏蔽：请务必复制保存以下地址到 文件传输助手 备用 以防万一</p>
  </div>

  <div class="text-center text-sm"><p>体验截止时间： {{ time }}</p>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">
      戳我可增加免费体验次数
    </van-button>
  </div>
  <div class="p-4 text-center">
    <van-tag type="warning" size="large" class="mb-4" plain>自定义区:可选择多个步数</van-tag>
    <van-grid :gutter="10" :column-num="2">
      <van-grid-item v-for=" i in bushuList" :key="i.step">
        <template v-slot:default>
          <p class="text-base"> {{ i.step }}步</p>
          <p class="text-xs text-red-600">{{ i.userName }}</p>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>


<script setup>
import { onMounted, reactive, ref } from "vue"
import { test } from '@/http/services'

const time = ref("2023-01-22")
const bushuList = ref([])
const getList = async () => {
  //TODO
  // bushuList.value = await test()//写你的接口
  for (let i = 0; i < 20; i++) {
    let step = Math.floor(Math.random().toFixed(5) * 100000)
    let userName = "免费使用"
    if (step === 13140) {
      userName = "❤️一生一世爱你❤️";
    }
    if (step === 8888) {
      userName = "❤️发发发发❤️";
    }
    if (step === 20184) {
      userName = "❤️爱你一辈子❤️";
    }
    if (step === 20475) {
      userName = "❤️爱你是幸福❤️";
    }
    if (step === 20609) {
      userName = "❤️爱你到永久❤️";
    }
    if (step === 6666) {
      userName = "一帆风顺";
    }
    if (step === 5555) {
      userName = "旺运十足123123";
    }
    if (step === 18888) {
      userName = "❤️我要发发发发❤️";
    }
    if (step === 88888) {
      userName = "🔥大吉大利🔥";
    }
    if (step === 9520) {
      userName = "❤️就我爱你❤️";
    }
    bushuList.value.push({ step, userName })
  }
}
onMounted(() => {
      getList()
    }
)
</script>

<style scoped lang="less">
.custom-center {
  :deep(.van-notice-bar__wrap) {
    justify-content: center;
  }
}
</style>



