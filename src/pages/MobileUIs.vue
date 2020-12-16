<template>

  <div class="cases">
    <HeaderClose
      path='/'
      title="Mobile UI Cases"
      />
    <div class="p-0 justify-content-between container-fluid d-flex flex-wrap">
      <div class="case d-flex justify-content-center align-items-center" v-for='(item,index) in MobileUIcases' :key='item.name'>

        <Cases
        :name="item.name"
        :path="/MobileUICase/"
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
    //   SMMCases: state => state.SMMCases.casesSMM
    MobileUIcases: state => state.MobileUICases.casesMobileUI
    })
  }
}
</script>

<style lang="scss">
@import '../styles/common.scss';
</style>