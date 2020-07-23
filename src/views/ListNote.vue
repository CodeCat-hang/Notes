<template>
    <div>
      <el-table :data="notes">
        <el-table-column prop="title" label="标题" width="140"></el-table-column>
        <el-table-column prop="body" label="内容"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150"
        >
          <template slot-scope="scope">
            <el-button @click="edit(scope.row._id)" type="success" size="small">编辑</el-button>
            <el-button @click="remove(scope.row._id)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      notes:[]
    }
  },
  created(){
      this.fetch();
  },
  methods:{
    remove(id){
      this.$http.delete(`notes/${id}`).then(res=>{
        this.$message({
          message:"文章删除成功",
          type:"success"
        });
        this.fetch();
      });
    },
    edit(id){
      this.$router.push(`/notes/${id}/edit`)
    },
    fetch(){
      this.$http.get('notes').then(res=>{
        this.notes=res.data;
      });
    },
  }
}
</script>