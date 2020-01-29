<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows="3" v-model="content" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows="20" v-model="description" :autosize="{ minRows: 6, maxRows: 8}"></el-input>
    <p class="msg">限30个字</p>
    <p>
      是否设为首页
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="updateBlog">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
