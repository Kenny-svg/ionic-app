<template>
    <div class="mx-auto text-center md:w-3/5">
        <div>
            <div v-if="views1">
                 <div>
                    <transition name="fade">
                    <p v-show="views1" class="text-gray-500 text-xl">
                    "I was so inspired when I found Ionic. It fills a gap that’s missing when building for mobile and solves many complexities that otherwise require multiple libraries, keeping your code cleaner. Overall, it just makes mobile development fun and fast, so you can build more!
                    </p>
                    </transition>
                 </div>
            </div>
            <div v-else-if="views2">
                <div>
                    <transition name="fade">
                    <p v-show="views2" class="text-gray-500 text-xl">
                       "Ionic is shinig example of a high-quality framework that takes advantage of Angular's power and flexibility , enabling developers to build production-ready mobile apps and progressive apps, in a fraction of the time.
                    </p>
                    </transition>
                </div>
            </div>
            <div v-else-if="views3">
                <div>
                    <transition name="fade">
                    <p  v-show="views3" class="text-gray-500 text-xl">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi reiciendis eaque, fuga blanditiis in distinctio voluptas repellat quaerat eveniet inventore corrupti voluptatem, recusandae libero perferendis vitae quas architecto, ut ratione.
                    </p>
                    </transition>
                </div>
            </div>
            <div v-else-if="views4">
                <div>
                    <transition name="fade">
                    <p v-show="views4" class="text-gray-500 text-xl">
                        "Ionic makes cross building platform enjoyable, It's integration with Angular is seamless , so it has easily become our go-to application
                    </p>
                    </transition>
                </div>
            </div>
             <div v-else-if="views5">
                <div>
                    <transition name="fade">
                    <p  v-show="views5" class="text-gray-500 text-xl">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis maiores fugiat quod dolorum, repellendus distinctio reiciendis quis sapiente ratione doloremque eaque error aperiam unde sunt numquam neque nisi porro, quisquam expedita quae voluptatibus beatae perspiciatis vol
                    </p>
                    </transition>
                </div>
            </div>
        </div>
    </div>
<div class="md:mx-auto md:w-3/4 w- grid grid-cols-2 md:grid-cols-5 mt-24">
    <div>
        <button @click="view1" class="shadow-2xl rounded-3xl p-2 md:p-3 flex wrap" v-if="view1">
            <img class="rounded-full h-10 p-0 " :src="pic1"><span class="font-bold ml-2">Holy Schinsky<br><p class="text-xs font-normal">Dev Envangelist Adobe</p></span>
        </button>
    </div>
    <div>
        <button @click="view2" class="shadow-2xl rounded-3xl p-2 md:p-3 flex wrap" v-if="view2">
            <img class="rounded-full h-10 p-0 " :src="pic2"><span class="font-bold ml-2">Jeff Cross<br><p class="text-xs font-normal">Co founder of Nrwi</p></span>
        </button>
    </div>
    <div>
        <button @click="view3" class="shadow-2xl  rounded-3xl p-2 md:p-3 flex wrap" v-if="view3">
            <img class="rounded-full h-10 p-0 " :src="pic3"><span class="font-bold ml-2">Misko Hevery<br><p class="text-xs font-normal">Creator of angular</p></span>
        </button> 
    </div>
    <div>
        <button @click="view4" class="shadow-2xl rounded-3xl p-2 md:p-3 flex wrap" v-if="view4">
            <img class="rounded-full h-10 p-0 " :src="pic4"><span class="font-bold ml-2">John Papa<br><p class="text-xs font-normal">Microsoft Dev Rel</p></span>
        </button>
    </div>
    <div>
        <button @click="view5" class="shadow-2xl rounded-3xl p-2 md:-3 flex wrap" v-if="view5">
            <img class="rounded-full h-10 p-0 " :src="pic5"><span class="font-bold ml-2">James Templin<br><p class="text-xs font-normal">Creator of angular</p></span>
        </button>
    </div>
</div>
</template>

<script>
import pic1 from '../assets/img/misko-ionic.png'
import pic2 from '../assets/img/james-ionic.png'
import pic3 from '../assets/img/jeff-ionic.png'
import pic4 from '../assets/img/holy-ionic.png'
import pic5 from '../assets/img/john-ionic.png'
export default {
    name: 'Show',
    data() {
        return {
            views1: true,
            views2: false,
            views3: false,
            views4: false,
            views5: false,
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
            pic4: pic4,
            pic5: pic5
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>