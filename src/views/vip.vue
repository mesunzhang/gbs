<template>
  <div class="p-4 text-center">
    <div class="leading-16 mb-4 text-base font-medium text-yellow-500">
      一人一个步数,完全定制!<br />
      自定义步数，精准无错!<br />
      排名想在TA的后面?想霸占排行榜让别人看见?来吧!走起!
    </div>
    <p class="mb-4 text-sm">体验到期时间: 2023-01-22</p>
    <van-field
      v-model="myBushu"
      clickable
      label="自定义步数:"
      placeholder="建议3W以下较稳定"
      readonly
      @touchstart.stop="show = true"
    />
    <van-number-keyboard
      v-model="myBushu"
      :maxlength="6"
      :show="show"
      @blur="show = false"
    />
    <span class="text-center text-xs"> 上面输入步数/下方点击填充步数</span>
    <div class="btn-container -mx-1 mt-1 mb-2 flex flex-wrap justify-start">
      <van-button plain size="small" type="primary" @click="myBushu = random()">
        随机一个
      </van-button>
      <van-button
        v-for="i in [9999, 12345, 22222, 66666, 88888, 98000]"
        size="small"
        @click="myBushu = i"
      >
        {{ i }}
      </van-button>
      <van-button size="small" @click="myBushu = ''"> 清空填充</van-button>
    </div>

    <div class="left-0 mb-4 w-full">
      <van-notice-bar
        left-icon="fire-o"
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
    <van-button class="w-full" type="primary" @click="submit">
      开整
    </van-button>
    <van-dialog
      v-model:show="confirm.show"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <p class="my-8 text-center">确定步数要改为：{{ myBushu }}</p>
      <div class="space-around block-btn mt-4 flex flex-wrap">
        <van-button class="w-1/2" type="default" @click="confirm.closeHandle()"
          >返回更改
        </van-button>
        <van-button class="w-1/2" color="#FBBF24" @click="bushuClick"
          >确定操作
        </van-button>
      </div>
    </van-dialog>
    <pay-modal ref="payModal"></pay-modal>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import PayModal from '@/components/PayModal.vue'

const random = () => {
  return Math.floor(Math.random().toFixed(5) * 100000)
}
const show = ref(false)
const myBushu = ref(random())
const payModal = ref(null)

const confirm = reactive({
  show: false,
  showHandle: () => {
    confirm.show = true
  },
  closeHandle: () => {
    confirm.show = false
  }
})
const submit = () => {
  confirm.showHandle()
}
const bushuClick = step => {
  confirm.closeHandle()
  payModal.value.init(step)
}
</script>
<style lang="less" scoped>
.btn-container {
  > * {
    flex: auto;
    margin: 4px;
  }
}
.block-btn {
  --van-button-radius: 0;
}
</style>
