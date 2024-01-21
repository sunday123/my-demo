<template>
  <p></p>
<button @click="clickMe2">点击我</button>
  <p>hello222</p>
</template>

<script>
// import router from "../../router";
import {useRoute} from 'vue-router'

export default {
  name: 'hello2',
  props: {
    msg: String
  },
  setup() {
    const router = useRoute()
    const query = router.params.num

    const clickMe2 = () => {
      console.log("点击hello2:"+query)
    }

    return {
      clickMe2
    };
  }
}
</script>