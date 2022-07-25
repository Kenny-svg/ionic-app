<template>
<header class="fixed top-0 w-full z-50">
  <div class="bg-primary text-white py-3.5 px-6 md:flex justify-between items-center">
    <div class="flex items-center">
      <span class="text-gray-300 text-xl mr-1">
        <i class="bi bi-messenger"></i>
      </span>
        <h1 class="text-xl">Kendrick</h1>

    </div>

    <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-primary md:w-auto w-full top-14 duration-700 ease-in z-50 text-uppercase" 
    :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6 font-bold" v-for="link in Links" :key="link" >
        <a :href="link.link" class="text-xl text-white ">{{link.name}}</a>
      </li>
      <Btn />
    </ul>
  </div>
</header>
</template>

<script>
import { ref } from '@vue/reactivity'
import Btn from './Btn.vue'
export default {
  components: {Btn},
  setup() {
    
    let open = ref(false)
    let Links = [
      {name: "home", link : "/"},
      {name: "profile", link : "/profile"},
      {name: "about", link : "/about"},
      {name: "blog", link : "/blog"},

    ]
    function menuOpen(){
      open.value = !open.value
    }
    return {Links, open, menuOpen}
  }
}
</script>

<style>

</style>