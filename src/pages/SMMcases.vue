<template>

  <div class="cases">
    <HeaderClose
      path='/'
      title="SMM Cases"
      />
      <Vfade/>
    <div class="p-0 blur justify-content-between container-fluid d-flex flex-wrap">
      <div class="case d-flex justify-content-center align-items-center" v-for='(item,index) in SMMCases' :key='item.name'>

        <Cases
        :name="item.name"
        :path="/SMMCase/"
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
import Cases from '@/components/Cases';
import Vfade from '@/components/FadeSoon';
export default {
  name: 'SMMcases',
  components: {
    HeaderClose,
    Cases,
    Vfade
  },
  data() {
    return {
      casesSMM:[
        {
          name: 'case1' , 
          date: '11.12.2020',
          preview: require('../assets/preview.png'),
          template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
        },
        {
          name: 'case2' , 
          date: '11.11.2020',
          preview: require('../assets/preview.png'),
          template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
        },
        {
          name: 'case3' , 
          date: '19.12.2020',
          preview: require('../assets/preview.png'),
          template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
        },
        {
          name: 'case4' , 
          date: '1.12.2020',
          preview: require('../assets/preview.png'),
          template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
        }

      ]
    }
  },
  mounted () {
  window.scrollTo(0, 0);
},
  computed: {
    ...mapState({
      SMMCases: state => state.SMMCases.casesSMM
    })
  }
}
</script>

<style lang="scss">
@import '../styles/common.scss';
</style>