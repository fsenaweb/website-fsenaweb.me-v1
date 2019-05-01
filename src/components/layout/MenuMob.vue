<template>
    <div>
      <nav class="mobMenu">
        <a href="#" @click.prevent="show = !show" title="Acesso ao menu mobile"><i :class="[show ? 'fas fa-times' : 'fas fa-bars']"></i></a>
      </nav>
      <transition name="mob-menu">
        <div v-if="show" class="menu-in">
          <div class="content-menu">
            <router-link to="/">Início</router-link>
            <router-link to="/sobre">Quem sou</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/portfolio">Portfólio</router-link>
            <router-link to="/contatos">Contatos</router-link>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'MenuMob',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
  .mobMenu {
    display: none;
  }
  @media screen and (max-width: 1200px){
    .mobMenu {
      display: flex;
      top: 6vh;
      right: 7vw;
      float: right;
      position: fixed;
      z-index: 9999;
      font-size: 2em;
    }
    .mobMenu a {
      color: #000;
    }
    .menu-in {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: rgba(255,255,255,0.95);
      z-index: 999;
      top: 0;
      right: 0;
    }
    .content-menu {
      margin: 12vh 0 0 10vw;
      font-size: 1.7em;
    }
    .content-menu a {
      color: #000;
      width: 80vw;
      float: left;
      text-decoration: none;
      line-height: 2em;
    }
    .content-menu a:hover {
      background-color: rgba(0,0,0,0.1);
    }
    .mob-menu-enter-active {
      animation: menu-in .9s;
    }
    .mob-menu-leave-active {
      animation: menu-in .9s reverse;
    }
    @keyframes menu-in {
      0% {
        width: 1vw;
        height: 2vh;
      }
      50% {
        width: 100vw;
        height: 2vh;
      }
      100% {
        width: 100vw;
        height: 100vh;
      }
    }
  }
</style>
