 <template>
  <div class="md:h-5/6 grid grid-cols-1 md:grid-cols-2 mt-20">
      <div class="text-4xl md:text-6xl p-6 md:py-24 md:px-24 font-extrabold md:gap-x-4">
        <h1 class="">One codebase.</h1>
        <h1 class="">Any Platform.</h1>
        <h1 class="">Now in Vue</h1>
        <div class="text-gray-600 mt-5 font-medium text-xl">
          An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web.
        </div>
        <button class="btn-primary text-base"><router-link to="/blog">Blogs</router-link></button>
      </div>
        <img class="mt-10 rounded-lg hidden w-full md:flex md:items-center md:w-auto" :src="image" />
      </div>
      <div>
</div>
</template>

<script>

import image from '/src/assets/img/svg-ken.svg'
export default {
name: 'HelloWorld',
props: ['title'],
    data() {
      return {
        image: image
      }
    }

}

</script>

<style>

</style>