<template>
  <div id=ForWho class="ForWho">
    <ForWhoWeAre/>
    <OurClients/>
    <!-- <OurClients1/> -->
  </div>
</template>

<script>
import ForWhoWeAre from '@/components/ForWhoWeAre.vue'
import OurClients from '@/components/OurClients.vue'
// import OurClients1 from '@/components/OurClients1.1.vue'
export default {
  name: 'ForWho',
  components: {
    ForWhoWeAre,
    OurClients
    // OurClients1
  }
}
</script>

<style>

</style>