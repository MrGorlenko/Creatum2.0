<template>
  <div id='hero' class="Hero align-items-center justify-content-center d-flex flex-column">

    <img class='cube cube-1' src="../assets/cube1.png" alt="">
    <img class='cube cube-2' src="../assets/cube2.png" alt="">
    <img class='cube cube-3' src="../assets/cube3.png" alt="">

    <h2 class='wow animate__animated animate__fadeInLeft'>

      Мы создаем <span>впечатления</span> и помогаем брендам с  <span>digital-задачами.</span>

    </h2>

    <hr>

    <p class='wow animate__animated animate__fadeInRight'>
      Фундаментально базируемся на отлаженных процессах, положительном возврате инвестиций в рекламу и партнерских отношениях с нашими клиентами.

    </p>

    <hr>

    <p class='wow animate__animated animate__fadeInLeft'>
    Внутри команд сочетаем опытных экспертов и драйв молодых специалистов.


    </p>

  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'Hero',
  components: {
    anime
  },
  mounted(){
   
    anime({
      targets: 'h2',
    }),
    anime({
      targets: '.cube-1',
      translateY: [0, -5],
      daruation: 10000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      rotate: 5
    }),
    anime({
      targets: '.cube-2',
      translateY: [0, -15],
      daruation: 11000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      rotate: -9
    }),
    anime({
      targets: '.cube-3',
      translateY: [0, -10],
      daruation: 8000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      rotate: 10
    })
  }
}
</script>

<style lang='scss'>
.Hero{
  height: 100vh;
  position: relative;
  .cube{
    position: absolute;
    z-index: -1;

    &-1{
      left: 94px;
      top: 272px;
    }

    &-2{
      right: 156px;
      top: 100px;
    }
    &-3{
      bottom: 0px;
      right: 120px;
    }
  }
  h2{
    font-size: 62px;
    line-height: 120%;
    color: #020202;
    width: 1024px;
    margin: auto;

    margin-top: 0;
    margin-bottom: 32px;
    
    span{
      color: #6709DE;
      font-weight: 800;
    }
  }
  hr{
    height: 1px;
    background: #E6DDF0;
    color: #E6DDF0;
    width: 180px;
    margin: auto;
    margin-top: 0;
    margin-bottom: 32px;
  }
  p{
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    color: #8D8794;
    max-width: 838px;
  }
}

@media (max-width: 992px){
  .Hero{
    overflow-x: hidden;
    height: 725px;
    margin-top: 14vh;
    h2{
      width: 100%;
      font-size: 35px;
      line-height: 140%;
      padding: 0 24px;
      text-align: start;
    }
    p{
      font-size: 14px;
      padding: 0 24px;
      line-height: 120%;
    }
    .cube{
    &-3{
      width: 180px;
      bottom: 40px;
      right: -20px;
    }
  }
  }
}
</style>