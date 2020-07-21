<template lang="html">
<section class="section">
    <div class="container">
      
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class='has-text-centered'><h1 class="title">Log In</h1></div>
            <TheLoginComponent></TheLoginComponent>
        </div>
      </div>
      
    </div>
  </section>

</template>

<script>
import TheLoginComponent from '@/components/TheLoginComponent.vue'

export default {
  components: { 
    'TheLoginComponent': TheLoginComponent 
  }
}

</script>