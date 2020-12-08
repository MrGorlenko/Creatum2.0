<template>

  <div class="SMM">
    <HeaderClose/>
    <div class="p-0 justify-content-between container-fluid d-flex flex-wrap">
      <!-- <div class="case d-flex justify-content-center align-items-center">
        <img src="../assets/preview.png" alt="">
      </div> -->
      <div class="case d-flex justify-content-center align-items-center" v-for='item in casesSMM' :key='item.name'>
        <img :src="item.preview" alt="">
        <h3>{{item.name}}</h3>
        <p>{{item.date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderClose from '@/components/Header-close.vue'
export default {
  name: 'SMMcases',
  components: {
    HeaderClose,
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
  }
}
</script>

<style lang="scss">

.SMM{
  padding-top: 10vh;
  .case{
    width: 49.9%;
    height: 50vh;
    margin-bottom: 20px;    
    mix-blend-mode: multiply; 
    position: relative;
    h3{
      position: absolute;
      bottom: 66px;
      left: 32px;
      color: #FFFFFF;
      font-weight: 600;
      font-size: 28px;
      line-height: 120%;
      z-index: 3;
    }
    p{
      position: absolute;
      bottom: 32px;
      left: 32px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      z-index: 3;
    }
    &:after{
      display: block;
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: linear-gradient(180.79deg, rgba(2, 2, 2, 0) 0.58%, rgba(2, 2, 2, 0.8) 99.32%);
    }
    img{
      z-index: -1;
      width: 80%;
      height: 80%;
      display: block;
    }
  }

}

</style>