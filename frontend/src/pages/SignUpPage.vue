<template lang="html">
<section class="section">
    <div class="container">
      
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class='has-text-centered'><h1 class="title">Sign Up</h1></div>
            <TheSignUpComponent></TheSignUpComponent>
        </div>
      </div>
      
    </div>
  </section>

</template>

<script>
import TheSignUpComponent from '@/components/TheSignUpComponent.vue'

export default {
  name: 'SignUpPage',
  components: { 
    'TheSignUpComponent': TheSignUpComponent 
  }
}

</script>