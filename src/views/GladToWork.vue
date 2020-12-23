<template>
  <div id='GladToWork' class="GladToWork">
    <div class="container">
      <h2 class="title wow animate__animated animate__fadeIn">Мы рады работать <span>с тобой!</span></h2>
      <form action="" class='d-flex justify-content-between flex-wrap' @submit.prevent="submitForm" method="post">
        <input class='short' type="text" placeholder="Полное имя" v-model="full_name">
        <input class='short' type="text" placeholder="Ссылка на сайт компании" v-model="url">
        <input class='short' type="text" placeholder="Э-почта" v-model="email">
        <input class='short' type="text" placeholder="Направление" v-model="industry">
        <textarea class='big' placeholder="Text area" rows="4" cols="50" v-model="text">
        </textarea>
        <div class='w-100 d-flex justify-content-lg-end justify-content-start'>
          <button class='button button_purple' type="submit">Отправить</button>
        </div>


      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'GladToWork',
  data() {
    return {
      full_name: null,
      url: null,
      email: null,
      industry: null,
      text: null,
    }
  },
  methods: {
    submitForm() {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8001/api/customers/',
        data: {
          full_name: this.full_name,
          url: this.url,
          email: this.email,
          industry: this.industry,
          text: this.text
        }

      })
          .then(res => console.log(res))
          .catch((error) => {
            console.log(error)
          })
    }
  }
}


</script>

<style lang='scss'>
// @import 
.GladToWork {
  min-height: 100vh;
  padding-top: 100px;
  // form{
  //   padding-top: 70px;
  //   .short{
  //     width: 48%;
  //     margin-bottom: 36px;
  //     height: 60px;
  //   }
  //   .big{
  //     width: 100%;
  //     height: 120px;
  //   }
  //   input, textarea{
  //     background: rgba(235, 235, 235, 0.5);
  //     border-radius: 6px;
  //     border: none;
  //     outline: none;
  //     padding: 18px 16px;
  //     &:focus{
  //       background: white;
  //       border: 1px solid #6900EF;
  //       box-shadow: 0px 0px 0px 3px #DEC4FF;
  //     }

  //   }
  //   button{
  //     margin-top: 30px;
  //     float: right;
  //   }
  // }
}

@media (max-width: 992px) {
  .GladToWork {
    padding-bottom: 30px;

    .title {
      font-size: 34px;
    }

    // form{
    //   .short, .big{
    //     width: 100%;
    //   }
    //   button{
    //     width: 270px;
    //   }
    // }
  }
}
</style>