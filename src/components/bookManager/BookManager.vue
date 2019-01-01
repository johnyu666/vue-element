<template>
  <div>
    <!--两秒钟后出现-->
    <el-container v-loading="loading">
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
      <el-footer>
        <el-row>
          <el-col :width="12">
            <div class="total">
              总价：$ {{total}}
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  let books = [{id: 1, name: "时代广场的蟋蟀", price: 18, count: 1},
    {id: 2, name: "少年侦探社", price: 20, count: 3},
    {id: 3, name: "幸福了吗？", price: 54, count: 2},
    {id: 4, name: "七天", price: 32, count: 2},
  ]
  export default {
    name: "BookManager",

    //模拟从网络抓取数据，首先出现的是"加载进度"
    created(){
        this.loading=true;
        setTimeout(()=>{
          this.loading=false;
          this.books=books;
        },1000)
    },
    data() {
      return {books:[],loading:false}
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
  .total{
    text-align: right;
  }

</style>
