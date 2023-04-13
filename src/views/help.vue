<template>
  <van-notice-bar
    :scrollable="false"
    class="custom-center"
    text="有任何问题，可以留言联系客服~"
  />
  <div class="p-8">
    <van-field
      v-model="message"
      autosize
      class="mb-8"
      label="留言"
      placeholder="请输入留言"
      rows="1"
      type="textarea"
    />
    <van-button block type="primary" @click="submit"> 提交</van-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { insertMsg } from '../http/services.js'
import { showNotify } from 'vant'

const message = ref('')
const submit = async () => {
  await insertMsg({ msg: message.value })
  showNotify({ type: 'success', message: '感谢您的反馈' })
}
</script>
