<template>
  <div>
    <div class="logo">fsenaweb<span class="me">.me</span></div>
    <div class="block1">
      <div class="error">404</div>
    </div>
    <div class="block2">
      <div class="item">Página não encontrada.</div>
      <div class="back"><router-link to="/"><i class="fas fa-arrow-left"></i></router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900');
  html, body {
    font-family: 'Roboto', sans-serif;
  }
  /*.topo{*/
    /*width: 98%;*/
    /*height: 10vh;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*position: fixed;*/
    /*padding: 1%;*/
    /*overflow: hidden;*/
  /*}*/
  .logo {
    top: 4vh;
    left: 4vw;
    position: fixed;
    z-index: 9999;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -1.5px;
    font-size: 1.7em;
    color: #20b2aa;
  }
  .logo > .me {
    font-size: inherit;
    padding: 0;
    margin: 0;
    color: #105e56;
    margin-top: 20%;
  }
  .block1 {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    background-color: #FFF;
    justify-content: flex-end;
    align-items: center;
  }
  .error {
    font-family: 'Roboto', sans-serif;
    width: 30vw;
    height: 34vh;
    font-size: 15em;
    font-weight: bold;
    color: #0B2161;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-right: 30vw;
  }
  .block2 {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    background-color: #0B2161;
    justify-content: space-around;
    align-items: center;
  }
  .item {
    width: 50vw;
    height: 12vh;
    font-family: 'Roboto', sans-serif;
    font-size: 3.5em;
    font-weight: bold;
    color: #FFF;
    margin: -18.1vh 0 0 40vh;
    overflow: hidden;
  }
  .back {
    background-color: #FFF;
    font-size: 2.2em;
    margin-top: -20vh;
    border-radius: 100px;
    padding: 1%;
  }
  .back a {
    color: #0B2161;
  }
  @media screen and (max-width: 700px) {
    .logo {
      top: 4vh;
      left: 8vw;
      position: fixed;
      z-index: 9999;
      font-family: 'Roboto', sans-serif;
      letter-spacing: -1.5px;
      font-size: 1.5em;
      color: #20b2aa;
    }
    .logo > .me {
      font-size: inherit;
      padding: 0;
      margin: 0;
      color: #105e56;
      margin-top: 20%;
    }
    .block1 {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 50vh;
      background-color: #FFF;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .error {
      font-family: 'Roboto', sans-serif;
      width: 75vw;
      height: 22vh;
      font-size: 10em;
      font-weight: bold;
      color: #0B2161;
      overflow: hidden;
      margin-right: 15vw;
    }
    .block2 {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 50vh;
      background-color: #0B2161;
      justify-content: space-around;
      align-items: center;
    }
    .item {
      width: 100vw;
      height: 8vh;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 2em;
      font-weight: bold;
      color: #FFF;
      margin: -21vh 0 0 1vh;
      overflow: hidden;
    }
    .back {
      background-color: #FFF;
      font-size: 3em;
      margin-top: -30vh;
      border-radius: 100px;
      padding: 2%;
    }
    .back a {
      color: #0B2161;
    }
  }
</style>
