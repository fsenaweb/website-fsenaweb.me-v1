<template>
  <div v-if="loading" class="loading">
    <img src="../../assets/loading-site.gif" alt="Carregando...">
  </div>
  <div v-else>
    <Menu />
    <div id="menu" class="pontos">
      <i data-menuanchor="page1" @click="moveSlide(1)" class="far fa-circle"></i>
      <i data-menuanchor="page2" @click="moveSlide(2)" class="far fa-circle"></i>
      <i data-menuanchor="page3" @click="moveSlide(3)" class="far fa-circle"></i>
      <i data-menuanchor="page4" @click="moveSlide(4)" class="far fa-circle"></i>
    </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <part1></part1>
      <part2></part2>
      <part3></part3>
      <part4></part4>
    </full-page>
  </div>
</template>

<script>
import Part1 from '@/components/home/Part1'
import Part2 from '@/components/home/Part2'
import Part3 from '@/components/home/Part3'
import Part4 from '@/components/home/Part4'
import Menu from '@/components/layout/Menu'
export default {
  name: 'App',
  data () {
    return {
      loading: true,
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollingSpeed: 700,
        lockAnchors: true,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4']
      }
    }
  },
  head: {
    title: {
      inner: 'Progressive Web App (PWA), Sites, Sistemas Web, Single Page Application (SPA)'
    },
    // Meta tags
    meta: [
      { name: 'application-name',
        content: 'fsenaweb.me' },
      { name: 'description',
        content: 'Desenvolvimento de site, sistemas para internet, aplicativos para internet e intranet',
        id: 'desc'
      },
      // Twitter
      { name: 'twitter:title',
        content: 'fsenaweb.me'
      },
      // with shorthand
      { n: 'twitter:description',
        c: 'fsenaweb.me - Especializado em desenvolver soluções de web para o sucesso dos seus negócios'
      },
      { property: 'og:title',
        content: 'fsenaweb.me - Especializado em desenvolver soluções de web para o sucesso dos seus negócios'
      }
    ],
    // link tags
    link: [
      { rel: 'canonical',
        href: 'http://fsenaweb.me/#/',
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
    Menu, Part1, Part2, Part3, Part4
  },
  mounted () {
    this.loading = false
    window.scrollTo(0, 0)
  },
  methods: {
    moveSlide (slide) {
      return this.$refs.fullpage.api.moveTo(slide)
    }
  }
}
</script>

<style>
  .loading {
    display: flex;
    width: 98vw;
    height: 97vh;
    background-color: rgba(255,255,255,0.3);
    justify-content: center;
    align-items: center;
    color: #000;
  }
  .pontos {
    position: fixed;
    bottom: 11.5vh;
    left: 5vw;
    z-index: 9999;
  }
  .pontos i {
    color: #FFF;
    font-size: 1em;
    margin: 0 0.2em;
    border-radius: 50%;
    transition: 0.4s;
  }
  .pontos i.active, .pontos i:hover {
    background-color: #FFF;
    border-radius: 50%;
  }
  @media screen and (max-width: 700px) {
    .pontos {
      display: none;
    }
  }
</style>
