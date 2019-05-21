<template>
  <div class="section">
    <div class="modulo1">
      <section class="description">
        <transition name="slide-fade">
          <h1 v-if="show">{{ $t('part1.welcomeTxt') }}<br>
          <h6>{{ $t('part1.skills') }}</h6></h1>
        </transition>
      </section>
        <div class="arrow">
          <i class="fas fa-caret-down"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'part1',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<style scoped>
  .modulo1 {
    width: 100vw;
    height: 100vh;
    background: url("/static/assets/bckgr1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
    position: relative;
  }
  .description {
    top: 40vh;
    right: 5vw;
    float: right;
    position: relative;
    z-index: 99;
    overflow: hidden;
  }
  .description h1 {
    width: 70%;
    float: right;
    color: #fff;
    font-size: 3.5vmax;
    font-weight: 700;
    text-align: right;
  }
  .description h6 {
    color: #FFF;
    font-size: 1.4vmax;
    font-weight: 400;
    margin-top: 1%;
    text-align: right;
  }
  .arrow {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 73vh;
    color: #FFF;
    font-size: 3.5em;
    font-weight: lighter;
    position: relative;
    overflow: hidden;
  }
  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-leave-active {
    transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(40px);
    opacity: 0;
  }
  @media screen and (max-width: 700px) {
    .modulo1 {
      background-position: center;
      background-size: cover;
    }
    .description h1 {
      color: #fff;
      font-size: 4vmax;
      padding-left: 6%;
    }
    .description h6 {
      color: #FFF;
      font-size: 2vmax;
      margin-top: 1.5%;
      padding-left: 4%;
      text-align: right;
      text-shadow: 2px 1px 2px #000;
    }
    .arrow {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 30%;
      height: 60vh;
      color: #FFF;
      font-size: 2.5em;
      font-weight: lighter;
      position: relative;
    }
  }
</style>
