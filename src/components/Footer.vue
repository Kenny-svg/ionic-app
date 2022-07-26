<template>
  <footer>
    <div class="border-2 md:border-t-0  md:border-l-0 md:border-r-0 w-12/12 md:w-full">
        <div class="grid grid-cols-2 md:grid-cols-4 ">
            <div  class="md:border-r-2 h-full md:col-span-1 text-gray-400 cursor-pointer hover:text-secondary-100">
                <div class="w-2/4 mx-auto mt-16 hover:mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                </svg>
                </div>
                <h2 class="text-center font-bold text-black">Emterprise</h2>
                <p class="text-gray-400 text-center">For mission-critical apps</p>
            </div>
            <div class="md:border-r-2 h-full text-gray-400 cursor-pointer hover:text-secondary-100">
                <div class="w-2/4 mx-auto mt-16 hover:mt-10">
               <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                </div>
                <h2 class="text-center font-bold text-black">Documentation</h2>
                <p class="text-gray-400 text-center">Start creating ionic app</p>
            </div>
            <div class="md:border-r-2 h-full text-gray-400 cursor-pointer hover:text-secondary-100">
                <div class="w-2/4 mx-auto mt-16 hover:mt-10">
             <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
                </div>
                <h2 class="text-center font-bold text-black">GitHub</h2>
                <p class="text-gray-400 text-center">Contribute to project</p>
            </div>
            <div class=" h-2/3 md:col-span-1 text-gray-400 hover:text-secondary-200">
            <div class="w-2/4 mx-auto mt-16 hover:mt-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                <h2 class="text-center font-bold text-black">GitHub</h2>
                <p class="text-gray-400 text-center">Contribute to project</p>
            </svg>
            </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-2  md:grid-cols-7 w-4/6 md:w-9/12 mx-auto mt-20">
        <div class="md:inline-block hidden">
            <h2 class=" font-bold text-secondary-200">Kendrick</h2>
        </div>
        <div>
            <ul class="mt-3 md:mt-0">
                <li class="font-bold">Products</li>
                <li class="text-gray-400 mt-3"><router-link to=":">Appflow</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Native</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Integration</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Pricing</router-link></li>
            </ul>    
        </div>
        <div>
            <ul class="mt-3 md:mt-0">
                <li class="font-bold">Developer </li>
                <li class="text-gray-400 mt-3"><router-link to=":">Docs</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Community</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">UI components</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Stencil</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Capacitor</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Blog</router-link></li>
            </ul>    
        </div>
        <div>
            <ul class="mt-3 md:mt-0">
                <li class="font-bold">Enterprise</li>
                <li class="text-gray-400 mt-3"><router-link to=":">Ionic Enterprise</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Why ionic</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Platform</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Solutions</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Customers</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Resources</router-link></li>
            </ul>    
        </div>
        <div>
            <ul class="mt-3 md:mt-0">
                <li class="font-bold">Resources</li>
                <li class="text-gray-400 mt-3"><router-link to=":">Help center</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Forum</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Trusted Partners</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Advisory Services</router-link></li>
            </ul>    
        </div>
        <div>
            <ul class="mt-3 md:mt-0">
                <li class="font-bold">Company</li>
                <li class="text-gray-400 mt-3"><router-link to=":">About</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":"> Team</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Jobs</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to=":">Press</router-link></li>
            </ul>    
        </div>
        <div>
            <ul class="mt-3 md:mt-0">
                <li class="font-bold">Contact</li>
                <li class="text-gray-400 mt-3"><router-link to="/">Twitter</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to="/">Get help</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to="/">Contact us</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to="/">Contact sales</router-link></li>
                <li class="text-gray-400 mt-3"><router-link to="/">Github</router-link></li>
            </ul>    
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid md:grid-cols-2 mt-20 border-b-2 w-9/12 mx-auto ">
        <div>
            <h1 class="font-bold text-gray-700 text-xl">Join our Newsletter</h1>
            <p class="text-gray-400 text-sm">Sign up to receive a monthly email on the latest Ionic updates, features, and news!</p>
        </div>
        <div>
            <form class="flex justify-center p-5">
                 <input type="text" placeholder="Join our Newsletter" class="md:w-full md:h-12 pl-4 rounded-md border-2 hover:border-primary focus:border-primary">

            </form>
        </div>
    </div>
    <div class="grid grid-cols-2 mt-20 border-b-2 md:w-9/12 mx-auto ml-2 md:gap-0">
        <ul class="flex justify-start">
            <li class="flex"><i class="bi bi-c-circle"></i> 2022 Ionic</li>
            <li class="mx-1">Terms</li>
            <li class="mx-1">Privacy</li>
        </ul>
        <ul class="flex justify-end text-gray-400 mr-2">
            <!-- Add Icons using String format -->
            <i class="bi bi-github mx-1"></i>
            <i class="bi bi-facebook mx-1"></i>
            <i class="bi bi-git mx-1"></i>
            <i class="bi bi-twitter mx-1"></i>
            <i class="bi bi-youtube mx-1"></i>
        </ul>
    </div>
  </footer>
</template>

<script>
import pic1 from '../assets/img/comp.svg'
import pic2 from '../assets/img/book.svg'
import pic3 from '../assets/img/git.svg'
import pic4 from '../assets/img/twi.svg'

export default {
    name: 'Footer',
    data() {
        return {
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
            pic4: pic4,
            hover: false,
        }
    },
    methods: {
        handleMove() {
            this.style.textColor = 'fffff'
        }
    }
}
</script>

<style>

</style>