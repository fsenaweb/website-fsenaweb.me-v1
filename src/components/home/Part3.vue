<template>
  <div class="section">
    <div class="modulo3" >
      <div class="flex-container">
        <div class="box-content">
          <h1>{{ $t('part3.title')}}</h1>
          <h2>{{ $t('part3.description')}}</h2>
          <router-link to="/portfolio" class="btn-clients">{{ $t('part3.button')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'part3',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .modulo3{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url("/static/assets/bckgr3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 32%;
    position:relative;
  }
  .flex-container {
    display: flex;
    width: 85vw;
    height: 100vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .box-content {
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: 68vh;
    justify-content: center;
    align-items: flex-end;
    align-content: stretch;
    color: #000;
  }
  .box-content h1 {
    font-weight: bolder;
    letter-spacing: -2.5px;
    font-size: 4em;
    margin-right: 0.5%;
  }
  .box-content h2 {
    font-weight: bolder;
    letter-spacing: -1.8px;
    font-size: 2.5em;
    margin-right: 0.5%;
  }
  .btn-clients {
    display: flex;
    float: right;
    width: 25%;
    height: 5vh;
    margin-top: 2%;
    border-radius: 30px;
    background-color: #000;
    color: #FFF;
    font-size: 0.8em;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s, color 0.3s, margin-right 0.9s;
  }
  .btn-clients:hover {
    background-color: rgba(255,255,255,1);
    color: #000;
    margin-right: 3%;
  }
  @media screen and (max-width: 700px) {
    .modulo3 {
      background-position: center left;
      background-size: cover;
    }
    .box-content h1 {
      font-weight: bolder;
      letter-spacing: -2.5px;
      font-size: 3em;
      margin-right: 0.5%;
    }
    .box-content h2 {
      font-weight: bolder;
      letter-spacing: -1.5px;
      font-size: 1.5em;
      text-align: right;
      margin-right: 0.5%;
    }
    .btn-clients {
      width: 65%;
      height: 6vh;
      margin-top: 4%;
      font-size: 1em;
    }
    .btn-clients:hover {
      background-color: rgba(255,255,255,1);
      color: #000;
      margin-right: 3%;
    }
  }
</style>
