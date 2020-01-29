<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img :src="blog.user.avatar" alt="blog.user.username" />
         
          <figcaption> <router-link :to="`/user/${blog.user.id}`">{{blog.user.username}}</router-link></figcaption>
        </figure>
        <h3>
          {{blog.title}}
          <span>{{friendlyDate(blog.createdAt)}}</span>
        </h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination background layout="prev, pager, next" :total="total"
        @current-change="onPageChange"
        :current-page.sync="page"
      ></el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
