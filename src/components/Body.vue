<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 h-full">
    <article>
        <ul class="justify-center flex md:px-24 mt-3 mb-3">
            <li><router-link to="/"><i class="bi bi-twitter mx-2 text-gray-400"></i>23k</router-link></li>
            <li><router-link to="/"><i class="bi bi-github mx-2 text-gray-400"></i>30k</router-link></li>
            <li><router-link to="/"><i class="bi bi-git mx-2 text-gray-400"></i>20k</router-link></li>

        </ul>
    </article>
    <article class="flex justify-center">
        <input type="text" placeholder="Join our Newsletter" class="md:w-9/12 md:h-12 pl-4 rounded-md border-2 hover:border-primary focus:border-primary">
    </article>
  </div>
  <div class="md:w-3/5 mt-20 w-4/6 mx-auto md:mx-auto ">
    <div class="h-34 bg-secondary-300 rounded-lg shadow hover:shadow-lg grid grid-cols-1 md:grid-cols-2">
      <div>
        <img class="rounded-lg hidden w-full md:flex md:items-center md:w-4/5 p-10" :src="image">
      </div>
      <div>
        <div class="p-4 font-bold text-justify text-xl mt-10 tracking-wide">
          Learn the differences between hybrid and native apps. We break down all the myths and misconceptions.
        </div>
        <button class="btn-primary w-50 text-xs ml-4 mb-5">Read the free ebook</button>
      </div>
    </div>
  </div>
  <div class="text-3xl md:text-5xl p-10 font-extrabold">
    <h1 class="text-center mx-auto mt-4 text-gray-400">Cross-platform apps.</h1>
    <h1 class=" text-center mx-auto mt-4">Powered By Kendrick.</h1>
    <p class="text-center font-normal text-base md:text-xl md:w-4/6 mx-auto mt-4">Free and open source, Ionic offers a library of mobile-optimized UI components, gestures, and tools for building fast, highly interactive apps.</p>
  </div>
  <div class="grid grid-cols-1 md:w-full md:grid-cols-3 rounded-lg gap-2">
    <div  class="rounded-lg  w-11/12 mx-auto  md:items-center md:w-12/12 p-10">
      <img :src="image2">
       <h1 class="text-center mx-auto mt-4 font-bold">Cross-platform apps.</h1>
      <p class="font-base text-justify mt-4 font-bold md:leading-7 text-xl text-secondary-400 tracking-wider">Ionic’s UI components look great on all mobile devices and platforms. Start with pre-made components, typography, and a base theme that adapts to each platform</p>
    </div>
    <div  class="rounded-lg  w-11/12 mx-auto  md:items-center md:w-12/12 p-10">
      <img :src="image2">
       <h1 class="text-center mx-auto mt-4 font-bold">Write once, run anywhere</h1>
      <p class="font-base text-justify mt-4 font-bold md:leading-7 text-xl text-secondary-400 tracking-wider">Ionic lets developers to ship apps to the app stores and as a PWA with a single code base. With Adaptive Styling, apps look and feel at home on every platform.</p>
    </div>
    <div  class="rounded-lg  w-11/12 mx-auto md:mx-2 md:items-center md:w-12/12 p-10">
      <img :src="image2">
       <h1 class="text-center mx-auto mt-4 font-bold">Developer-friendly tooling</h1>
      <p class="font-base text-justify mt-4 font-bold md:leading-7 text-xl text-secondary-400 tracking-wider">Create, build, test, and deploy your app with the Ionic CLI. Take advantage of Live Reload, deployments, integrations, and even use your favorite JS framework’s CLI.</p>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 md:ml-12">
    <div class="text-3xl md:text-4xl p-5 md:p-10 font-extrabold">
      <h3 class="text-xs">PERFORMANCE OBSESSED</h3>
      <h1 class=" mt-4 text-gray-400">Fast apps.</h1>
      <h1 class=" mt-4">Out-Of-The-Box</h1>
            <p class="font-lg text-justify mt-4 font-bold md:leading-7 text-xl text-secondary-400 ">
              Ionic is built to perform and run fast on all of the latest mobile devices. Build blazing fast apps with a small footprint and built-in best practices like hardware accelerated transitions, touch-optimized gestures, pre-rendering, and AOT compiling.
            </p>
    </div>
    <div class="grid grid-cols-2 p-6 md:p-10 gap-2">
        <div>
          <h4 class="text-gray-500 font-bold">Up to</h4>
          <h1 class="md:text-8xl text-6xl font-semibold">60<sub class= "text-3xl">FPS</sub></h1>
          <p class="font-bold text-sm mt-3 text-gray-500"> Scrolling on mobile and desktop</p>
        </div>
        <div>
          <h4 class="text-gray-500 font-bold">Consistent</h4>
          <h1 class="md:text-8xl text-6xl font-semibold">100<sup class= "text-3xl">%</sup></h1>
          <p class="font-bold text-sm mt-3 text-gray-500"> Lighthouse PWA performance score</p>
        </div>

        <!-- second-cols -->

         <div class="mt-5">
          <h4 class="text-gray-500 font-bold">Down to</h4>
          <h1 class="md:text-8xl text-6xl font-semibold">1.8<sub class= "text-3xl">Sec</sub></h1>
          <p class="font-bold text-sm mt-3 text-gray-500"> Time to Interactive</p>
        </div>
        <div class="mt-5">
          <h4 class="text-gray-500 font-bold">Up to</h4>
          <h1 class="md:text-8xl text-6xl font-semibold">2<sub class= "text-3xl">x</sub></h1>
          <p class="font-bold text-sm mt-3 text-gray-500">Faster than previous versions</p>
        </div>
    </div>
  </div>
  <!-- box-2 -->
  <div class="grid grid-cols-1 md:grid-cols-2 md:ml-12">
    <div class="w-4/5 p-5 ml-10">
      <img class="rounded-xl" :src="image5">
    </div>
    <div class="text-3xl md:text-4xl p-5 md:p-10 font-extrabold">
      <h3 class="text-xs">Framework agnotics</h3>
      <h1 class=" mt-4 text-gray-400">Build with the</h1>
      <h1 class=" mt-4">tech you prefer</h1>
      <p class="font-lg text-justify mt-4 font-bold md:leading-7 text-xl text-secondary-400 ">
        We don’t make assumptions about the tech stacks you or your team prefers to build with. That’s why Ionic is engineered to integrate seamlessly with all best frontend frameworks, including Angular, React, Vue, or even no framework at all with vanilla JavaScript.
            </p>
    </div>
  </div>

  <!-- box-3 -->

  <div class="grid grid-cols-1 md:grid-cols-2 mt-20">
      <div class="w-full md:w-full">
        <img :src="image6">
      </div>
      <div class="text-3xl mt-20 md:text-4xl p-5 md:p-10 font-extrabold">
        <h3 class="text-xs">Global  Scale</h3>
        <h1 class=" mt-4 text-gray-400">Built for developers</h1>
        <h1 class=" mt-4">Loved by enterprise</h1>
            <p class="font-base text-justify mt-4 font-bold md:leading-7 text-xl text-secondary-400 ">
              More than 5 Million developers in over 200 countries around the world are using Ionic to power their app development. Join the thousands of global meetups, forums, and events that makes building with Ionic so much fun.
            </p>
    </div>
  </div>

  <!-- box-3 -->
  <div class="bg-gradient-to-t from-gray-200 mt-20 w-full md:w-full shadow-md">
    <div class="text-3xl md:text-5xl p-5 md:p-10 font-extrabold">
      <h1 class="text-center mx-auto mt-4 text-gray-400 text-sm">PREMIER INTEGRATIONS</h1>
      <h1 class=" text-center mx-auto mt-4 text-gray-400">Yes, you can <span class="text-black">build with that</span></h1>
      <p class="text-center font-normal text-base md:text-xl md:w-4/6 mx-auto mt-4">From community plugins to premium supported integrations, Ionic has you covered. Power-up your app workflow with integrations into your favorite stacks.</p>
  </div>
  <div>
<Motion />
  </div>
  </div>
<div class="text-2xl md:text-3xl p-10 font-extrabold mt-20">
   <i class="mt-10 text-4xl text-red-700 bi bi-heart-fill flex justify-center"></i>
    <h1 class=" text-center mx-auto mt-4 text-gray-400 ">Loved by some of our<span class="text-black"> favorite people on earth</span></h1>
</div>

<Show />
<div class="bg-secondary-200 grid grid-cols-1 w-12/12 md:flex md:justify-between mt-24 items-center h-48">
    <div class="ml-5 md:ml-32">
      <h1 class="text-white md:text-3xl font-bold">Start building cross-platform apps today</h1>
      <p class="text-white text-md">Ionic is quick to install and it’s easy to get started.</p>
    </div>
    <div class="md:mr-36 ml-5">
      <button class=" upperclass  rounded-3xl p-2 md:p-3 text-secondary-200 bg-white md:flex wrap">Get started</button>
    </div>
</div>
<Footer />
</template>

<script>
import image from '/src/assets/img/v-con.svg'
import image2 from '/src/assets/img/pic-1.png'
import image3 from '/src/assets/img/pic-2.png'
import image4 from '/src/assets/img/pic-3.png'
import image5 from '/src/assets/img/v-pic.jpg'
import image6 from '/src/assets/img/community.png'
import Motion from './Motion.vue'
import Show from './Show.vue'
import Footer from './Footer.vue'


export default {
    name: 'Body',
    components: {Motion, Show, Footer},
    data() {
      return {
            image: image,
            image2: image2,
            image3: image3,
            image4: image4,
            image5: image5,
            image6: image6
      }
    }
}
</script>

<style>

</style>