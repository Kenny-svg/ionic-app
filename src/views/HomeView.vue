<template class="scroll-smooth">
  <div class="home">
    <HelloWorld :title="title" />
    <Body  />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Body from "@/components/Body.vue";
export default {
  name: 'HomeView',
  components: { HelloWorld, Body },
}
</script>
