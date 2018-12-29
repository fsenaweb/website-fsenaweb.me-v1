<template>
  <div>
    <transition name="fade">
      <h1 v-if="visible" class="logo"><router-link to="/">fsenaweb</router-link><span class="me">.me</span></h1>
    </transition>
    <transition name="fade">
      <nav v-if="visible" class="fixMenu">
        <ul>
          <li><router-link to="/sobre">Quem sou</router-link></li>
          <li>></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li>></li>
          <li><router-link to="/portfolio">Portfólio</router-link></li>
          <li>></li>
          <li><router-link to="/contatos">Contatos</router-link></li>
        </ul>
      </nav>
    </transition>
    <menu-mob />
    <div v-show="sociais">
      <transition name="fade">
        <div class="social" v-if="visible">
          <a href="http://www.fb.me/fsenaweb" target="_blank" rel="noopener noreferrer" title="Link para o nosso perfil no facebook"><i class="fab fa-facebook"></i></a>
          <a href="http://www.instagram.com/fsenaweb" target="_blank" rel="noopener noreferrer" title="Link para o nosso perfil no instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/fsenaweb/" target="_blank" rel="noopener noreferrer" title="Link para o nosso perfil no github"><i class="fab fa-github-square"></i></a>
          <a href="https://twitter.com/fsenaweb" target="_blank" rel="noopener noreferrer" title="Link para o nosso perfil no twitter"><i class="fab fa-twitter-square"></i></a>
          <a href="http://www.linkedin.com/in/fsenaweb" target="_blank" rel="noopener noreferrer" title="Link para o nosso perfil no linkedin"><i class="fab fa-linkedin"></i></a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MenuMob from './MenuMob'
export default {
  name: 'App',
  props: {
    sociais: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: true,
      options: {
        scrollingSpeed: 700,
        lockAnchors: true,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4']
      }
    }
  },
  components: {
    MenuMob
  },
  beforeMount () {
    window.addEventListener('scroll', this.displayMenu, {passive: true})
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    moveSlide (slide) {
      return this.$refs.fullpage.api.moveTo(slide)
    },
    displayMenu () {
      if (window.scrollY > 200) {
        this.visible = false
      } else {
        this.visible = true
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900');
  html, body, div, span{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  .logo{
    color: #FFF;
    top: 6vh;
    left: 5vw;
    position:fixed;
    z-index: 10000;
  }
  .logo a {
    color: #FFF;
    text-decoration: none;
  }
  ul {
    width: 43vw;
    top: 3vh;
    right: 5vw;
    float: right;
    position: fixed;
    z-index: 999;
    background-color: rgba(0,0,0, 0.5);
    border-radius: 15px;
  }
  ul:hover li:not(:hover) {
    opacity: 0.3;
    transition: 0.3s;
  }
  ul li a:hover {
    border-bottom: 1.5px solid #FFF;
    padding-bottom: 2.6px;
  }
  ul li {
    list-style: none;
    display: inline-block;
    margin: 0.7em;
    color: #FFF;
  }
  ul li a {
    font-family: 'Roboto', sans-serif;
    font-size: 1.3em;
    font-weight: 700;
    color: #FFF;
    text-decoration: none;
  }
  .social {
    position: fixed;
    bottom: 10vh;
    right: 5vw;
    z-index: 9999;
  }
  .social i {
    color: #FFF;
    font-size: 2em;
    margin: 0 0.2em;
    transition: 0.4s;
  }
  .social i:hover {
    color: #FFD21C;
  }
  .me {
    color: #20b2aa;
    font-size: 1.1rem;
    text-align: left;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @media screen and (max-width: 1200px) {
    .logo{
      position:fixed;
      z-index: 999;
    }
    .social {
      position: fixed;
      z-index: 99;
    }
    .social i:hover {
      color: #FFF;
    }
    .fixMenu {
      display: none;
    }
  }
</style>
