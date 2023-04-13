<template>
  <van-dialog
    v-model:show="show"
    :show-cancel-button="false"
    :show-confirm-button="false"
  >
    <img src="@/assets/sad.gif" />
    <template v-if="!noPay.show">
      <p class="my-2 text-center font-bold text-red-600">体验天数已用完</p>
      <div class="px-4 text-left text-sm text-gray-500">
        <p class="font-bold">捐赠，可享受指定步数的乐趣！</p>
        <p>
          只需要捐赠<span class="text-red-600"> 1.5元 </span> ，获得
          <span class="text-red-600"> 3天 </span>使用权！
        </p>
        <p>
          只需要捐赠<span class="text-red-600"> 8.8元 </span>，获得
          <span class="text-red-600"> 3个月 </span>使用权！
        </p>
        <p>
          只需要捐赠<span class="text-red-600"> 12.8元 </span
          >，(原价66.6元)获得<span class="text-red-600"> 终身永久 </span
          >指定权！限时优惠!
        </p>
      </div>
      <div class="space-around block-btn mt-4 flex flex-wrap">
        <van-button class="w-1/2" type="default" @click="noPay.showHandle()"
          >我不捐赠
        </van-button>
        <van-button class="w-1/2" color="#FCD34D" @click="pay(1.5)"
          >捐赠 ¥1.5 (3天)
        </van-button>
        <van-button class="w-1/2" color="#FBBF24">捐赠 ¥8.8 (3个月)</van-button>
        <van-button
          class="w-1/2"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
        >
          <van-icon color="white" name="fire" />
          捐赠 ¥12.8 (永久)
        </van-button>
      </div>
    </template>
    <template v-else>
      <p class="mt-4 text-center font-bold">免费天数用完了</p>
      <div class="space-around block-btn mt-4 flex flex-wrap">
        <van-button class="w-1/2" type="default" @click="noPay.closeHandle()"
          >取消
        </van-button>
        <van-button class="w-1/2" color="#FBBF24" @click="noPay.go()"
          >继续免费体验
        </van-button>
      </div>
    </template>
  </van-dialog>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  createOrderBase,
  getStepDetail,
  randomStepDetailUnSpec
} from '../http/services.js'
import { useUserStore } from '../store/index.js'

const show = ref(false)
const data = reactive({})
const router = useRouter()
const store = useUserStore()

const init = async step => {
  let res, stepId, applyId, myq
  if (step == 0) {
    res = await randomStepDetailUnSpec({ token: store.token })
  } else {
    res = await getStepDetail({ stepId: step, token: store.token })
  }
  show.value = true

  if (res.data === 'ci_shu_error') {
    // if (usageType === 2) {
    //   document.getElementById('popBox-demo-hign_day').style.display = 'block'
    // } else {
    //   document.getElementById('popBox-demo-hign').style.display = 'block'
    // }
  } else {
    stepId = res.data.stepId || res.data.randomStepId
    applyId = res.data.applyId
    myq = res.data.q
    console.log(stepId, applyId, myq)
  }
}
defineExpose({ init })

const noPay = reactive({
  show: false,
  showHandle: () => {
    noPay.show = true
  },
  closeHandle: () => {
    noPay.show = false
    show.value = false
  },
  go: () => {
    router.push('/user')
  }
})
const pay = async num => {
  // const res = await createOrderBase()
}
</script>
<style lang="less" scoped>
.block-btn {
  --van-button-radius: 0;
}
</style>
