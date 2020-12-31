<template>
  <div class="OurClients">
    <h2 class="title wow animate__animated animate__fadeIn">
      Наши <span>клиенты</span>
    </h2>
      <div class="container p-lg-2 p-0">
      <div class="slider-navigation">
        <splide
        :options="secondaryOptions"
        ref="secondary"
        >
        <splide-slide >
          All
        </splide-slide>
        <splide-slide >
          SMM
        </splide-slide>
        <splide-slide >
          Web-sites
        </splide-slide>
        <!-- <splide-slide >
          Mobile app
        </splide-slide> -->
        <splide-slide >
          Branding
        </splide-slide>
        <splide-slide >
          Performance
        </splide-slide>
      </splide>
      </div>
      <!-- <div class="container"> -->
        <splide :options="options"
        ref="primary"
        class='p-lg-0 p-2'
        >
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.index class='icon-icon'>
              <div 
              class='d-flex align-items-center justify-content-center icon-cell'>
                <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.index>
              <div 
                
                :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'SMM',
                 'grey-block' : icon.theme != 'SMM'} " >
                                  <!-- icon.theme=='SMM'
                 ||icon.theme==['SMM','Web-sites']||icon.theme==['Web-sites','SMM']
                 ||icon.theme==['SMM','Design'] -->
                 <!-- <div class='d-flex align-items-center justify-content-center' 
                 v-bind:class="{'icon-cell':icon.theme.match('SMM')}"> -->
                 <!-- <div :class="[icon.theme=='SMM' ? activeClass : '', errorClass]"> -->
                 <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.index>
              <div 
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Web-sites',
               'grey-block' : icon.theme != 'Web-sites' }"><img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <!-- <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.index >
              <div :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Branding',
               'grey-block' : icon.theme != 'Mobile-app' }">
                <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide> -->
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.index >
              <div 
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Branding',
               'grey-block' : icon.theme != 'Branding' }">
                <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.index >
              <div 
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Performance',
               'grey-block' : icon.theme != 'Performance' }">
                <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
      </splide>
      </div>

  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { mapState } from 'vuex';
export default {
  name: 'OurClients',
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      data: {
        activeClass: 'icon-cell',
        errorClass: 'grey-block'
      },
      options: {
        type      : 'fade',
		    perPage   : 1,
		    perMove   : 1,
		    gap       : '1rem',
        pagination: false,
        arrows: false
      },
      secondaryOptions: {
		    type        : 'slide',
		    gap         : '1rem',
		    pagination  : false,
		    fixedWidth  : 103,
        fixedHeight : 38,
		    focus       : 0,
		    isNavigation: true,
        updateOnMove: true,
        arrows: false,
        perPage:3,
        breakpoints: {
          993: {
              fixedWidth  : 95,
              focus    : 'center',
	            perPage  : 3,
	            trimSpace: false,
            
          }
        }
      },
      count : 0,
    }
  },
  mounted() {
    this.$refs.primary.sync( this.$refs.secondary.splide );
    let SMMIcons = false;
  },
  computed: {
    ...mapState({
      icons: state => state.OurClients.icons
    })
  }
}
</script>

<style lang='scss'>
.OurClients{
  position: relative;
  min-height: 100vh;
  padding-top: 100px;
  h2{
    margin-bottom: 52px;
  }
  .icon-icon{
    width:150px; 
    height: 150px
  }
  .icon-cell{
    width: 150px;
    height: 150px;
    img{
      width:80%;
    }
}
  .grey-block{
    width: 150px;
    height: 150px;
    background-color: none;
    opacity: .7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
      z-index: -1;
      opacity: .4;
      width:80%;
    }
  }
}
@media (max-width: 992px){
  .OurClients{
    overflow-x: hidden;
    .icon-icon{
      width: 110px;
      height: 110px;
    }
    #splide09-list{
      transform: translateX(0) ;
    }
    .icon-cell{
      width: 110px;
      height: 110px;
    }
    .grey-block{
      width: 110px;
      height: 110px;
    }
    .slider-navigation{
      width: 100% !important
    }
  }
}
</style>