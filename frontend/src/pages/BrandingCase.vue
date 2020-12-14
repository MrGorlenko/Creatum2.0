<template>
  <div class="Case">
      <HeaderClose
      path="/BrandingCases"
      :title="BrandingCases[id].name"
      />
      <div class="container-fluid p-0">
          <iframe 
          :src="BrandingCases[id].template"
        ></iframe>
      </div>
  </div>
</template>

<script>
import HeaderClose from '@/components/Header-close.vue'
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
        BrandingCases: state => state.BrandingCases.casesBranding
    })
  }

}
</script>

<style lang='scss'>
@import '../styles/common.scss';
</style>