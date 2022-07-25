<template>
 
<!-- main-2 -->
  <div class="grid md:grid-cols-3 mt-20">
        <main class="md:col-span-2 md:w-12/12 md:gap-0 md:mx-10">
            <h1 class="font-bold text-4xl md:text-5xl mx-4 mt-14">Ionic Recognized as Top Leader in Mobile Development Frameworks</h1>
        <p class="mt-5 md:mx-10 text-gray-500 mx-5">By Christine Perez on July 19, 2022 in ANNOUNCEMENTS</p>
        <div>
          <img class="w-10/12 mx-auto" :src="profile">
        </div>
        <h2 class="text-left mt-5 md:mx-10  mx-4 text-xl text-gray-600">
          Ionic has been recognized as a high performer in continuous integration and continuous development categories, and leader in mobile development frameworks category in the summer quarter by G2—a peer-to-peer review site and software marketplace.
        </h2>
        <h1 class="md:text-2xl md:mx-10 mt-10  mx-4 font-bold">Mobile development frameworks grid</h1>
        <img class="w-10/12 mx-auto h-54 mt-3" :src="profile2">
        <h1 class="font-bold md:text-5xl md:mx-10 mt-24  mx-5">Hybrid vs Native…What About a Third Option?</h1>
        <p class="mt-5 md:mx-10 text-gray-500 mx-5">By Christine Perez on July 19, 2022 in ANNOUNCEMENTS</p>
        <div>
          <img class="w-10/12 mx-auto border-r-8 rounded-2xl" :src="profile1">
        </div>
          <h2 class="text-left mt-5 md:mx-10 text-xl  mx-5 text-gray-600">
          Ionic has been recognized as a high performer in continuous integration and continuous development categories, and leader in mobile development frameworks category in the summer quarter by G2—a peer-to-peer review site and software marketplace.
        </h2>
        </main>
        <aside class="hidden md:flex md:w-3/6 md:fixed md:-right-20 top-0 h-screen md:bg-slate-700 md:p-5">
           <div class="mt-20 border-b-2 md:w-9/12 mx-auto ">
        <div>
            <h1 class="font-bold text-gray-700 text-xl">Join our Newsletter</h1>
        </div>
        <div>
            <form class="flex justify-center">
                 <input type="text" placeholder="Join our Newsletter" class="md:w-full md:h-12 pl-4 rounded-md border-2 hover:border-primary focus:border-primary">

            </form>
        </div>
        <div class="bg-secondary-300 rounded-2xl mt-5  h-auto items-center pb-5" style="opacity: 0.6;">
          <h1 class="text-primary font-bold pt-5 ml-5">Upgrade Your Security</h1>
          <p class="p-5 text-gray-700">Try Ionic's premium native security solutions free for 14 days. Includes Auth Connect, Identity Vault, and Secure Storage.</p>
          <button class="ml-5 font-bold bg-secondary-100 p-2 rounded-lg"><router-link to="/">GET STARTED</router-link></button>
        </div>
    </div>
        </aside>
    </div>
</template>

<script>
import profile from '/src/assets/img/blog-oic.png'
import profile1 from '/src/assets/img/blog-pic-2.png'
import profile2 from '/src/assets/img/blog-pic1.png'
export default {
  data() {
    return {
            profile: profile,
            profile1: profile1,
            profile2: profile2,
    }
  }
}
</script>

<style>

</style>
