<template>

</template>

<script setup>
import {onMounted} from "vue";
import {UserService} from '../../api/sys/user/UserService'

onMounted(() => {
  login1()
})

const login1 = async () => {
  console.log(import.meta.env.MODE); // 获取当前模式，比如 development 或 production
  console.log(import.meta.env.BASE_URL); // 获取基本URL
  console.log("LLL" + import.meta.env.VITE_API_BASE_URL)

  const loginParams = {
    username: 'test',
    password: '123',
  }
  const res = await UserService.login1(loginParams)
  console.log(res)
}


</script>
