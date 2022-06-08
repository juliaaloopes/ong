<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>

  <div class="flex bg">

    <SideBar class="w-1/5"/>

    <div class="flex-none w-4/5">
      <RouterView />
    </div>
  </div>

</template>

<style>
.bg {
  background-color: #F7F8F9 !important;
}
</style>
