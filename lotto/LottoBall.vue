<template>
  <div class="ball" :style="{ background }">{{number}}</div>
</template>

<script>
export default {

  name: "LottoBall", // 있어도 되고 없어도 됨
  props: ['number'],
  data() {
    let background; // let 은 바깥에다
    return {
        background,
    };
  }
};
</script>

<style>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>