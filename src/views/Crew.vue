<template>
  <div name=Crew id=Crew class="JoinTheCrew">
    <div name="JoinCrew"></div>
    <h2 class="title wow animate__animated animate__fadeInRight">
      Присоединяйтесь к <span>команде</span>
    </h2>
    <div class="container">
      <div class="vacancies wow animate__animated animate__fadeInLeft">
        <div class="vacancy d-flex align-items-center justify-content-between" 
          v-for='(vacancy, index) in Vacancies' 
          :key="vacancy.index"
          >
          <router-link
          class='h-100 w-100 d-flex align-items-lg-center align-items-start justify-content-between flex-lg-row flex-column'
          :to="/Vacancy/+index"
          >       
            <div class="job-title">
              <p>{{vacancy.title}} <span>({{vacancy.state}})</span> </p>
            </div>
            <p class='subject'>{{vacancy.subject.toUpperCase()}}</p>
            <div class="place d-flex align-items-center justify-content-between">
              <img src="../assets/place.png" alt="">
              {{vacancy.location}}
            </div>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Crew',
  computed: {
    ...mapState({
      Vacancies: state => state.Crew.Vacancies
    })
  },
  methods:{
      goToBlock: function(event){
      let link = event.target.getAttribute('href')
    }
  }
}
</script>

<style lang='scss'>
.modal{
  position: fixed;
  top: 0;
  left:0;
  height: 100vh;
  width: 100%;
  background: red;
}
.JoinTheCrew{
  height: 100vh;
  padding-top: 115px;
  transition: .3s ease;
  h2{
    margin-bottom: 90px;
  }
  .vacancy{
    
    cursor: pointer;
    a{
      padding: 32px 24px;
      color: #020202;
          p{
      margin-bottom: 0;
    }
    .job-title{
      span{
        color: #868686;
      }
    }
    .place{
      img{
        margin-right: 10px;
      }
    }
    &:hover{
      transition: .3s ease;
      background-color: rgba(235, 235, 235, 0.5);
      text-decoration: none;
    }
    }
  }
}

@media (max-width: 992px){
  .JoinTheCrew{
    .title{
      font-size: 34px;
    }
    .subject{
      display: none;
    }
    .vacancy{
      // padding-top: 12vh;
      a{
        padding: 16px;
      }
    }
    .job-title{
      text-align: start;
      margin-bottom: 8px;
    }
  }
}
</style>