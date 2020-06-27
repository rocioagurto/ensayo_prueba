<template>
  <div class="container mt-5">
    <div >
      <img class="mt-6" src="https://icons8.com/vue-static/landings/animated-icons/icons/neutral/neutral.gif" alt="">
      <p >404</p>
      <p> Not found</p>
      <p >The requested URL was not found on this server.</p>
      <b-button variant="dark"><router-link  class="text-white"  to="/">Volver al Home</router-link></b-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
  text-align: center;
  height: 30rem;
  margin: 0 auto;
}
img {
  width: 80px;
}
</style>