<template>
  <div class="vacancy-item">
      <HeaderClose
      path="/#Crew"
      title="Вакансия"
      />
      <div class="container">
          <div class="top">
              <h3>Vacancies / {{Vacancy[id].subject}}</h3>
              <h2>{{Vacancy[id].title}}</h2>
              <p class='d-flex align-items-center'>
                  <svg
                   enable-background="new 0 0 64 64" 
                   version="1.1" viewBox="0 0 64 64" 
                   xml:space="preserve" 
                   xmlns="http://www.w3.org/2000/svg" 
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                   <g id="Glyph_copy_2">
                    <path
                    d="M42.138,23.162c0-5.566-4.548-10.094-10.138-10.094s-10.138,4.528-10.138,10.094S26.41,33.256,32,33.256   S42.138,28.728,42.138,23.162z"/>
                    <path d="M31.995,63.996l4.109-5.375c4.289-5.678,18.282-25.024,18.282-35.601C54.387,9.253,45.391,0.004,32,0.004   S9.613,9.253,9.613,23.021c0,11.39,16.432,33.166,18.301,35.605L31.995,63.996z M17.862,23.162c0-7.771,6.342-14.094,14.138-14.094
                       s14.138,6.323,14.138,14.094S39.796,37.256,32,37.256S17.862,30.934,17.862,23.162z"/></g></svg>
                {{Vacancy[id].location}} 
              </p>
          </div>
          <div class="middle">
            <p>
               {{Vacancy[id].description}}
            </p>
          </div>

          <div class="bottom">
              <h4>About Creatum</h4>
              <p>{{AboutCreatum.text}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import HeaderClose from '@/components/Header-close.vue'
import { mapState } from 'vuex';
export default {
name: 'Vacancy',
components: {
    HeaderClose
},
computed: {
    ...mapState({
        AboutCreatum: state => state.Crew.AboutCreatum,
        Vacancy: state => state.Crew.Vacancies
    })
},
data() {
    return {
        post: '',
        id: this.$router.currentRoute.params['id'],
    };
}
}
</script>

<style lang='scss'>

.vacancy-item{
    padding-top: 10vh;
    .top{
        margin: 32px 0 56px 0;
        h2,h3{
            text-align: start;
        }
        p svg{
            width: 15px;
            margin-right: 10px;
        }
        h2,h3,p{
            text-transform: uppercase;
        }
    }
    .middle{
        margin-bottom: 56px;
        p{
            font-size: 16px;
            line-height: 160%;
            letter-spacing: 0.02em;
            color: #020202;
            text-align: start;
            width: 75%;
        }
    }
    .bottom{
        width: 70%;
        background: rgba(235, 235, 235, 0.5);
        padding: 24px;
        h4{
            font-size: 20px;
            line-height: 24px;
            color: rgba(2, 2, 2, 0.5);
            text-align: start;
            margin-bottom: 16px;
        }
        p{
            font-size: 14px;
            line-height: 160%;
            letter-spacing: 0.02em;
            color: #020202;
            text-align: start;
        }
    }
}

</style>