<template>
  <div name=Crew id=Crew class="JoinTheCrew">
    <h2 class="title">
      Присоединяйтесь к <span>команде</span>
    </h2>
    <div class="container">
      <div class="vacancies">
        <div class="vacancy d-flex align-items-center justify-content-between" 
          v-for='(vacancy, index) in Vacancies' 
          :key="vacancy.index"
          >
          <router-link
          class='h-100 w-100 d-flex align-items-center justify-content-between'
          :to="/Vacancy/+index"
          >       
            <div class="job-title d-flex align-items-center">
              <p>{{vacancy.title}} <span>({{vacancy.state}})</span> </p>
            </div>
            <p>{{vacancy.subject.toUpperCase()}}</p>
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
import JoinTheCrew from '@/components/JoinTheCrew.vue'
import { mapState } from 'vuex';
export default {
  name: 'Crew',
  components: {
    JoinTheCrew
  },
  computed: {
    ...mapState({
      Vacancies: state => state.Crew.Vacancies
    })
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
</style>