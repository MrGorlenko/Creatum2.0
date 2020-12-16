<template>

  <div class="cases">
    <HeaderClose
      path='/'
      title="SMM Cases"
      />
    <div class="p-0 justify-content-between container-fluid d-flex flex-wrap">
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
import Cases from '@/components/Cases'
export default {
  name: 'SMMcases',
  components: {
    HeaderClose,
    Cases
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