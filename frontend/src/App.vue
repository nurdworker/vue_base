<template>
  <h1>hello App.vue</h1>
  <router-view></router-view>
  <button v-on:click="test()">axios test</button>
  <button type="button" class="btn btn-primary">부트스트랩 테스트</button>
  <button type="button" class="btn btn-primary">클론 테스트</button>
  <div class="sassTest">
    <p>sassTest_blue</p>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    ///여기가 데이터

    const state = reactive({
      data: [],
    });

    ///여기가 데이터

    ///여기가 메서드

    const test = () => {
      axios.get("/api/test").then((res) => {
        alert(res.data);
      });
    };
    ///여기가 메서드

    return {
      state,
      test,
    };
  },
  // 여기에 컴포넌트
};
</script>

<style lang="scss" scoped>
.sassTest {
  p {
    color: blue;
  }
}
</style>
