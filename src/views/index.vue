<template>
  <van-notice-bar
    :scrollable="false"
    class="custom-center"
    text="1.选择步数 2.绑定设备"
  />
  <div class="p-2 text-xs">
    <h1>提示：</h1>
    <p>当日步数只能多不能少，和走路步数不叠加，谁多取谁。</p>
    <p class="text-red-600">
      防止网址被屏蔽：请务必复制保存以下地址到 文件传输助手 备用 以防万一
    </p>
  </div>

  <div class="text-center text-sm">
    <p>体验截止时间：{{ store.vipFreeEndDay }}</p>
    <van-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      size="small"
    >
      戳我可增加免费体验次数
    </van-button>
  </div>
  <div class="p-4 text-center">
    <van-tag class="mb-4" plain size="large" type="warning"
      >自定义区:可选择多个步数
    </van-tag>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item v-for="i in bushuList" :key="i.step" @click="bushuClick">
        <template v-slot:default>
          <p class="text-base">{{ i.step }}步</p>
          <p class="text-xs text-red-600">{{ i.userName }}</p>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
  <div
    class="fixed right-0 bottom-24 left-0 z-10 flex items-center bg-gradient-to-r from-green-400 to-blue-500 py-2 px-2 drop-shadow-xl"
  >
    <div class="flex-auto">
      <p class="text-center font-bold text-white">指定版上线了 快来体验吧~</p>
      <van-notice-bar
        background="transparent"
        color="#fff"
        text="运动好友步数修改成功: [34910步] 运动好友步数修改成功: [41874步] 运动好友步数修改成功: [40066步] 运动好友步数修改成功: [22290步] 运动好友步数修改成功: [29826步] 运动好友步数修改成功:
    [51581步] 运动好友步数修改成功: [22625步] 运动好友步数修改成功: [80313步] 运动好友步数修改成功: [28594步] 运动好友步数修改成功: [41771步] 运动好友步数修改成功: [37115步]
    运动好友步数修改成功: [30394步] 运动好友步数修改成功: [76003步] 运动好友步数修改成功: [83056步] 运动好友步数修改成功: [52075步] 运动好友步数修改成功: [62934步] 运动好友步数修改成功:
    [80509步] 运动好友步数修改成功: [43994步] 运动好友步数修改成功: [23933步] 运动好友步数修改成功: [77299步] 运动好友步数修改成功: [86644步] 运动好友步数修改成功: [86342步]
    运动好友步数修改成功: [72990步] 运动好友步数修改成功: [27125步] 运动好友步数修改成功: [63676步] 运动好友步数修改成功: [67467步] 运动好友步数修改成功: [14681步] 运动好友步数修改成功:
    [29077步] 运动好友步数修改成功: [27588步] 运动好友步数修改成功: [45736步] 运动好友步数修改成功: [83185步] 运动好友步数修改成功: [84087步] 运动好友步数修改成功: [77937步]
    运动好友步数修改成功: [57099步] 运动好友步数修改成功: [29716步] 运动好友步数修改成功: [52583步] 运动好友步数修改成功: [83501步] 运动好友步数修改成功: [81479步] 运动好友步数修改成功:
    [25195步] 运动好友步数修改成功: [46326步] 运动好友步数修改成功: [23858步] 运动好友步数修改成功: [35034步] 运动好友步数修改成功: [32318步] 运动好友步数修改成功: [36998步]
    运动好友步数修改成功: [59610步] 运动好友步数修改成功: [61536步] 运动好友步数修改成功: [38256步] 运动好友步数修改成功: [36827步] 运动好友步数修改成功: [57270步] 运动好友步数修改成功:
    [24672步]"
      />
    </div>
    <van-button @click="router.push({ path: '/vip' })">指定步数</van-button>
  </div>
  <pay-modal ref="payModal"></pay-modal>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { commonStepListV3 } from '@/http/services'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../store/index.js'
import { getStepDetail, randomStepDetailUnSpec } from '../http/services.js'
import PayModal from '@/components/PayModal.vue'

const router = useRouter()
const store = useUserStore()
const bushuList = ref([])
const getList = async () => {
  const res = await commonStepListV3()
  bushuList.value = res.data.map(i => {
    let userName = '免费使用'
    if (i.step === 13140) {
      userName = '❤️一生一世爱你❤️'
    }
    if (i.step === 8888) {
      userName = '❤️发发发发❤️'
    }
    if (i.step === 20184) {
      userName = '❤️爱你一辈子❤️'
    }
    if (i.step === 20475) {
      userName = '❤️爱你是幸福❤️'
    }
    if (i.step === 20609) {
      userName = '❤️爱你到永久❤️'
    }
    if (i.step === 6666) {
      userName = '一帆风顺'
    }
    if (i.step === 5555) {
      userName = '旺运十足123123'
    }
    if (i.step === 18888) {
      userName = '❤️我要发发发❤️'
    }
    if (i.step === 88888) {
      userName = '🔥大吉大利🔥'
    }
    if (i.step === 9520) {
      userName = '❤️就我爱你❤️'
    }
    return { ...i, userName }
  })
}
const bushuClick = step => {
  payModal.value.init(step)
}
const payModal = ref(null)
onMounted(() => {
  getList()
})
</script>

<style lang="less" scoped>
.custom-center {
  :deep(.van-notice-bar__wrap) {
    justify-content: center;
  }
}
</style>
