 <template>
    <div>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
         <b-nav-item href="#" to="/">Home</b-nav-item>
        <b-nav-item href="#" to="/login">Iniciar Sesión</b-nav-item>
        <b-nav-item href="#" to="/about">Sobre mi</b-nav-item>
        <b-nav-item href="#" to="/agregar">Agregar Cursos</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>  
 
<script>
import Firebase from 'firebase';
import { mapState } from 'vuex'
export default {


computed: {
    ...mapState(['currentUser']),
    isLoggedIn(){
        return this.$store.getters.isLoggedIn
    },
    // para obtener al usuario actual
     getCurrentUser(){
      return Firebase.auth().currentUser ? Firebase.auth().currentUser : ''
    }
}
}
</script>

<style>

</style>