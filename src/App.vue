<template>
  <div id="app">
    <el-container>

      <el-header>
        <el-menu @select="handleSelect" :default-active="activeIndex" background-color="#3b5998" text-color="#ff0" active-color="green" active-text-color="red"  mode="horizontal">
          <el-menu-item  index="1">home</el-menu-item>
          <el-menu-item  index="2">图书管理器</el-menu-item>
          <el-submenu index="3">
            <template slot="title">设置</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
          <span class="tip">@Copyright:John Yu 2019</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data(){
      return {activeIndex:'1'}
    },
    methods:{
      // 水平一级导航，采用"编程式路由方式"（原因：不点文字时，显示时会有bug）
      handleSelect(key, keyPath) {
        switch (parseInt(key)) {
          case 1:
            this.$router.push('/')
            break;
          case 2:
            this.$router.push('books')
            break;
        }
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0px;
  }

  #app{
    width: 1024px;
    margin: 0px auto;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-header {
    padding: 0px;
    background-color: #3b5998;
  }
  .el-header nav{
    margin-left: 20px;
  }

  .el-header img{
      width: 50px;
      float: left;
  }
  .el-menu{
    width: 100%;
  }

  .el-main{
    padding: 2px 2px 2px 0px;

  }
  .el-footer{
    border-top: 1px solid #eee;
    text-align: center;
  }
  .tip{
    color: #ccc;
    font-size: 0.9ex;
  }




</style>
