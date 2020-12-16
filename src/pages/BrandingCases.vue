<template>

  <div class="cases">
    <HeaderClose
      path='/'
      title="Branding Cases"
      />
    <div class="p-0 justify-content-between container-fluid d-flex flex-wrap">
      <div class="case d-flex justify-content-center align-items-center" v-for='(item,index) in BrandingCases' :key='item.name'>

        <Cases
        :name="item.name"
        :path="/BrandingCase/"
        :index="index"
        :date="item.date"
        :img="item.preview"
        />

      </div>
    </div>
  </div>
</template>

<script>
import HeaderClose from '@/components/Header-close.vue'
import { mapState } from 'vuex';
import Cases from '@/components/Cases'
export default {
  name: 'SMMcases',
  components: {
    HeaderClose,
    Cases
  },
  computed: {
    ...mapState({
        BrandingCases: state => state.BrandingCases.casesBranding
    })
  },
    mounted () {
  window.scrollTo(0, 0);
},
}
</script>

<style lang="scss">
@import '../styles/common.scss';
</style>