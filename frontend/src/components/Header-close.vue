<template>
  <div class="HeaderClose">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-between">
        <div class="back d-flex justify-content-center align-items-center">
          <router-link class='w-100 h-100 d-flex justify-content-center align-items-center' :to="path">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7369 0.260319C15.3901 -0.0867735 14.8278 -0.0867727 14.481 0.26032L7.98535 6.76122L1.51664 0.292503C1.16968 -0.0544488 0.607165 -0.054449 0.260213 0.292503C-0.0867383 0.639454 -0.0867376 1.20197 0.260214 1.54893L6.72944 8.01815L0.29589 14.4569C-0.05092 14.804 -0.0509201 15.3668 0.29589 15.7139C0.642699 16.061 1.20499 16.061 1.5518 15.7139L7.98586 9.27457L14.4511 15.7398C14.798 16.0867 15.3605 16.0867 15.7075 15.7398C16.0544 15.3928 16.0544 14.8303 15.7075 14.4834L9.24177 8.01764L15.7369 1.51725C16.0837 1.17016 16.0837 0.607411 15.7369 0.260319Z" fill="#2B2D31"/>
            </svg>
          </router-link>
        </div>

        <h4>{{title}}</h4>

        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header-close',
  props: [
    'title', 'path'
  ]
}
</script>

<style lang='scss'>
.HeaderClose{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1003;
  height: 76px;
  .back{
    width: 44px;
    height: 44px;
    background: #F0F0F0;
    border-radius: 100px;
    cursor: pointer;
    transition: .4s ease;
    &:hover{
      transition: .4s ease;
      background: darken($color: #F0F0F0, $amount: 10);
    }
  }
  h4{
    margin-bottom: 0;
  }
}
</style>