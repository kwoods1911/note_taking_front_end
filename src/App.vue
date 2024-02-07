<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar/>
  <!-- <HomePage/> -->
  <!-- <LoginPage/> -->
  <!-- <RegisterPage/> -->
  <!-- <NotesPage/> -->

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>    
  </router-view>
</template>

<style scoped>

</style>
