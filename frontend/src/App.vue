<template lang="html">
  <div>
   <TheNavbar></TheNavbar>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'App',
  components: { 
  'TheNavbar': TheNavbar 
}
}
</script>
