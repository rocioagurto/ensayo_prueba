<template>
  <div class="container-fluid ">
    <b-jumbotron bg-variant="dark" text-variant="white">
        <template v-slot:header>Cursos Online</template>
        <template v-slot:lead>
            Encuentra los mejores cursos aquí
        </template>
    </b-jumbotron>


    <b-container class="bv-example-row">
        <b-row >
            <b-col cols="12" md="4" v-for="c in computedCourseList" :key="c.id" >
                <b-card >
                    <b-card-img v-bind="mainProps" :src="c.data.img" img-top tag="article" style="max-width: 20rem;" class="mb-2"></b-card-img>
                   <b-card-body>
                        <b-card-title> {{ c.data.name }} </b-card-title>
                        <b-card-text>
                            {{c.data.description}}
                        </b-card-text>
                        </b-card-body>

                    <b-button href="#" variant="dark">Ver curso</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        data() {
      return {
        mainProps: { 
            width: 200,
            height: 180 
        }
      }
    },
        computed: {
            ...mapState(['courses']),
            computedCourseList(){
                console.log(this.courses)
      return this.courses.filter(c => {
        return c.data.name.toLowerCase()
      })
            }
        },
        created() {
    // Extraer productos de la base de datos (get)
    this.$store.dispatch('getCourses')
  },

    }
</script>

<style>

</style>