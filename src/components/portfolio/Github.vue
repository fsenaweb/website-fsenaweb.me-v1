<template>
  <div class="content">
    <h1>{{ $t('portfolio.repository.title') }}</h1>
    <div class="box" v-for="repo in repositories">
      <div>
        <img src="../../assets/repository.png" :alt="repo.name" width="100">
      </div>
      <div>
        <p>{{ repo.name }}</p>
        <p>{{ repo.description }}</p>
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
            console.log(response.data)
            this.repositories = response.data
          })
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
    color: #42b883;
  }
</style>
