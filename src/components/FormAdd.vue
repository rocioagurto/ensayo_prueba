<template>
<div class="container mt-5">
    <b-form class="m-auto " style="width: 400px">
        <div class="container titulo">
            <h1 class="mb-4 has-text-centered">Ingrese Curso</h1>
        </div>
        <div class="field container ">
            <p class="control ">
                <b-form-input v-model="name"  type="text" placeholder="Nombre del curso"></b-form-input>
            </p>
        </div>

    

        <div class="field container" width="300">
            <p class="control ">
                <b-form-input v-model="img"  type="text" placeholder="Ingrese URL imagen"></b-form-input>
            </p>
        </div>
        <div class="field container" width="300">
            <div class="control">
                <b-form-textarea  v-model="description" placeholder="Descripcion curso"></b-form-textarea>
            </div>
        </div>

        <div class=" container ">
            <p class="control boton">
                <b-button @click="createCurso" variant="dark" class="mt-4">Ingresar curso</b-button>
                <!-- <b-button  v-if="edit" @click="updateCurso(id)">Actualizar</b-button> -->
            </p>
        </div>
    </b-form>
    
</div>
</template>

<script>
import axios from 'axios'


const baseURL = 'https://us-central1-ensayo-prueba.cloudfunctions.net/courses'
export default {
    data() {
        return {
        name: '',
        img: '',
        description: '',
        id: undefined
        }
    },
    methods: {
    createCurso(e) {
        e.preventDefault();
        let curso = {
            name: this.name,
            img: this.img,
            description:this.description
        }
        axios.post(`${baseURL}/course`, curso,
        {headers:{'content-type' : 'application/json'}})
            .then(() => {
                this.$store.dispatch('getCourses')
            })
            .catch(function (error) {
                console.log(error)
            })
        
    },
        
    
    mounted(){
        this.$store.dispatch('getCourses')
    }
    }
}
</script>

<style>

</style>