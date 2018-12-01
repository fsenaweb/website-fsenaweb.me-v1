<template>
  <div class="section">
    <div class="modulo2" >
      <div class="flex-container">
        <div v-for="post in posts" :key="post.id" class="flex-box-news">
          <h1><router-link :to="{ name: 'PageBlog', params: { id: post.slug }}">{{ post.title.rendered }}</router-link></h1>
          <router-link :to="{ name: 'PageBlog', params: { id: post.slug }}" class="flex-button-more">Leia Mais</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'part2',
  data () {
    return {
      posts: ''
    }
  },
  mounted () {
    axios.get(`${process.env.SITE_URL}/wp-json/wp/v2/posts?per_page=3`)
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>

<style scoped>
  .modulo2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url("/static/assets/bckgr2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position:relative;
  }
  .flex-container {
    display: flex;
    width: 85vw;
    height: 100vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .flex-box-news {
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-start;
    flex-basis: 45vh;
    background-color: rgba(255,255,255,0.2);
    margin: 1.7%;
    height: 30vh;
    padding: 1.3em;
    overflow: hidden;
  }
  .flex-box-news h1 {
    width: 100%;
    min-height: 18vh;
    border-bottom: 1px dashed #FFF;
    color: #FFF;
    line-height: 1em;
    font-size: 1.9vmax;
    overflow: hidden;
  }
  .flex-box-news h1 a {
    color: #FFF;
    text-decoration: none;
  }
  .flex-button-more {
    display: flex;
    float: right;
    width: 40%;
    height: 5vh;
    border-radius: 30px;
    margin: 6%;
    background-color: rgba(255,255,255,0);
    border: 1px solid #FFF;
    color: #000;
    font-size: 0.8em;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: background-color 0.7s, color 0.7s;
  }
  .flex-button-more:hover {
    background-color: rgba(255,255,255,1);
    color: #000;
  }
  @media screen and (max-width: 700px) {
    .flex-container {
      display: flex;
      width: 85vw;
      height: 58vh;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      overflow: hidden;
      margin-top: -30px;
    }
    .flex-box-news {
      flex-grow: 1;
      justify-content: flex-start;
      align-items: flex-start;
      flex-basis: 60vh;
      background-color: rgba(255,255,255,0.3);
      margin: 0.5px;
      height: 13vh;
      padding: 1em;
    }
    .flex-box-news h1 {
      width: 100%;
      min-height: 8.5vh;
      border-bottom: 1px dashed #FFF;
      color: #000;
      line-height: 1em;
      font-size: 1.2em;
    }
    .flex-button-more {
      display: flex;
      float: right;
      width: 35%;
      height: 4vh;
      border-radius: 30px;
      margin: 2%;
      background-color: rgba(255,255,255,0);
      border: 1px solid #FFF;
      color: #FFF;
      font-size: 0.8em;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      transition: background-color 0.7s, color 0.7s;
    }
    .flex-button-more:hover {
      background-color: rgba(255,255,255,1);
      color: #000;
    }
  }
</style>
