<template>
  <div class="Case">
      <HeaderClose
      path='/WEBUIs'
      :title="WEBUICases[id].name"
      />
      <div class="container-fluid p-0">
          <iframe 
          :src="WEBUICases[id].template"
        ></iframe>
      </div>
  </div>
</template>

<script>
import HeaderClose from '@/components/Header-close.vue'
// import 
import { mapState } from 'vuex';
export default {
    name: 'SMMCase',
    components: {
        HeaderClose
    },
    data() {
        return {
            post: '',
            id: this.$router.currentRoute.params['id'],
        };
  },
    computed: {
        ...mapState({
         WEBUICases: state => state.WEBUICases.casesWEBUI
    })
  }

}
</script>

<style lang='scss'>
@import '../styles/common.scss';
</style>