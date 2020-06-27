<template>
  <div class="container">
        <h1 class="listar mt-5 mb-5 has-text-centered">Listado de Cursos</h1>
        <table class="table mb-6  is-striped has-background-warning-light">
            <thead>
            <tr class="has-background-white-ter">
                <!-- <th> id</th> -->
                <th>Nombre Curso</th>
                <th>Imagen</th>
                <th>Descripción</th>
                <th colspan="2" class="action"></th>
            </tr>
            </thead>
            <tbody >
                <tr  v-for="c in computedCourseList" :key="c.id">
                <td>{{ c.data.name }}</td>
                <td ><img  :src="c.data.img"></td>
                <td>{{ c.data.description}}</td>
                
                <td>
                    <b-button  @click="editCurso(c.id)"> <b>Editar</b></b-button>
                </td>
                <td>
                    <b-button @click="deleteCurso(c.id)"> <b>Eliminar</b></b-button>
                </td>
                </tr>
            </tbody>
        </table>
      </div>
</template>

<script>
 import {mapState} from 'vuex'
export default {
    
    computed: {
        ...mapState(["courses"]),
        computedCourseList(){
            return this.courses
        }
    },

}
</script>

<style>

</style>