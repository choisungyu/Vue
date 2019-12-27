<template>
  <div>
    <div id="screen" :class="state" @click="onClickState">{{message}}</div>
    <div>
      <div>평균시간 : {{}}</div>
      <button @click="onReset">리셋버튼</button>
    </div>
  </div>
</template>


<script>
// import ~from 과 같다
export default {
  data() {
    return {
      reset:'',
      state: 'waiting',
      message:'클릭해서 시작',
    


      
    };
  },
  methods: {
    onReset() {

    },

    onClickState() {
      if (this.state === 'waiting') {
        this.state = 'ready';

      } else if (this.state === 'ready') {
        this.state = 'now';
        
      } else if (this.state === 'now') {
        this.state = 'waiting';
        
      }
    },
    
  }
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
  color:white;
}
#screen.now {
  background-color: greenyellow;
}
</style>