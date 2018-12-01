<template>
  <div>
    <div v-if="loading" class="loading">
      <img src="../../assets/loading-site.gif" alt="Carregando...">
    </div>
    <div v-else>
      <Menu :sociais="false"/>
      <transition appear name="fade">
        <div v-if="move" class="topo">
          <h1>Acompanhe nosso Blog</h1>
        </div>
      </transition>
      <div class="body">
        <div class="content">
          <router-link v-for="n in news" :key="n.id" :to="`/blog/${n.slug}`">
          <div class="news">
            <div class="box1">
              <h1><router-link :to="`/blog/${n.slug}`">{{ n.title.rendered}}</router-link></h1>
              <h2>Por {{ n._embedded.author[0].name}}</h2>
              <h6>Em {{ newData(n.date) }}</h6>
            </div>
            <div class="box2" v-for="img in n._embedded['wp:featuredmedia']" :key="img.id">
              <img :src="img.source_url" alt="">
            </div>
          </div>
          </router-link>
          <div class="pagination">
            <button v-for="(n, index) in pages" :key="n.random" @click.prevent="selectPage(index + 1)" class="btnPage">
              {{ index + 1 }}
            </button>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="invert">
          <h1>+55 84 99995-9216</h1>
          <h2><a href="mailto:contato@fsenaweb.me" target="_blank">contato@fsenaweb.me</a></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/layout/Menu'
import axios from 'axios'
export default {
  name: 'BlogIndex',
  data () {
    return {
      loading: true,
      move: false,
      news: '',
      totalNews: 0,
      pages: 1,
      passBtn: true,
      backBtn: true
    }
  },
  head: {
    title: {
      inner: 'Acompanhe nosso Blog'
    },
    // Meta tags
    meta: [
      {
        name: 'description',
        content: 'Experiência em desenvolvimento de projetos para web em todos os segmentos',
        id: 'desc'
      },
      // Twitter
      {
        name: 'twitter:title',
        content: 'fsenaweb.me'
      },
      // with shorthand
      {
        n: 'twitter:description',
        c: 'fsenaweb.me - Blog - Experiência em desenvolvimento de projetos para web em todos os segmentos'
      },
      {
        property: 'og:title',
        content: 'fsenaweb.me - Blog - Experiência em desenvolvimento de projetos para web em todos os segmentos'
      }
    ],
    // link tags
    link: [
      {
        rel: 'canonical',
        href: 'http://fsenaweb.me/#/blog/',
        id: 'canonical'
      },
      {
        rel: 'icon',
        href: '/static/assets/favicon-16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        rel: 'icon',
        href: '/static/assets/favicon-32.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ]
  },
  components: {
    Menu
  },
  mounted () {
    axios.get(`${process.env.SITE_URL}/wp-json/wp/v2/posts?_embed&per_page=5`)
      .then(response => {
        this.news = response.data
        this.loading = false
        this.move = true
      })
    axios.get(`${process.env.SITE_URL}/wp-json/wp/v2/posts`)
      .then(response => {
        this.totalNews = response.data.length
        this.pages = Math.ceil(this.totalNews / 5)
      })
  },
  methods: {
    newData (data) {
      let date = new Date(data)
      let dd = date.getDate()
      let mm = date.getMonth() + 1
      let yyyy = date.getFullYear()
      if (dd < 10) { dd = '0' + dd }
      if (mm < 10) { mm = '0' + mm }
      return dd + '/' + mm + '/' + yyyy
    },
    selectPage (page) {
      axios.get(`${process.env.SITE_URL}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=3`)
        .then(response => {
          this.news = response.data
        })
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Oswald');
  .topo {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    background: url("/static/assets/bckgr2.jpg");
    background-attachment: fixed;
    background-position: 50% 77%;
    background-repeat: no-repeat;
    background-size: 100vw;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .topo h1 {
    width: 85%;
    margin-top: 3%;
    display: block;
    color: #FFF;
    font-size: 3.5vmax;
  }
  .topo h6 {
    color: #FFF;
    font-size: 1.3rem;
  }
  .loading {
    display: flex;
    width: 98vw;
    height: 97vh;
    background-color: rgba(255,255,255,0.3);
    justify-content: center;
    align-items: center;
    color: #000;
  }
  .body {
    display: flex;
    width: 100vw;
    min-height: 60vh;
    background-color: #FFF;
    justify-content: center;
    color: #FFF;
    align-self: left
  }
  .content {
    width: 70%;
    padding: 4%;
    justify-content: center;
    align-content: center;
    color: #000;
  }
  .news {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 25vh;
    margin: 2.9em 0;
    padding: 2%;
    border-bottom: 1px solid #E9E9E9;
    box-shadow: 5px 5px 8px #FFF;
  }
  .news:hover {
    box-shadow: 5px 5px 8px #CCC;
    border: 1px solid #E9E9E9;
    height: 25vh;
    margin: 2.9em 0;
    padding: 2%;
    text-decoration: none;
  }
  .box1 {
    width: 65%;
    overflow: hidden;
  }
  .box1 h1{
    font-family: 'Oswald', sans-serif;
    font-size: 1.8em;
    margin-bottom: 1.5em;
    line-height: 1.2em;
  }
  .box1 h1 a {
    color: #666;
    text-decoration: white;
    transition: color .4s;
  }
  .box1 h1 a:hover {
    color: #000;
  }
  .box1 h2 {
    font-size: 2vh;
    font-weight: normal;
    color: #000;
  }
  .box1 h6{
    font-size: 1.5vh;
    text-decoration: none;
    color: #000;
  }
  .box2 {
    width: 30%;
    margin-left: 5%;
    overflow: hidden;
  }
  .box2 img {
    width: 300px;
    height: 185px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .btnPage {
    border: none;
    box-shadow: 2px 2px 3px #CCC;
    border-bottom: 1px solid #CCC;
    border-radius: 5px;
    padding: 2%;
    margin-left: 10px;
    background-color: #FFF;
    font-size: 1em;
    transition: background-color .4s;
  }
  .btnPage:hover {
    background-color: #F1F1F1;
  }
  .btnPage:active {
    border-color: #CCC;
    background-color: #AAA;
  }
  .fade-enter-active, .fade-leave-active {
    transition: height .5s;
    transition-timing-function: linear;
    transition-delay: 1s;
  }
  .fade-enter, .fade-leave-to {
    height: 68vh;
  }
  .footer {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 30vh;
    background: url("/static/assets/bckgr2.jpg");
    background-attachment: fixed;
    background-position: 100% 42%;
    background-repeat: no-repeat;
    background-size: 100vw;
    justify-content: center;
    align-content: center;
    align-self: center;
  }
  .invert {
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 100vh;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    text-align: center;
    line-height: 1.5em;
  }
  .invert h1 {
    color: #FFF;
    font-size: 1.5em;
    text-shadow: 2px 1px 1px #000;
  }
  .invert h2 {
    color: #FFF;
    font-size: 1em;
    font-weight: lighter;
    text-shadow: 2px 1px 1px #000;
  }
  .invert h2 a {
    color: #FFF;
    text-decoration: none;
  }
  .invert h3 {
    color: #FFF;
    font-size: 0.8em;
    font-weight: lighter;
    text-shadow: 2px 1px 1px #000;
  }
  .invert h3 a {
    color: #FFF;
    text-decoration: none;
  }
  @media screen and (max-width: 700px) {
    .topo {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 35vh;
      background: url("/static/assets/bckgr2.jpg");
      background-attachment: fixed;
      background-position: 0px 0px;
      background-repeat: no-repeat;
      background-size: 120vw 50vh;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .topo h1 {
      width: 85%;
      display: block;
      color: #fff;
      font-size: 4.5vmax;
      padding-top: 8vh;
    }
    .topo h6 {
      display: none;
    }
    .body {
      display: flex;
      width: 100vw;
      min-height: 60vh;
      background-color: #FFF;
      justify-content: center;
      color: #FFF;
      align-self: left
    }
    .content {
      width: 90%;
      padding: 2%;
      justify-content: center;
      align-content: center;
      color: #000;
    }
    .news {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      width: 95%;
      height: 41vh;
      margin: 1.5em 0;
      padding: 1.5%;
      border-bottom: 2px solid #E9E9E9;
      box-shadow: none;
    }
    .news:hover {
      box-shadow: 5px 5px 8px #CCC;
      border: 1px solid #E9E9E9;
      height: 25vh;
      margin: 1.5em 0;
      padding: 1.5%;
      text-decoration: none;
    }
    .box1 {
      width: 100%;
      height: 70vh;
      overflow: hidden;
    }
    .box1 h1{
      font-family: 'Oswald', sans-serif;
      font-size: 1.2em;
      margin-bottom: 0.7em;
      margin-top: 0.6em;
      line-height: 1.1em;
    }
    .box1 h1 a {
      color: #666;
      text-decoration: none;
      transition: color .4s;
    }
    .box1 h1 a:hover {
      color: #000;
    }
    .box1 h2 {
      font-size: 1em;
      font-weight: normal;
    }
    .box2 {
      width: 100%;
      height: 100vh;
      margin-left: 5%;
      overflow: hidden;
      float: left;
    }
    .box2 img {
      width: 100%;
      height: 185px;
      margin-left: -20px;
    }
    .pagination {
      display: flex;
      justify-content: center;
      align-content: center;
      margin: 5vh 0;
    }
    .btnPage {
      width: 7vw;
      height: 6vh;
      border: none;
      box-shadow: 2px 2px 3px #CCC;
      border-bottom: 1px solid #CCC;
      border-radius: 5px;
      padding: 2%;
      margin-left: 10px;
      background-color: #FFF;
      font-size: 1em;
      transition: background-color .4s;
    }
    .btnPage:hover {
      background-color: #F1F1F1;
    }
    .btnPage:active {
      border-color: #CCC;
      background-color: #AAA;
    }
    .fade-enter-active, .fade-leave-active {
      transition: height .5s;
      transition-timing-function: linear;
      transition-delay: 1s;
    }
    .fade-enter, .fade-leave-to {
      height: 60vh;
    }
    .footer {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 20vh;
      background: url("/static/assets/bckgr2.jpg");
      background-attachment: fixed;
      background-position: top center;
      background-repeat: repeat-y;
      background-size: 140vw 90vh;
      justify-content: center;
      align-content: center;
      align-self: center;
    }
    .invert {
      display: flex;
      flex-direction: column;
      width: 70vw;
      height: 100vh;
      justify-content: center;
      align-content: center;
      margin: 0 auto;
      text-align: center;
      line-height: 1.5em;
    }
    .invert h1 {
      color: #FFF;
      font-size: 1.2em;
      text-shadow: 2px 1px 1px #000;
    }
    .invert h2 {
      color: #FFF;
      font-size: 1em;
      font-weight: lighter;
      text-shadow: 2px 1px 1px #000;
    }
    .invert h2 a {
      color: #FFF;
      text-decoration: none;
    }
    .invert h3 {
      color: #FFF;
      font-size: 0.8em;
      font-weight: lighter;
      text-shadow: 2px 1px 1px #000;
    }
    .invert h3 a {
      color: #FFF;
      text-decoration: none;
    }
  }
</style>
