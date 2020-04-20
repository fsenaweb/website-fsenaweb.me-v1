<template>
  <div>
    <div v-if="loading" class="loading">
      <img src="../../assets/loading-site.gif" alt="Carregando...">
    </div>
    <div v-else>
      <Menu :sociais="false"/>
      <transition appear name="fade">
        <div v-if="move" class="topo">
          <h1>{{ $t('portfolio.title')}}</h1>
          <h6>{{ $t('portfolio.subtitle')}}</h6>
        </div>
      </transition>
      <div class="body">
        <h1>{{ $t('portfolio.description.part2')}}</h1>
        <Medium />
        <Github />
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
  import Medium from './Medium'
  import Github from './Github'

  export default {
    name: 'Portfolio',
    data () {
      return {
        loading: true,
        move: false
      }
    },
    head: {
      title: {
        inner: 'Nosso Portfólio - Desenvolvimento de site, sistema para internet, aplicativos para internet e intranet, Progressive Web App (PWA), Single Page Application (SPA)'
      },
      // Meta tags
      meta: [
        {
          name: 'application-name',
          content: 'fsenaweb.me'
        },
        {
          name: 'description',
          content: 'Nosso Portfólio - Desenvolvimento de site, sistemas para internet, aplicativos para internet e intranet',
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
          c: 'fsenaweb.me - Nosso Portfólio - Desenvolvimento de site, sistemas para internet, aplicativos para internet e intranet'
        },
        {
          property: 'og:title',
          content: 'fsenaweb.me - Nosso Portfólio - Desenvolvimento de site, sistemas para internet, aplicativos para internet e intranet'
        }
      ],
      // link tags
      link: [
        {
          rel: 'canonical',
          href: 'http://fsenaweb.me/#/portfolio/',
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
      Medium,
      Github,
      Menu
    },
    mounted () {
      this.loading = false
      this.move = true
    }
  }
</script>

<style scoped>
  .topo {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 37vh;
    background: url("/static/assets/bckgr3.jpg");
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
    display: block;
    color: #fff;
    font-size: 3.5vmax;
    padding-top: 12vh;
  }

  .topo h6 {
    color: #fff;
    font-size: 1.5vmax;
  }

  .loading {
    display: flex;
    width: 98vw;
    height: 97vh;
    background-color: rgba(255, 255, 255, 0.3);
    justify-content: center;
    align-items: center;
    color: #000;
  }

  .body {
    display: flex;
    flex-direction: column;
    width: 87vw;
    min-height: 92vh;
    background-color: #FFF;
    margin: 0 auto;
  }

  .body h1 {
    width: 100%;
    font-size: 1.4em;
    margin: 50px 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 95%;
    min-height: 100vh;
    color: #000;
    margin: 0 2em 4em 2em;
  }

  .content .box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }

  .box img {
    margin: 0.5em;
    margin-right: 1.5em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: height .3s;
    transition-timing-function: linear;
    transition-delay: 1s;
  }

  .fade-enter, .fade-leave-to {
    height: 100vh;
  }

  .footer {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 30vh;
    background: url("/static/assets/bckgr3.jpg");
    background-attachment: fixed;
    background-position: 50% 77%;
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
      background: url("/static/assets/bckgr3.jpg");
      background-attachment: fixed;
      background-position: 0px 0px;
      background-repeat: no-repeat;
      background-size: 130vw 50vh;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .topo h1 {
      width: 85%;
      display: block;
      color: #fff;
      font-size: 5vmax;
      padding-top: 8vh;
    }

    .topo h6 {
      color: #fff;
      font-size: 2.5vmax;
      padding: 1vw;
    }

    .body {
      margin-bottom: 10%;
    }

    .body h1 {
      width: 100%;
      font-size: 1.1em;
      margin: 4% 0%;
    }

    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: inherit;
      justify-content: space-between;
      color: #000;
      align-content: center;
    }

    .column {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 85%;
      height: 68vh;
      margin: 10px;
      padding: 5%;
      border: 1px solid #e2e2e2;
      border-radius: 0 0 10px 10px;
    }

    .column:hover {
      box-shadow: 3px 3px 5px #F1F1F1;
    }

    .column > .img {
      width: 100%;
      height: 40%;
      margin-bottom: 10%;
      border: 1px solid #000;
    }

    .column > .text {
      color: #777;
      min-height: 40%;
      margin-bottom: 10%;
      font-size: 0.86em;
      overflow: hidden;
    }

    .column > .btn {
      width: 100%;
      height: 10%;
      border-radius: 10px;
      background-color: #FFF;
      border: 1px solid #CCC;
      transition: background-color .5s;
    }

    .column > .btn:hover {
      background-color: #CCC;
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
      background: url("/static/assets/bckgr3.jpg");
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
