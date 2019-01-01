<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu active-text-color="red" :default-active="activeIndex">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title"><router-link to="/books/">图书管理器</router-link></span>
          </el-menu-item>

          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/books/dashboard">数据图表</router-link></span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Index",
      data(){
          return {activeIndex:'1'}
      }
    }
</script>

<style scoped>

</style>
