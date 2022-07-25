<template>
  <div class="md:h-5/6 grid grid-cols-1 md:grid-cols-2 mt-20">
      <div class="text-4xl md:text-6xl p-6 md:py-24 md:px-24 font-extrabold md:gap-x-4">
        <h1 class="">Profile Page</h1>
        <h3 class="text-2xl md:text-4xl md:p-6 font-extrabold">Welcome , Kendrick</h3>
      </div>
           <img class="mt-10 rounded-lg hidden w-full md:flex md:items-center md:w-auto" :src="profile" />
</div>
        <div class="border-2  grid grid-cols-1 w-11/12 md:grid-cols-2 mx-5 md:mx-auto md:w-5/6 pb-10">
            <div class="mx-auto">
                <div>
                    <img class="w-2/5 md:mx-14" :src="profile1">
                </div>
                <div class=" md:grid-rows-5 ">
                    <div>
                        <button @click="view1" class="border-2 mx-8 w-5/6 md:w-4/6 md:mx-20 font-bold md:text-xl mt-3" v-if="view1">Name</button>
                    </div>
                    <div>
                        <button @click="view2" class="border-2 mx-8 w-5/6 md:w-4/6 md:mx-20 font-bold md:text-xl mt-3" v-if="view2">Gender</button>
                    </div>
                    <div>
                        <button @click="view3" class="border-2 mx-8 w-5/6 md:w-4/6 md:mx-20 font-bold md:text-xl mt-3" v-if="view3">hobby</button> 
                    </div>
                    <div>
                        <button @click="view4" class="border-2 mx-8 w-5/6 md:w-4/6 md:mx-20 font-bold md:text-xl mt-3" v-if="view4">role</button>
                    </div>
                    <div>
                        <button @click="view5" class="border-2 mx-8 w-5/6 md:w-4/6 md:mx-20 font-bold md:text-xl mt-3" v-if="view5">goals</button>
                    </div>
                </div>
            </div>
                <div class="h-4/5 border-2 mt-20">
                    <div v-if="views1">
                        <div v-show="views1" class="pt-10 ">
                            <h1 class="font-bold text-lg">Fagbenro kehinde</h1>
                        </div>
                    </div>
                    <div v-else-if="views2">
                        <div v-show="views2" class="pt-10">
                            <h1 class="font-bold text-lg">Male</h1>
                        </div>
                    </div>
                    <div v-else-if="views3">
                        <div v-show="views3" class="pt-10">
                            <h1 class="font-bold text-lg">Coding</h1>
                            <h1 class="font-bold text-lg">Football</h1>
                            <h1 class="font-bold text-lg">Games</h1>
                        </div>
                    </div>
                    <div v-else-if="views4">
                        <div v-show="views4" class="pt-10">
                            <h1 class="font-bold text-lg">Software engineer</h1>
                        </div>
                    </div>
                    <div v-else-if="views5">
                        <div v-show="views5">
                            <h1 class="font-bold text-lg">Software engineer</h1>

                        </div>
                    </div>
                </div>
            </div>
      <Footer />
</template>

<script>
import profile from '/src/assets/img/profile1.png'
import profile1 from '/src/assets/img/ff-ava.png'
import profile2 from '/src/assets/img/mm-ava.png'
import Footer from './Footer.vue'

export default {
    name: 'ProfilePage',
    components: {Footer},
        data() {
        return {
            profile: profile,
            profile1: profile1,
            profile2: profile2,
            views1: true,
            views2: false,
            views3: false,
            views4: false,
            views5: false,
        }
    },
    methods: {
        view1() {
           if (this.views1 === !this.views2){
            this.views1 = true
            this.views2= false
            this.views3 = false
            this.views4 = false
            this.views5 = false
           }
        },
        view2() {
        if(this.views2 === false){
            this.views2 = true
            this.views1 = false
            this.views3 = false
            this.views4 = false
            this.views5 = false
        }
            
      },
      view3() {
        if(this.views3 === false){
            this.views3 = true
            this.views1 = false
            this.views2 = false
            this.views4 = false
            this.views5 = false
        }
      },
        view4() {
        if(this.views4 === false){
            this.views4 = true
            this.views1 = false
            this.views2 = false
            this.views3 = false
            this.views5 = false
        }
      },
        view5() {
        if(this.views5 === false){
            this.views5 = true
            this.views1 = false
            this.views2 = false
            this.views3 = false
            this.views4 = false
        }
      }


    }
}
</script>

<style>

</style>