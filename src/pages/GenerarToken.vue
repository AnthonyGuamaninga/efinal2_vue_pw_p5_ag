<template>
  <div class="container">
    <h1>TOKEN</h1>
    <p>Semilla</p>
    <input v-model="jwtSemilla" type="text" />
    <p>Tiempo de vigencia</p>
    <input v-model="jwtExpirationMs" type="text" />
    <p>Token</p>
    <input class="token" v-model="token" type="text" />
    <button @click="ingresar">Generar</button>
  </div>
</template>

<script>
import { ingresarUsuarioFachada } from "../helper/clienteUsuario.js";
export default {
  data() {
    return {
      jwtSemilla: null,
      jwtExpirationMs: null,
      token: null,
    };
  },
  methods: {
    async ingresar() {
      const contentBody = {
        jwtSemilla: this.jwtSemilla,
        jwtExpirationMs: this.jwtExpirationMs,
      };
      this.token = await ingresarUsuarioFachada(contentBody);
      console.log("token: " + this.token);
    },
  },
};
</script>

<style>
.container{
  display: grid;
  align-items: center;
  justify-content: center;
}
p{
  text-align: left;
  padding: 0px;
  margin: 0px;
}
input{
  margin: 0px 0px 20px;
}
button{
  margin: 30px;
  background: rgb(50, 181, 190);
  color: aliceblue;
  padding: 15px;
  border-radius: 10px;
}
.token{
  padding: 40px 20px;
}
</style>