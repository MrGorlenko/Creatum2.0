<template>
  <div class="Service d-flex justify-content-between  flex-lg-row flex-column">
    <div
    v-for="Service in Services"
    :key="Service.title"
    class='item d-flex flex-column align-items-start justify-content-end'
    >
    <img class='w-100 h-100' :src="Service.img" alt="">
    <h3>{{Service.title}}</h3>
    <p>{{Service.descripton}}</p>
    <!-- <router-link :to="Service.url">
      <button class='button button_purple'>Подробнее</button>
    </router-link> -->
    <a :href="Service.url">
      <button class='button button_purple'>Подробнее</button>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Servive',
  data() {
    return {
      Services: [
        {
          title: 'SMM',
          descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet venenatis, fusce donec blandit tortor, congue ut.',
          img: require('../assets/SMM.png'),
          url: '/SMMcases'
        },
        {
          title: 'Web UI',
          descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet venenatis, fusce donec blandit tortor, congue ut.',
          img: require('../assets/WebUI.png'),
          url: '/WEBUIs'
        },
        {
          title: 'Mobile UI',
          descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet venenatis, fusce donec blandit tortor, congue ut.',
          img: require('../assets/MobileUI.png'),
          url: '/MobileUIs'
        },
        {
          title: 'Branding',
          descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet venenatis, fusce donec blandit tortor, congue ut.',
          img: require('../assets/Branding.png'),
          url: '/BrandingCases'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
.Service{
  height: 100vh;
  .item{
    width: 24.5%;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 88.73%);
    padding-left: 23px;
    padding-right: 30px;
    padding-bottom: 43px;
    height: 100%;
    p,h3{
      color: #fff;
    }
    p{
      text-align: start;
    }
    img{
      position: absolute;
      top:0;
      left: 0;
      z-index: -1;
     }
  }
}

@media (max-width:992px){
  .Service{
    height: auto;
    .item{
      width: 100%;
      height: 245px;
      padding: 32px 16px;
      margin-bottom: 3px;
      &:nth-child(2){
          img{
            object-position: top;   
          }
        }
      img{
        object-fit: cover;
      }
      h3{
        font-size: 28px;
        line-height: 100%;
      }
      p{
        font-size: 14px;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 40px;
      }
    }  
  }
}
</style>