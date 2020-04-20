<template>
  <div class="content-articles">

    <h1>{{ $t('portfolio.articles.title') }}</h1>
      <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
        <div class="card-carousel">
          <div class="card-carousel--overflow-container">
            <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')' }">
              <div class="card-carousel--card" v-for="item in articles">
                <a :href="item.canonical_url" target="_blank">
                  <img :src="item.cover_image" :alt="item.title"/>
                  <div class="card-carousel--card--footer">
                    <p class="title">{{ item.title }}</p>
                    <p class="tag" v-for="(cat,index) in item.tag_list">{{ cat }}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
      </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Medium',
    data () {
      return {
        loading: false,
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
        articles: []
      }
    },
    mounted () {
      this.loadMediumRepositories()
    },
    computed: {
      atEndOfList () {
        return this.currentOffset <= (this.paginationFactor * -1) * (this.articles.length - this.windowSize)
      },
      atHeadOfList () {
        return this.currentOffset === 0
      }
    },
    methods: {
      async loadMediumRepositories () {
        try {
          const mediumRssFeed = 'https://dev.to/api/articles?username=fsenaweb'
          await axios.get(mediumRssFeed)
            .then(response => {
              this.articles = response.data
              console.log(response.data)
            })
        } catch (error) {
          console.error(error)
        }
      },
      moveCarousel (direction) {
        if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor
        }
      }
    }

  }
</script>

<style scoped>

  .content-articles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 95%;
    color: #000;
    margin: 0 2em 4em 2em;
  }

  .card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px;
    color: #666a73;
  }

  .card-carousel {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .card-carousel--overflow-container {
    overflow: hidden;
  }
  .card-carousel--nav__left, .card-carousel--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid #42b883;
    border-right: 2px solid #42b883;
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
  }
  .card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
    opacity: 0.2;
    border-color: black;
  }
  .card-carousel--nav__left {
    transform: rotate(-135deg);
  }
  .card-carousel--nav__left:active {
    transform: rotate(-135deg) scale(0.9);
  }
  .card-carousel--nav__right {
    transform: rotate(45deg);
  }
  .card-carousel--nav__right:active {
    transform: rotate(45deg) scale(0.9);
  }

  .card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);
  }
  .card-carousel-cards .card-carousel--card {
    max-width: 30%;
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;
    border: 1px solid #ccc;
  }
  .card-carousel-cards .card-carousel--card:first-child {
    margin-left: 0;
  }
  .card-carousel-cards .card-carousel--card:last-child {
    margin-right: 0;
  }
  .card-carousel-cards .card-carousel--card img {
    width: 100%;
    height: 150px;
    vertical-align: bottom;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
    user-select: none;
  }
  .card-carousel-cards .card-carousel--card img:hover {
    opacity: 0.5;
  }
  .card-carousel-cards .card-carousel--card--footer {
    border-top: 0;
    padding: 7px 15px;
  }
  .card-carousel-cards .card-carousel--card--footer p {
    padding: 3px 0;
    margin: 0;
    margin-bottom: 2px;
    font-size: 19px;
    font-weight: 500;
    color: #2c3e50;
    user-select: none;
  }
  .card-carousel-cards .card-carousel--card--footer p.title {
    min-height: 50px;
  }

  .card-carousel--card a {
    text-decoration: none;
  }
  .card-carousel-cards .card-carousel--card--footer p.tag {
    font-size: 12px;
    font-weight: 300;
    padding: 4px 6px;
    background: rgba(40, 44, 53, 0.06);
    display: inline-block;
    position: relative;
    margin-left: 17px;
    color: #666a73;
  }
  .card-carousel-cards .card-carousel--card--footer p.tag:before {
    content: "";
    float: left;
    position: absolute;
    top: 0;
    left: -12px;
    width: 0;
    height: 0;
    border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
    border-style: solid;
    border-width: 10px 12px 12px 0;
  }
  .card-carousel-cards .card-carousel--card--footer p.tag.secondary {
    margin-left: 0;
    border-left: 1.45px dashed white;
  }
  .card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
    display: none !important;
  }
  .card-carousel-cards .card-carousel--card--footer p.tag:after {
    content: "";
    position: absolute;
    top: 8px;
    left: -3px;
    float: left;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: white;
    box-shadow: -0px -0px 0px #004977;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
    color: #42b883;
  }

</style>
