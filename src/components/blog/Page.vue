<template>
  <div>
    <div v-if="loading" class="loading">
      <img src="../../assets/loading-site.gif" alt="Carregando...">
    </div>
    <div v-else>
      <Menu :sociais="false"/>
        <transition appear name="fade">
          <div v-if="move" class="topo">
            <h1>{{ news.title }}</h1>
            <h6>{{ newData(news.date) }}</h6>
          </div>
        </transition>
      <div class="body">
        <div v-html="news.content" class="content">
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
  name: 'Blog',
  data () {
    return {
      move: false,
      loading: true,
      news: {
        title: '',
        content: '',
        date: ''
      }
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
  methods: {
    newData (data) {
      let date = new Date(data)
      let dd = date.getDate()
      let mm = date.getMonth() + 1
      let yyyy = date.getFullYear()
      if (dd < 10) { dd = '0' + dd }
      if (mm < 10) { mm = '0' + mm }
      return dd + '/' + mm + '/' + yyyy
    }
  },
  mounted () {
    axios.get(`${process.env.SITE_URL}/wp-json/wp/v2/posts?slug=${this.$route.params.id}`)
      .then(response => {
        this.news = {
          title: response.data[0].title.rendered,
          content: response.data[0].content.rendered,
          date: response.data[0].date
        }
        this.loading = false
        this.move = true
      })
  }
}
</script>

<style scoped>
  .topo {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    background: url("/static/assets/bckgr2.jpg");
    background-attachment: fixed;
    background-position: 70% 40%;
    background-repeat: no-repeat;
    background-size: 100vw;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .topo h1 {
    width: 80%;
    margin-top: 3.5%;
    display: block;
    color: #fff;
    font-size: 2.5em;
  }
  .topo h6 {
    color: #fff;
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
    width: 75%;
    padding: 4%;
    justify-content: center;
    color: #000;
    align-content: center;
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
      background-size: 100vw 60vh;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .topo h1 {
      width: 85%;
      display: block;
      color: #000;
      font-size: 1.7em;
      padding-top: 8vh;
    }
    .topo h6 {
      display: none;
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
      background-position: top left;
      background-repeat: repeat-y;
      background-size: 110vw 70vh;
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
