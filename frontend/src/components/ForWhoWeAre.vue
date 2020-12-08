<template>
  <div class="ForWhoWeAre">
    <h2 class="title">
      Кому <span> мы подойдем</span>
    </h2>
    <div class="slide-wrapper">
      <splide :options="options">
        <splide-slide
        v-for="item in forWho"
        :key=item.title
        >
          <h3>{{item.title}}</h3>
          <p>{{item.paragraph}}</p>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'ForWhoWeAre',
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      forWho: [
        {
          title: 'Стартапы',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis tristique est at tellus. Aliquam eu aliquam vivamus platea vivamus augue faucibus. Pretium commodo massa nibh cras suspendisse porttitor iaculis ut proin. '
        },
        {
          title: 'Креатив',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis tristique est at tellus. Aliquam eu aliquam vivamus platea vivamus augue faucibus. Pretium commodo massa nibh cras suspendisse porttitor iaculis ut proin. '
        },
        {
          title: 'Веб-разработка',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis tristique est at tellus. Aliquam eu aliquam vivamus platea vivamus augue faucibus. Pretium commodo massa nibh cras suspendisse porttitor iaculis ut proin. '
        },
        {
          title: 'Еще вот для вас',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis tristique est at tellus. Aliquam eu aliquam vivamus platea vivamus augue faucibus. Pretium commodo massa nibh cras suspendisse porttitor iaculis ut proin. '
        },
        {
          title: 'И для вас',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis tristique est at tellus. Aliquam eu aliquam vivamus platea vivamus augue faucibus. Pretium commodo massa nibh cras suspendisse porttitor iaculis ut proin. '
        },
        
      ],
      options: {
          type: 'loop',
          rewind : false,
          width  : '100%',
          gap    : '3rem',
          arrows : false, 
          pagination  : false,
          perPage   : 2.6,
          perMove   : 3
        },
    }
  }
}
</script>

<style lang='scss'>
.ForWhoWeAre{
  height: 92vh;
  padding-top: 150px;
  h2{
    margin-bottom: 117px;
  }
  .slide-wrapper{
    width: 80%;
    margin-left: 20%;
  }
  h3{
    font-weight: 800;
    font-size: 24px;
    line-height: 100%;
    text-align: start;
    margin-bottom: 12px;
  }
  p{
    text-align: start;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #8D8794;
  }
}
</style>