<template>
  <div>
    <router-link to="/generar">Generar Token</router-link>
    <router-link to="/guardar">Guardar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div a{
    color: #386b9e;
    margin: 0px 10px;
    font-weight: bold;
    border: solid 1px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: aquamarine;
}
.router-link-exact-active{
    background-color: beige;
}

</style>