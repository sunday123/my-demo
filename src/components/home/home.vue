<template>
  <h1>{{ msg }}</h1>
  <!--  <button @click="count++">count is: {{ count }}</button>-->
  <button id="countBtn" @click="increment">增加</button>
  <p></p>
  <p>编辑 components/home.vue 以测试热模块替换。</p>
  <button @click="goToHello">点击我跳转</button>

</template>


<script>
import router from "../../router";
import {ref} from "vue";


export default {
  name: 'home',
  props: {
    msg: String
  },

  setup() {
    let count = ref(0);

    const increment = () => {
      count.value++;
      document.getElementById('countBtn').innerText = "" + count.value;

      console.log("add:" + count.value)
    }

    const goToHello = () => {
      console.log("点击home")
      const num = count.value;
      router.push({name: 'page', params: {num}}); //hello2
    }



    return {
      increment,
      goToHello
    };
  }

}
</script>
