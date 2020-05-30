<template>
  <div class="content-github">
    <h1>{{ $t('portfolio.repository.title') }}</h1>
      <div class="card-carousel-cards">
        <div class="card-carousel--card" v-for="repo in repositories">
          <img src="../../assets/repository.png" :alt="repo.name" width="100">
          <div class="card-carousel--card--footer">
            <p class="title">{{ repo.name }}</p>
            <p class="desc">{{ repo.description }}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Github',
    data () {
      return {
        repositories: []
      }
    },
    mounted () {
      this.loadRepositories()
    },
    methods: {
      loadRepositories () {
        axios.get('https:api.github.com/users/fsenaweb/repos')
          .then(response => {
            const filtered = response.data.filter(item => item.fork === false)
            this.repositories = filtered
          })
      }
    }
  }
</script>

<style scoped>

  .content-github {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    color: #000;
    margin-bottom: 50px;
  }

  .content-github > h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #42b883;
  }

  .card-carousel-cards {
    display: inline-block;
    transition: transform 150ms ease-out;
    transform: translatex(0px);
    width: 100%;
  }
  .card-carousel-cards .card-carousel--card {
    display: flex;
    width: 98%;
    margin: 30px 0;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    border: 1px solid #ccc;
  }
  .card-carousel-cards .card-carousel--card img {
    width: 100px;
    height: 100px;
    vertical-align: bottom;
    transition: opacity 150ms linear;
    user-select: none;
    margin-right: 30px;
  }
  .card-carousel-cards .card-carousel--card img:hover {
    opacity: 0.8;
  }
  .card-carousel-cards .card-carousel--card--footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .card-carousel-cards .card-carousel--card--footer p {
    margin: 0;
    margin-bottom: 2px;
    font-size: 19px;
    font-weight: 500;
    color: #2c3e50;
    user-select: none;
  }

  .card-carousel-cards .card-carousel--card--footer p.title {
    font-size: 1.5em;
    font-weight: bold;
  }

  .card-carousel-cards .card-carousel--card--footer p.desc {
    font-size: 1.2em;
    font-weight: lighter;
  }
  .card-carousel--card a {
    text-decoration: none;
  }

</style>
