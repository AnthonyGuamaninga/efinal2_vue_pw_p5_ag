<template>
  <div class="container">
    <p>Token</p>
    <input v-model="token" type="text" />
    <button @click="consultarTodos">Consultar estudiantes</button>
    
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cedula</th>
      </tr>
      <tr v-for="(estu, index) in lista" :key="index">
        <td v-for="(nombre, cellIndex) in estu" :key="cellIndex">
          {{ nombre }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { config } from "@vue/test-utils";
import { consultarEstudiantesFachada } from "../helper/clienteEstudiante.js";
export default {
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    async consultarTodos() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      const data = await consultarEstudiantesFachada(config);
      console.log("Desde componente");
      console.log(data);
      this.lista = data;
    },
  },
};
</script>

<style scoped>
th {
  padding: 5px;
  width: 100px;
}
input {
  width: 200px;
  padding: 50px 0px;
}
.container {
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>