<template>
  <div id='GladToWork' class="GladToWork">
    <div class="container">
      <h2 class="title wow animate__animated animate__fadeIn">Мы рады работать <span>с тобой!</span></h2>
      <form action="" class='d-flex justify-content-between flex-wrap'>
        <input class='short' type="text" placeholder="Полное имя">
        <input class='short' type="text" placeholder="Ссылка на сайт компании">
        <input class='short' type="text" placeholder="Э-почта">
        <input class='short' type="text" placeholder="Направление">
        <textarea class='big' placeholder="Text area"  rows="4" cols="50">
        </textarea>
        <div class='w-100 d-flex justify-content-lg-end justify-content-start'>
          <button class='button button_purple'>Отправить</button>
        </div>
        
        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GladToWork'
}
</script>

<style lang='scss'>
// @import 
.GladToWork{
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

@media (max-width: 992px){
  .GladToWork{
    padding-bottom: 30px;
    .title{
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