<template>
  <div>
    <div v-if="loading" class="loading">
      <img src="../../assets/loading-site.gif" alt="Carregando...">
    </div>
    <div v-else>
      <Menu :sociais="false"/>
      <transition appear name="fade">
        <div v-if="move" class="topo">
          <h1>{{ $t('quemsou.title')}}</h1>
          <h6>{{ $t('quemsou.subtitle')}}</h6>
        </div>
      </transition>
      <div class="body">
        <div class="content">
          <div class="column">
            <div class="circulo"></div>
            <h1>fsenaweb<span class="me">.me</span></h1>
            <h2>{{ $t('quemsou.column1.description')}}</h2>
            <div class="ferramentas">
              <h3>{{ $t('quemsou.column1.graduation')}}</h3>
              <h4>{{ $t('quemsou.column1.graduationText')}}</h4>
              <br>
              <h3>{{ $t('quemsou.column1.skills.title')}}</h3>
              <h4>{{ $t('quemsou.column1.skills.item1')}}<br>
                {{ $t('quemsou.column1.skills.item2')}}<br>
                {{ $t('quemsou.column1.skills.item3')}}<br>
                {{ $t('quemsou.column1.skills.item4')}}<br>
              </h4>

            </div>
          </div>
          <div class="column">
            <p>{{ $t('quemsou.description.part1')}}</p>

            <div class="ferramentas destaque">
              {{ $t('quemsou.description.part2')}}
            </div>

            <p>{{ $t('quemsou.description.part3')}}</p>

            <p>{{ $t('quemsou.description.part4')}}</p>
            <div class="ferramentas">
              <h3>{{ $t('quemsou.column1.DevSkill.title')}}</h3>
              <div class="column-habilidades">
                <h4>HTML5/CSS3</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="95" title="95%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>JS</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="78" text="" title="78%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>JavaScript Framework VueJS</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="78" text="" title="78%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>JavaScript Framework React</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="55" text="" title="55%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>Mobile – Quasar/Ionic</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="64" text="" title="64%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>Designer / Wireframes</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="83" title="83%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>GitHub/BitBucket</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="75" title="75%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
              </div>
              <div class="column-habilidades">
                <h4>PHP / POO</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="90" title="90%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>Frameworks PHP – Laravel / CodeIgniter</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="85" title="85%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>MicroFrameworks PHP – Lumen / Slim / Silex</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="80" title="80%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>Docker</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="47" title="47%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>{{ $t('quemsou.column1.DevSkill.item1')}}</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="50" title="50%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>
                <h4>{{ $t('quemsou.column1.DevSkill.item2')}}</h4>
                <h5>
                  <progress-bar bar-color="#dc720f" val="62" title="62%" style="margin-bottom: 20px" size="5"></progress-bar>
                </h5>

              </div>
            </div>

            <p>{{ $t('quemsou.final')}}</p>
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
  import ProgressBar from 'vue-simple-progress'

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
        inner: 'Quem Sou - Matheus Ricelly - Desenvolvimento de site, sistema para internet, aplicativos para internet e intranet, Progressive Web App (PWA), Single Page Application (SPA)'
      },
      // Meta tags
      meta: [
        { name: 'application-name',
          content: 'fsenaweb.me' },
        { name: 'description',
          content: 'Quem Sou - Matheus Ricelly - Desenvolvimento de site, sistemas para internet, aplicativos para internet e intranet',
          id: 'desc'
        },
        // Twitter
        { name: 'twitter:title',
          content: 'fsenaweb.me'
        },
        // with shorthand
        { n: 'twitter:description',
          c: 'fsenaweb.me - Quem Sou - Matheus Ricelly - Desenvolvimento de site, sistemas para internet, aplicativos para internet e intranet'
        },
        { property: 'og:title',
          content: 'fsenaweb.me - Quem Sou - Matheus Ricelly - Desenvolvimento de site, sistemas para internet, aplicativos para internet e intranet'
        }
      ],
      // link tags
      link: [
        {
          rel: 'canonical',
          href: 'http://fsenaweb.me/#/sobre/',
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
      Menu, ProgressBar
    },
    mounted () {
      this.loading = false
      this.move = true
    }
  }
</script>

<style scoped>
  *, *::after, *::before {
    box-sizing: border-box;
  }

  .topo {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 400px;
    background: url("/static/assets/bckgr4.jpg");
    background-attachment: fixed;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 130vw;
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 93vw;
    min-height: 90vh;
    background-color: #FFF;
    margin: 0 auto;
  }

  .body h1 {
    width: 100%;
    font-size: 1.4em;
    margin: 4% 2%;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: inherit;
    padding: 2%;
    font-size: 1.3em;
    color: #555;
  }

  .circulo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 15px solid #105e56;
    margin: 0 auto;
    background: url("../../assets/foto-perfil.jpg");
    background-repeat: no-repeat;
    background-position: -50px -10px;
    background-size: 140% 140%;
  }

  .column:nth-child(1) {
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 1%;
  }

  .column {
    width: 55%;
    padding: 1%;
  }

  .column h1 {
    font-size: 3em;
    padding: 0;
    margin: 0;
    color: #20b2aa;
    margin-top: 10%;
  }

  .column h2 {
    font-size: 1.1em;
    line-height: 1em;
    padding: 0;
    margin: 0;
    color: #646464;
  }

  .column h1 .me {
    font-size: inherit;
    padding: 0;
    margin: 0;
    color: #105e56;
    margin-top: 20%;
  }

  .column p {
    margin-bottom: 35px;
  }

  .column-habilidades {
    width: 50%;
    padding: 1%;
    float: left;
  }

  .ferramentas {
    width: 100%;
    min-height: 50px;
    margin: 25px 0;
    padding: 15px;
    border-radius: 10px;
    background: url('../../assets/dotted.png');
    background-size: 3.5px;
    background-repeat: repeat;
  }

  .ferramentas h3 {
    font-size: 90%;
    margin: 15px 0;
    padding-bottom: 7px;
    border-bottom: 1px solid #CCC;
  }

  .ferramentas h4 {
    font-size: 80%;
    color: black;
    margin-bottom: 10px;
  }

  .ferramentas .column {
    width: 50%;
    padding: 3%;
    float: left;
  }

  .destaque {
    font-size: 90%;
    font-weight: lighter;
  }

  .fade-enter-active, .fade-leave-active {
    transition: height .6s;
    transition-timing-function: linear;
    transition-delay: 1s;
    scroll-behavior: smooth;
  }

  .fade-enter, .fade-leave-to {
    height: 100vh;
  }

  .footer {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 30vh;
    background: url("/static/assets/bckgr4.jpg");
    background-attachment: fixed;
    background-position: 100% 42%;
    background-repeat: no-repeat;
    background-size: 140vw;
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
      background: url("/static/assets/bckgr4.jpg");
      background-attachment: fixed;
      background-position: 0px 0px;
      background-repeat: no-repeat;
      background-size: 130vw;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .topo h1 {
      width: 85%;
      display: block;
      color: #fff;
      font-size: 6vmax;
      padding-top: 8vh;
    }

    .topo h6 {
      font-size: 2.5vmax;
      color: #fff;
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
      width: 94%;
      min-height: inherit;
      padding: 3%;
      font-size: 1.3em;
      color: #555;
    }

    .circulo {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 15px solid #105e56;
      margin: 0 auto;
      background: url("../../assets/foto-perfil.jpg");
      background-repeat: no-repeat;
      background-position: -50px -10px;
      background-size: 140% 140%;
    }

    .column:nth-child(1) {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1%;
    }

    .column {
      width: 100%;
      padding: 1%;
    }

    .column h1 {
      font-size: 2em;
      padding: 0;
      margin: 0;
      color: #20b2aa;
      margin-top: 5%;
    }

    .column h2 {
      font-size: 0.9em;
      line-height: 1em;
      padding: 0;
      margin: 0;
      color: #646464;
      margin-bottom: 5%;
    }

    .column h1 .me {
      font-size: inherit;
      padding: 0;
      margin: 0;
      color: #105e56;
      margin-top: 20%;
    }

    .column-habilidades {
      width: 100%;
      padding: 1%;
      float: left;
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
      background: url("/static/assets/bckgr4.jpg");
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
