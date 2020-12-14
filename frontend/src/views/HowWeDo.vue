<template>
  <div id="HowWeDo" class="HowWeDo">
    <h2 class='title'>How <span>we do</span></h2>
    <img class='cube' src="../assets/cube4.png" alt="">
    <div class="container">

      <div class="slider-navigation">
        <splide
        :options="secondaryOptions"
        ref="secondary"
        >
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
          Performance
        </splide-slide>
      </splide>
      </div>

      <splide :options="options"
      ref="primary"
      >
        <splide-slide>          
        <div class="cell d-flex align-items-center justify-content-between"
        v-for='SMM in SMMs' :key="SMM.title">
        <p>{{SMM.title}}</p>
        <div class="time">
          <span>{{SMM.time.substring(0,2)}}</span>
          {{SMM.time.replace(/[0-9]/g, '')}}
        </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="cell d-flex align-items-center justify-content-between"
        v-for='web_site in Web_sites' :key="web_site.title">
        <p>{{web_site.title}}</p>
        <div class="time">
          <span>{{web_site.time.substring(0,2)}}</span>
          {{web_site.time.replace(/[0-9]/g, '')}}
        </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="cell d-flex align-items-center justify-content-between"
        v-for="mobile_app in Mobile_apps" :key="mobile_app.title">
          <p>{{mobile_app.title}}</p>
        <div class="time">
          <span>{{mobile_app.time.substring(0,2)}}</span>
          {{mobile_app.time.replace(/[0-9]/g, '')}}
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
          fixedHeight : 38,
		      focus       : 0,
		      isNavigation: true,
          updateOnMove: true,
          arrows: false,
          perPage:3
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
        Web_sites: state => state.HowWeDo.Web_sites,
        Mobile_apps: state => state.HowWeDo.Mobile_apps,
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
}
</style>