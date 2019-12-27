<template>
  <div>
    <div id="screen" :class="state" @click="onClickState">{{message}}</div>
    <!-- if(result.length > 0) ? display sub div: none -->
    <template v-if="result.length"> 
      <div>평균시간 : {{average}}ms</div>
      <button @click="onReset">리셋버튼</button>
    </template>
  </div>
</template>


<script>
// import ~from 과 같다
let startTime = 0;
let endTime = 0;
let timeOut = null;
export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작"
    };
  },

  computed: {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    }
  },

  methods: {
    onReset() {
      this.result = [];
    },

    onClickState() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "초록색이 되면 클릭";
        timeOut = setTimeout(() => {
          this.state = "now";
          this.message = "지금 클릭!";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000);
      } else if (this.state === "ready") {
        clearTimeout(timeOut);
        this.state = "waiting";
        this.message = "너무 성급11";
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "클릭해서 시작";
        this.result.push(endTime - startTime);
      }
    }
  },
};
</script>

<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>