<template>
  <div class="OurClients">
    <h2 class="title">
      Наши <span>клиенты</span>
    </h2>

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
          Web Site
        </splide-slide>
        <splide-slide >
          Mobile app
        </splide-slide>
        <splide-slide >
          Branding
        </splide-slide>
        <splide-slide >
          Past
        </splide-slide>
      </splide>
      </div>
      <div class="container">
        <splide :options="options"
        ref="primary"
        >
        <splide-slide>
          <div class="d-flex flex-wrap">
            <div v-for="icon in icons" :key=icon.index>
              <div 
              style='width:150px; height: 150px'
              class='d-flex align-items-center justify-content-center'>
                <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap">
            <div v-for="icon in icons" :key=icon.index>
              <div 
                
                :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'SMM' ,
                 'grey-block' : icon.theme != 'SMM'} " >
                 <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap">
            <div v-for="icon in icons" :key=icon.index>
              <div 
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Web-sites',
               'grey-block' : icon.theme != 'Web-sites' }"><img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap">
            <div v-for="icon in icons" :key=icon.index >
              <div :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Mobile-app',
               'grey-block' : icon.theme != 'Mobile-app' }">
                <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap">
            <div v-for="icon in icons" :key=icon.index >
              <div 
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Branding',
               'grey-block' : icon.theme != 'Branding' }">
                <img class='d-block' :src="icon.img" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap">
            <div v-for="icon in icons" :key=icon.index >
              <div 
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.theme == 'Past',
               'grey-block' : icon.theme != 'Past' }">
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
        perPage:3
      },
      count : 0,
    }
  },
  mounted() {
    this.$refs.primary.sync( this.$refs.secondary.splide );
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
  min-height: 100vh;
  padding-top: 100px;
  h2{
    margin-bottom: 52px;
  }
  .icon-cell{
    width: 150px;
    height: 150px;
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
    }
  }
}
</style>