<template>
<el-form @submit.native.prevent="saveNote" ref="form" :model="article" label-width="100px">
  <el-form-item label="便签标题">
    <el-input v-model="note.title"></el-input>
  </el-form-item>
  
  <el-form-item label="便签内容">
    <el-input type="textarea" v-model="note.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        note: {
         
        }
      }
    },
    methods: {
      saveNote() {
        this.$http.post('notes',this.note).then(res =>{
        this.$message({
          message: '便签创建成功',
          type: 'success'
        });
        this.$router.push('/notes/index')
        })
      }
    }
  }
</script>