<template>
  <div class="container">
    <h1>Estudiante</h1>
    <p>Token</p>
    <input class="token" v-model="token" type="text" />
    <p>Nombre</p>
    <input v-model="nombre" type="text" />
    <p>Apellido</p>
    <input v-model="apellido" type="text" />
    <p>Cedula</p>
    <input v-model="cedula" type="text" />
    <button @click="insertar">Guardar</button>
  </div>
</template>

<script>
import { insertarFacahada } from "../helper/clienteEstudiante.js";
export default {
  data() {
    return {
      token: null,
      nombre: null,
      apellido: null,
      cedula: null,
    };
  },
  methods: {
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      await insertarFacahada(estuBody, config);
    },
  },
};
</script>

<style>
.container{
  display: grid;
  justify-content: left;
  padding-bottom: 50px;

}
h1,p{
  color: blue;
}
input{
  border-radius: 8px;
  padding: 8px 0px;
}
.token{
  padding: 50px, 20px;
}
</style>