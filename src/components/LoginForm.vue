<template>
  <div>

    <div class="mt-4">
      <h1 class="mt-5 mb-3">Bienvenid@!</h1>
      <div class="field">
        <span v-if="formHasErrors" class="has-text-danger">
          <i class="mdi mdi-alert"></i>
          Usuario o Contraseña incorrectos, Intente nuevamente.
        </span>
      </div>
      <b-form style="width: 400px" class="container m-auto " @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input id="input-1" data-testId="form-user" v-model="credentials.email" type="email" required
            placeholder="Enter email">
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-input type="password" id="text-password" aria-describedby="password-help-block" placeholder="Password"
            v-model="credentials.password">
          </b-input>
         
        </b-form-group>


        <div class="d-flex justify-content-between mt-5">
          <b-button variant="dark" @click="login">Iniciar Sesión</b-button>
          
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>

      </b-form>

    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  export default {
    data() {
      return {
        credentials: {
          email: '',
          password: '',

        },
        formHasErrors: false,
        show: true,
        
      }
    },
    methods: {
      onReset(e) {
        e.preventDefault()
        // Reset our form values
        this.credentials.email = ''
        this.credentials.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      login(e) {
        e.preventDefault()
        this.formHasErrors = this.credentials.email === '' || this.credentials.password === ''
        if (!this.formHasErrors) {
          Firebase.auth()
            .signInWithEmailAndPassword(
              this.credentials.email,
              this.credentials.password
            )
            .then(() => {
              let user = this.credentials.email
              this.$store.dispatch('updateUser', user)
              alert (`Bienvenida, ${user}`) 
              this.$router.push('/')
            })
            .catch(() => {
              alert('Usuario no autenticado')
            })
        }
      }
    },

  }
</script>

<style>

</style>