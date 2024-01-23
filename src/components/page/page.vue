<template>
  <div>
    <ul>
      <li v-for="item in paginatedData" :key="item.index" >
        {{ item.index }} - {{ item.name }} - {{ formatDate(item.date) }}
      </li>
    </ul>
    <button  @click="prevPage" :disabled="disablePrevPage" >Previous</button>
    <span>{{ currentPage }}</span>
    <button  @click="nextPage" :disabled="disableNextPage">Next</button>
  </div>
</template>

<script>
import {reactive, onMounted, computed, ref} from 'vue';
import {UserService} from '../../api/sys/user/UserService'


export default {
  setup() {
    const state = reactive({
      data: [],
      currentPage: 1,
      pageSize: 10,
      totalPages: 1
    });


    const fetchData = async () => {
      const queryParams = {
        pageNo: state.currentPage,
        pageSize: state.pageSize ,
      }
      const response = await UserService.query(queryParams)
      console.log("items:"+JSON.stringify(response.data.total))
      state.data = response.data.items;
      state.totalPages = Math.ceil((response.data.total +1 )/ state.pageSize);
      // console.log("state.totalPages:"+JSON.stringify(state))
      currentPage.value=state.currentPage;

      if (state.currentPage>1){
        disablePrevPage.value=false;
      }else {
        disablePrevPage.value=true;
      }
      if (state.currentPage<state.totalPages){
        disableNextPage.value=false;
      }else {
        disableNextPage.value=true;
      }
    };

    const prevPage = () => {
      if (state.currentPage>1){
        state.currentPage -= 1;
        fetchData();
      }
    };

    const nextPage = () => {
      if (state.currentPage<state.totalPages){
        state.currentPage += 1;
        fetchData();
      }

    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    onMounted(() => {
      fetchData();
    });

    const paginatedData = computed(() => {
      return state.data;
    });

    const disablePrevPage = ref(false);
    const disableNextPage = ref(false);
    const currentPage = ref(1);

    return {
      paginatedData,
      currentPage,
      totalPages: state.totalPages,
      prevPage,
      nextPage,
      disablePrevPage,
      disableNextPage,
      formatDate,
    };
  }
};
</script>

