<template>
  <div class="p-4 text-center">
    <div class="text-base font-medium	leading-16 text-yellow-500 mb-4">
      一人一个步数,完全定制!<br/>
      自定义步数，精准无错!<br/>
      排名想在TA的后面?想霸占排行榜让别人看见?来吧!走起!
    </div>
    <p class="text-sm mb-4">体验到期时间: 2023-01-22</p>
    <van-field v-model="myBushu" readonly clickable @touchstart.stop="show = true" label="自定义步数:"
               placeholder="建议3W以下较稳定"/>
    <van-number-keyboard
        v-model="myBushu"
        :show="show"
        :maxlength="6"
        @blur="show = false"
    />
    <div class="flex flex-wrap justify-start -mx-1 mt-1 mb-2	btn-container">
      <van-button size="small" type="primary" plain @click="myBushu=random()">
        随机一个
      </van-button>
      <van-button v-for="i in [9999,12345,22222,66666,88888,98000]" size="small" @click="myBushu=i">
        {{ i }}
      </van-button>
      <van-button size="small" @click="myBushu=''">
        清空填充
      </van-button>
    </div>
    <van-button size="small" type="primary" @click="submit" class="w-full">
      开整
    </van-button>
    <div class="fixed bottom-32 w-full left-0">
      <van-notice-bar
          left-icon="fire-o" color="#ee0a24"
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
  </div>
</template>
<script setup>
import { ref } from 'vue'

const show = ref(false);
const myBushu = ref('')
const random = () => {
  return Math.floor(Math.random().toFixed(5) * 100000)
}
const submit = () => {
  //TODO

}
</script>
<style scoped lang="less">
.btn-container {
  > * {
    flex: auto;
    margin: 4px;
  }
}
</style>
