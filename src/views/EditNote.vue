<template>
<el-form @submit.native.prevent="saveNote" ref="form" :model="article" label-width="100px">
  <el-form-item label="便签标题">
    <el-input v-model="note.title"></el-input>
  </el-form-item>
  
  <el-form-item label="便签内容">
    <el-input type="textarea" v-model="note.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存修改</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        note: {}
      }
    },
    created(){
        this.fetch();
    },
    methods: {
      saveArticle() {
        this.$http.put(`notes/${this.$route.params.id}`,this.note).then(res =>{
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        this.$router.push('/notes/index')
        })
      },
      fetch(){
          this.$http.get(`notes/${this.$route.params.id}`).then(res=>{
              this.note=res.data
          })
      }
    }
  }
</script>