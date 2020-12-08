<template>
  <div id=WhatWeDo class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Hero/>
    <Service/>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Service from '@/components/Service-all.vue'
export default {
  name: 'WhatWeDo',
  components: {
    Hero,
    Service
  }
  
}
</script>
