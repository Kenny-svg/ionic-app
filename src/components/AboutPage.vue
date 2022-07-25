<template>
  <div class="md:h-5/6 grid grid-cols-1 md:grid-cols-2 mt-20">
      <div class="text-4xl md:text-6xl p-6 md:py-24 md:px-24 font-extrabold md:gap-x-4">
        <h1 class="">About Page</h1>
      </div>
        <img class="mt-10 rounded-lg hidden w-full md:flex md:items-center md:w-auto" :src="profile" />
      </div>
      <div class="w-10/12 md:w-11/12 md:mx-auto mx-auto">
           <h1 class="md:text-5xl text-3xl font-bold text-center pt-10">Who are we?</h1>
           <p class="text-gray-500 text-center pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sint adipisci corrupti odit? Repellendus, ducimus saepe. Quos, quibusdam enim cumque, delectus voluptate explicabo numquam exercitationem et odit iusto repellendus sit blanditiis neque voluptas impedit omnis! Eligendi quo consectetur culpa quod Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sint adipisci corrupti odit? Repellendus, ducimus saepe. Quos, quibusdam enim cumque, delectus voluptate explicabo numquam exercitationem et odit iusto repellendus sit blanditiis neque voluptas impedit omnis! Eligendi quo consectetur</p>
           <h1 class="md:text-5xl text-3xl font-bold text-center pt-10">Our Mission</h1>
           <div class="grid grid-cols-1 md:grid-cols-3 mx-16 md:mx-32 mt-10 w-11/12">
              <div class="">
                <img class="w-2/3 h-2/3" :src="profile1">
                  <h1 class="font-bold">Header</h1>
                  <h3 class="">Content</h3>
              </div>
              <div class=" ">
                <img class="w-2/3 h-2/3" :src="profile2">
                  <h1 class="font-bold">Header</h1>
                  <h3 class="">Content</h3>
              </div>
              <div class="">
                <img class="w-2/3 h-2/3" :src="profile3">
                  <h1 class="font-bold">Header</h1>
                  <h3 class="">Content</h3>
              </div>
           </div>
      </div>
      <Footer />
</template>

<script>
import profile from '/src/assets/img/me-v.png'
import profile1 from '/src/assets/img/kids.jpg'
import profile2 from '/src/assets/img/laptop.jpg'
import profile3 from '/src/assets/img/preview.png'
import Footer from './Footer.vue'

export default {
    name: 'AboutPage',
    components: {Footer},
    data() {
        return {
            profile: profile,
            profile1: profile1,
            profile2: profile2,
            profile3: profile3
        }
    }
}
</script>

<style>

</style>