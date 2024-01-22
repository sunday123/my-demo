<template>


<el-form>
  <el-input  name="username" v-model="username" placeholder="username"></el-input>
  <el-input type="password" name="password" placeholder="password" v-model="password" ></el-input>
  <el-button @click="goLogin">login</el-button>
</el-form>
  <p></p>
  <el-button @click="isLogin">isLogin</el-button>
  <p></p>
  <el-button @click="tokenInfo">tokenInfo</el-button>
  <p></p>
  <el-button @click="logout">logout</el-button>
</template>

<script>
import { ref } from 'vue';
import {UserService} from '../../api/sys/user/UserService'
import router from "../../router";
import axios  from "axios";
import {ElMessage} from "element-plus";



  export default {
    name: 'login',
    // data(){
    //   return {
    //     username: '',
    //     password: '',
    //   }
    // },

    setup(){
      const username = ref('');


      const password = ref('');
      const goLogin = async () => {
        console.log(import.meta.env.MODE); // 获取当前模式，比如 development 或 production
        console.log(import.meta.env.BASE_URL); // 获取基本URL
        console.log("LLL" + import.meta.env.VITE_API_BASE_URL)

        console.log("username:"+username +"|password:"+password)

        const loginParams = {
          username: username.value,
          password: password.value,
        }
        const res = await UserService.login1(loginParams)
        console.log("result:"+res.data)
        if (res.code != 200){
          ElMessage.warning("FAIL !=200")
        }
        const res2 = await UserService.tokenInfo();
        if (res2.data.isLogin == false){
          ElMessage.warning("FAIL isLogin false")
        }
        console.log("tokenInfo:"+JSON.stringify(res2.data))
        const tokenValue=res2.data.tokenValue
        localStorage.setItem("satoken",tokenValue)
        console.log("tokenInfo:"+tokenValue)
        axios.defaults.headers.common['satoken'] = `${tokenValue}`;
        await router.push({name: 'home'});
      }
      const isLogin = async () => {
        const res = await UserService.isLogin();
        console.log("isLogin:"+res.msg)
      }

      const tokenInfo = async () => {
        const res = await UserService.tokenInfo();
        console.log("tokenInfo:"+JSON.stringify(res.data))
        console.log("tokenInfo:"+res.data.tokenValue)
      }

      const logout = async () => {
        const res = await UserService.logout();
        localStorage.removeItem("satoken")

        console.log("logout:"+res)
      }

      return {
        goLogin,
        username,
        password,
        isLogin,
        tokenInfo,
        logout,
      };
    }
  }







</script>
