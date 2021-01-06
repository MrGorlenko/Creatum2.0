<template>
  <div class='ow'>
    <ul>
      <li>all</li>
      <li class='hp' v-for='theme in themes' :key='theme.index'>
        {{theme}}
      </li>
    </ul>

    <div>
      <div 
      v-for='icon in icons' :key=icon.index
      >{{icon.title}} , {{icon.themes}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'OurClients',
  computed: {
    ...mapState({
      icons: state => state.OurClients1.icons,
      themes: state => state.OurClients1.themes
    }),
  },
  mounted() {

    let ICNS = this.icons;
    var func = function(x){
       x.addEventListener('click', event => {
        //  console.log(x.innerHTML)
        for (let i = 0; i < ICNS.length; i++){
          console.log(ICNS[i].themes.includes(x.innerHTML))
          // console.log(ICNS[i].themes)
          // console.log(x.innerHTML)
          // console.log(typeof(x.innerHTML))
          // console.log('s')
        }
       })
    }
    // let btn = this.querySelector('ul');
    const button = document.querySelectorAll('.hp');
    // console.log(button)
    button.forEach(Element => func(Element))

    // button.addEventListener('click', event => {
    //  console.log(button.innerHTML)
    // });
    // let btn = document.getElementsByTagName('ul')
    // btn.addEventListener("click", console.log('ay'));
    // for (let i = 0; i < this.icons.length; i++){
    //   console.log(this.icons[i].themes)
    //   for (let j = 0; j < this.themes.length; j++) {
    //     console.log(this.icons[i].themes.includes(this.themes[j]))
    //   }
    // }
  }
}
</script>

<style>
.red{
  color:red;
}
</style>