<template>
<div>
  <el-carousel>
    <el-carousel-item v-for="src in imgs" :key="src">
      <img :src=src alt="">
    </el-carousel-item>
  </el-carousel>
  <el-row>
    <el-col  :span="8">
      <div class="a"></div>
    </el-col>
    <el-col  :span="8"><div class="a"></div></el-col>
    <el-col  :span="8"><div class="a"></div></el-col>
  </el-row>
  </div>
</template>

<script>
  let images=[require('../assets/router.png'),require('../assets/components.png'),require('../assets/vuex.png')]
    export default {
      name: "Home",
      data(){
          return {imgs:images}
      }
    }
</script>

<style scoped>
  .el-col{
    padding: 1px;
  }
  .a{
    height: 150px;
    background-color: lightgray;
    border-radius: 6px;

  }
  img{
    height:300px;
    width: 1024px;
  }
</style>
