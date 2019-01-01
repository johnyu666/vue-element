<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>

        </el-menu>
      </el-aside>


      <el-main>
        <el-table
          show-summary
          :data="books"
          stripe
          style="width: 100%">

          <el-table-column
            sortable
            prop="id"
            label="ID"
            width="60">
          </el-table-column>


          <el-table-column
            sortable
            prop="name"
            label="书名"
            width="160">
          </el-table-column>


          <el-table-column
            prop="price"
            label="单价" width="60">
          </el-table-column>

          <el-table-column
            sortable
            prop="count"
          label="数量">
           <template slot-scope="scope">
             <el-input-number v-model="scope.row.count" :min=0 :max="10"></el-input-number>
           </template>
        </el-table-column>


          <el-table-column
            label="操作">
            <template slot="header" slot-scope="scope">
              <el-input
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button @click="deleteBook(book)" type="text" size="small">删除</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  let books = [{id: 1, name: "时代广场的蟋蟀", price: 18, count: 1}, {id: 2, name: "少年侦探社", price: 20, count: 1}]
  export default {
    name: "BookManager",
    data() {
      return {books:books}
    },
    methods: {
      deleteBook(book){
        let index=this.books.indexOf(book)
        this.books.splice(index,1)
      }
    },
    computed:{
      total(){
        return this.books.reduce((init,book)=>book.price*book.count+init,0)
      }
    }
  }
</script>

<style scoped>
  .el-container {
    margin: 0px;
  }
  .el-main table{
    width: 100%;
    border: 2px solid gray;
    border-collapse: collapse;
  }
  .el-main table td,th{
    text-align: center;
    border: 1px solid gray;
  }

</style>
