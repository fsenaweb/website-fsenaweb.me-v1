<template>
  <div class="section">
    <div class="modulo4">
      <div class="box-content">
        <div class="block1">
          <div class="part1">
            Fale <strong>Conosco</strong>
          </div>
          <div class="part2">
            <a href="tel:84999959215"><span class="contact" >+55 84 99995-9216</span></a>
            <a href="mailto:contato@fsenaweb.me"><span class="contact" >contato@fsenaweb.me</span></a>
          </div>
          <div class="part3">
            Rua Napoleão Diógenes, 210 / Centro <br>
            59900-000 Pau dos Ferros &bigstar; RN
          </div>
        </div>
        <div class="block2">
          <div class="box-form">
            <h2>Preencha o formulário</h2>
            <form id="contatoForm" action="" method="post">
              <input type="text" name="name" v-model="contato.nome" placeholder="Nome (Obrigatório)" required>
              <input type="email" name="email" v-model="contato.email" placeholder="E-mail (Obrigatório)" required>
              <input type="tel" name="phone" v-model="contato.telefone" placeholder="Telefone">
              <textarea name="message" v-model="contato.mensagem" placeholder="Deixe aqui a sua mensagem..." required></textarea>
              <input type="submit" @click.prevent="enviaMail" value="Envie sua Mensagem">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Part4',
  data () {
    return {
      show: false,
      message: '',
      contato: {
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      }
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    enviaMail () {
      let { nome, email, telefone, mensagem } = this.contato
      axios.post('https://fsenaweb.me/functions/', {
        nome, email, telefone, mensagem
      })
        .then(() => {
          console.log('Email enviado!')
          this.$toaster.success('Formulário enviado com sucesso!')
          this.contato.nome = ''
          this.contato.email = ''
          this.contato.telefone = ''
          this.contato.mensagem = ''
        })
        .catch(function (error) {
          this.$toaster.error('Falha ao enviar formulário.')
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .modulo4 {
    width: 100vw;
    height: 100vh;
    background: url("/static/assets/bckgr5.jpg");
    background-size: 115%;
    background-repeat: no-repeat;
    background-position: 0px 0px;
    position: relative;
  }
  .box-content {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 99vh;
    justify-content: space-around;
    align-items: flex-end;
    align-content: stretch;
    overflow: hidden;
  }
  .block1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 47vw;
    height: 100vh;
  }
  .part1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25vw;
    height: 23vh;
    margin: 20vh 0 0 0;
    font-size: 5.3em;
    text-shadow: 1px 1px 5px #000;
    text-align: left;
    line-height: 0.9em;
    letter-spacing: -2px;
    overflow: hidden;
    color: #FFF;
  }
  .part2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28vw;
    height: 18vh;
    margin-top: 5.5vh;
    font-size: 2.2em;
    font-weight: normal;
    line-height: 1.3em;
    overflow: hidden;
    color: #000;
  }
  .part2 a {
    text-decoration: none;
  }
  .contact {
    width: 100%;
    color: #FFF;
    text-shadow: 2px 2px 2px #000;
    text-decoration: none;
  }
  .contact:hover {
    padding-bottom: 4px;
    border-bottom: 1px dashed #FFF;
  }
  .part3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0,0,0,0.3);
    border-radius: 15px;
    width: 30vw;
    height: 15vh;
    margin-top: 6vh;
    margin-left: 3vw;
    padding-left: 3vw;
    font-size: 1.3em;
    font-weight: lighter;
    line-height: 1.6em;
    overflow: hidden;
    color: #FFF;
    position: absolute;
    bottom: 15vh;
  }
  .block2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 47vw;
    height: 100vh;
  }
  .box-form {
    display: flex;
    flex-direction: column;
    width: 35vw;
    height: 56vh;
    padding: 2.5vw;
    background-color: rgba(0,0,0, 0.3);
    border-radius: 15px;
    margin-top: 7vh;
    color: #FFF;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 4% 0 0 0;
  }
  input, textarea {
    padding: 2%;
    margin: 1% 0;
    border: 1.3px dashed #000;
    font-size: 0.9em;
  }
  input:nth-last-child(1) {
    border: none;
  }
  textarea {
    height: 20vh;
  }
  input[type="submit"] {
    height: 60px;
    border-radius: 10px;
    transition: background-color .3s;
    background-color: #CCC;
  }
  input[type="submit"]:hover {
    background-color: #FFF;
  }
  @media screen and (max-width: 1200px){
    .modulo4 {
      width: 100vw;
      height: 100vh;
      background: url("/static/assets/bckgr5.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0px 0px;
      position: relative;
    }
    .part1 {
      width: 25vw;
      height: 23vh;
      margin: 20vh 0 0 0;
      font-size: 4em;
      text-shadow: 1px 1px 5px #000;
      text-align: left;
      line-height: 0.9em;
      letter-spacing: -2px;
      overflow: hidden;
      color: #FFF;
    }
    .part2 {
      width: 28vw;
      height: 18vh;
      margin-top: 3.5vh;
      font-size: 1.8em;
      font-weight: normal;
      line-height: 1.3em;
      overflow: hidden;
      color: #000;
    }
    .part3 {
      background-color: rgba(0,0,0,0.3);
      border-radius: 15px;
      width: 30vw;
      height: 15vh;
      margin-top: 6vh;
      margin-left: 3vw;
      padding-left: 3vw;
      font-size: 1.1em;
      font-weight: lighter;
      line-height: 1.6em;
      overflow: hidden;
      color: #FFF;
      position: absolute;
      bottom: 15vh;
    }
  }
  @media screen and (max-width: 700px) {
    .modulo4 {
      background-position: 0px 0px;
      background-size: cover;
    }
    .description h1 {
      color: #fff500;
      font-size: 1.6em;
      padding-left: 6%;
    }
    .description h6 {
      color: #FFF;
      font-size: 1.2rem;
      margin-top: 1.5%;
      padding-left: 4%;
      text-align: right;
      text-shadow: 2px 1px 2px #000;
    }
    .box-content {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 99vh;
      justify-content: center;
      align-items: flex-end;
      align-content: stretch;
      overflow: hidden;
    }
    .block1 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100vw;
      height: 100vh;
      padding-left: 5vw;
    }
    .part1 {
      align-items: left;
      width: 100vw;
      height: 25vh;
      margin: 20vh 0 0 0;
      padding-left: 15vw;
      font-size: 5em;
      text-shadow: 1px 1px 5px #000;
      text-align: left;
      line-height: 0.9em;
      letter-spacing: -2px;
      overflow: hidden;
      color: #FFF;
    }
    .part2 {
      align-items: center;
      width: 100vw;
      height: 15vh;
      margin-top: 1vh;
      font-size: 1.8em;
      font-weight: lighter;
      line-height: 1.1em;
      overflow: hidden;
      color: #FFF;
    }
    .part2 a {
      text-decoration: none;
    }
    .part3 {
      background-color: rgba(0,0,0,0.3);
      border-radius: 15px;
      width: 85vw;
      height: 15vh;
      margin-top: 5vh;
      margin-left: 5vw;
      padding-left: 5vw;
      font-size: 1.3em;
      font-weight: lighter;
      line-height: 1.6em;
      overflow: hidden;
      color: #FFF;
      position: absolute;
      bottom: 20vh;
    }
    .block2 {
      display: none;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      width: 100vw;
      height: 80vh;
    }
    .box-form {
      display: none;
      flex-direction: column;
      width: 80vw;
      height: 40vh;
      padding: 2.5vw;
      margin-top: 5vh;
      background-color: rgba(0,0,0, 0.3);
      border-radius: 15px;
      color: #FFF;
    }
    .box-form h2 {
      font-size: 0.8em;
    }
    form {
      display: flex;
      flex-direction: column;
      padding: 3.5% 0 0 0;
    }
    input, textarea {
      padding: 1.5%;
      margin: 1% 0;
      border: 1.1px dashed #000;
      font-size: 0.8em;
    }
    input:nth-last-child(1) {
      border: none;
      height: 10vh;
    }
    input[type="submit"] {
      padding: 1%;
      border-radius: 10px;
      transition: background-color .3s;
      background-color: #CCC;
    }
    input[type="submit"]:hover {
      background-color: #FFF;
    }
  }
</style>
