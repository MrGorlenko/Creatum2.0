<template>
  <div id="HowWeDo" class="HowWeDo">
    <h2 class='wow animate__animated animate__fadeIn title'>How <span>we do</span></h2>
    <img class='cube' src="../assets/cube4.png" alt="">
    <div class="container p-lg-2 p-0">

      <div class="slider-navigation wow animate__animated animate__fadeInLeft">
        <splide
        :options="secondaryOptions"
        ref="secondary"
        >
        <splide-slide >
          SMM
        </splide-slide>
        <splide-slide >
          Websites & Apps
        </splide-slide>
        <splide-slide >
          Branding
        </splide-slide>
        <splide-slide >
          Performance
        </splide-slide>
      </splide>
      </div>

      <splide :options="options"
      ref="primary"
      class='p-lg-0 p-2 wow animate__animated animate__fadeInRight'
      >
        <splide-slide>          
        <div class="cell d-flex align-items-center justify-content-between"
        v-for='SMM in SMMs' :key="SMM.title">
        <p>{{SMM.title}}</p>
        <div class="time">
          <span>{{SMM.time.substring(0,2)}}</span>
          {{SMM.time.replace(/[0-9]/g, '')}}
          <!-- <span class='submit'></span> -->
        </div>
        </div>
        <div class="cell cell_total d-flex align-items-center justify-content-between">
        <p>Итого</p>
        <div class="time">
          <span>52</span>
          дня
        </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="cell d-flex align-items-center justify-content-between"
        v-for='web_app in Web_apps' :key="web_app.title">
        <p>{{web_app.title}}</p>
        <div class="time">
          <span>{{web_app.time.substring(0,2)}}</span>
          {{web_app.time.replace(/[0-9]/g, '')}}
        </div>
        </div>
        <div class="cell cell_total d-flex align-items-center justify-content-between">
        <p>Итого</p>
        <div class="time">
          <span>70</span>
          дней
        </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="cell d-flex align-items-center justify-content-between"
        v-for="branding in Brandings" :key="branding.title">
          <p>{{branding.title}}</p>
        <div class="time">
          <span>{{branding.time.substring(0,2)}}</span>
          {{branding.time.replace(/[0-9]/g, '')}}
        </div>
        </div>
        <div class="cell cell_total d-flex align-items-center justify-content-between">
        <p>Итого</p>
        <div class="time">
          <span>29</span>
          дней
        </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="cell d-flex align-items-center justify-content-between"
        v-for="performance in Performances" :key="performance.title">
          <p>{{performance.title}}</p>
        <div class="time">
          <span>{{performance.time.substring(0,2)}}</span>
          {{performance.time.replace(/[0-9]/g, '')}}
        </div>
        </div>
        <div class="cell cell_total d-flex align-items-center justify-content-between">
        <p>Итого</p>
        <div class="time">
          <span>24</span>
          дня
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
  name: 'HowWeDo',
  components: {
    Splide,
    SplideSlide,
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
          fixedHeight : 58,
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
          },
        classes: {
          page: 'dfef'
        }
        },
        count : 0,
      };
    },
    mounted() {
      this.$refs.primary.sync( this.$refs.secondary.splide );
    },
    computed: {
      ...mapState({
        SMMs: state => state.HowWeDo.SMMs,
        Web_apps: state => state.HowWeDo.Web_apps,
        Brandings: state => state.HowWeDo.Brandings,
        Performances: state => state.HowWeDo.Performances
      })
    }
}
</script>

<style lang='scss'>

.HowWeDo{
  position: relative;
  padding-top: 65px;
  min-height: 92vh;
  .cube{
    position: absolute;
    top: 0;
    left: 35px;
  }
  h2{
    margin-bottom: 40px;
  }
  .cell_total{
    background: #6709DE !important;
    p{
      color:#fff;
    }
  }
  .cell{
    background: rgba(235, 235, 235, 0.5);
    border-radius: 10px;
    padding: 12px 20px;
    margin-bottom: 24px;
    p{
      margin-bottom: 0;
    }
    .time{
      background-color: #FBD035;
      padding: 12px 8px;
      border-radius: 40px;
      width: auto;
      span{
        font-weight: 800;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .swiper-container {
    width: 600px;
    height: 300px;
}
#splide01{
  ul li{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
}

@media (max-width:992px){
  .HowWeDo{
    overflow-x: hidden;
    .slider-navigation{
      width: 100%;
    }
    .cell p{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: start;
      max-width: 208px;
    }
  }
}
</style>