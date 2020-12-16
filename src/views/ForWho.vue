<template>
  <div id=ForWho class="ForWho">
    <ForWhoWeAre/>
    <OurClients/>
  </div>
</template>

<script>
import ForWhoWeAre from '@/components/ForWhoWeAre.vue'
import OurClients from '@/components/OurClients.vue'
export default {
  name: 'ForWho',
  components: {
    ForWhoWeAre,
    OurClients
  }
}
</script>

<style>

</style>