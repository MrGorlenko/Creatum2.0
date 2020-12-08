<template>
  <div id=Crew class="JoinTheCrew">
    <h2 class="title">
      Присоединяйтесь к <span>команде</span>
    </h2>
    <div class="container">
      <div class="vacancies">
        <div class="vacancy d-flex align-items-center justify-content-between" 
          v-for='vacancy in Vacancies' 
          :key="vacancy.title"
          >
          <div class="job-title d-flex align-items-center">
            <p>{{vacancy.title}} <span>({{vacancy.state}})</span> </p>
          </div>
          <p>{{vacancy.subject.toUpperCase()}}</p>
          <div class="place d-flex align-items-center justify-content-between">
            <img src="../assets/place.png" alt="">
            {{vacancy.location}}
          </div>
        </div>
      </div>
    </div>
<!-- 
    <div class="modal"
    :vacancy="vacancy">

    </div> -->
  </div>
</template>

<script>
import JoinTheCrew from '@/components/JoinTheCrew.vue'
export default {
  name: 'Crew',
  components: {
    JoinTheCrew
  },
  data() {
    return {
      Vacancies: [
        {
          title: 'Mobile Senior Developer',
          state: 'Удаленка или офис',
          subject: 'DEVELOPMENT',
          location: 'Moscow'
        },
                {
          title: 'Head of Brand and Comunications',
          state: 'Удаленка',
          subject: 'design',
          location: 'Moscow'
        },
                {
          title: 'Mobile Senior Developer',
          state: 'Удаленка или офис',
          subject: 'OPERATIONS',
          location: 'Moscow'
        }
      ],
      // modalShow:false,
    }
  },
  // methods: {
  //   openModal(vacancy) {
  //     this.modalShow = !this.modalShow;
  //     this.vacancy = vacancy;
  //   },
  //   closeModal() {
  //     this.modalShow = false
  //   }
  // }
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
    padding: 32px 24px;
    cursor: pointer;
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
    }
  }
  
}
</style>