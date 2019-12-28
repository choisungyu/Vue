<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>


<script>
// import ~from 과 같다
const rspCords = {
  rock: "0",
  sissros: "-142px",
  paper: "-284px"
};

let interval = null;
export default {
  data() {
    return {
      imgCord: rspCords.sissros,
      result: "",
      score: 0
    };
  },

  // 계산하는 로직, 곁따리들 => chaching 처리
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCord} 0`
      };
    }
  },

  methods: {
    onClickButton(choice) {}
  },

  beforeUpdate() {
    console.log('beforeupdate')
  },

  updated() {
    console.log('updated');
    
  },
  mounted() {
    interval = setInterval(() => {
      if (this.imgCord === rspCords.rock) {
        this.imgCord = rspCords.sissros;
      } else if (this.imgCord === rspCords.sissros) {
        this.imgCord = rspCords.paper;
      } else if (this.imgCord === rspCords.paper) {
        this.imgCord = rspCords.rock;
      }
    }, 100);
  },

  beforeDestroy() {
    clearInterval(interval);
  },

  
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>