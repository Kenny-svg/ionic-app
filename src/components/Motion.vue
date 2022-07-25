<template>
<div class="relative overflow-x-hidden w-full overflow-y-hidden">
        <div class="py-12 animate-marquee flex">
            <img class="rounded-full h-28 mx-2 md:mx-16 mt-7 md:mt-8" :src="pic1">
            <img class="rounded-full h-28 mx-2 md:mx-16" :src="pic2">
            <img class="rounded-full h-28 mx-2 md:mx-16 mt-5 md:mt-8" :src="pic3">
            <img class="rounded-full h-28 mx-2 md:mx-16" :src="pic4">
            <img class="rounded-full h-28 mx-2 md:mx-16 mt-1 md:mt-8" :src="pic5">
        </div>
        <div class="flex animate-marquee2 whitespace-nowrap  absolute top-0 py-12">
            <img class="rounded-full h-28 mx-2 md:mx-16" :src="pic6">
            <img class="rounded-full h-28 mx-2 md:mx-16 mt-10 md:mt-12" :src="pic7">
            <img class="rounded-full h-28 mx-2 md:mx-16 mt-3 md:mt-28" :src="pic8">
            <img class="rounded-full h-28 mx-2 md:mx-16 mt-9 md:mt-12" :src="pic9">
            <img class="rounded-full h-28 mx-2 md:mx-16" :src="pic10">
            <img class="rounded-full h-28 mx-2 md:mx-16" :src="pic11">
        </div>
</div>

</template>

<script>
import pic1 from '/src/assets/img/couchbase-integration.png'
import pic2 from '/src/assets/img/apple-faceid-integration.png'
import pic3 from '/src/assets/img/heroku-integration.png'
import pic4 from '/src/assets/img/paypal-integration.png'
import pic5 from '/src/assets/img/couchbase-integration.png'
import pic6 from '/src/assets/img/active-directory-integration.png'
import pic7 from '/src/assets/img/sqlite-integration.png'
import pic8 from '/src/assets/img/stripe-integration.png'
import pic9 from '/src/assets/img/touch-id-ios-integration.png'
import pic10 from '/src/assets/img/google-maps-integration.png'
import pic11 from '/src/assets/img/aws-amplify-integration.png'

export default {
    name: 'Motion',
    data() {
        return {
          pic1: pic1,
          pic2: pic2,
          pic3: pic3,
          pic4: pic4,
          pic5: pic5,
          pic6: pic6,
          pic7: pic7,
          pic8: pic8,
          pic9: pic9,
          pic10: pic10,
          pic11: pic11
        }
    }
}
</script>

<style>

</style>