<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <a href="/" class="navbar-brand">
            <span>Diary</span>
            <strong> Cloud</strong>
            </a>
    
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>

    <ul class="navbar-nav me-auto mb-2 mb-lg-0">



      <template v-if="!store.isLoggedIn">

        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="btn btn-outline-secondary ms-2">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'register'}" class="btn btn-danger ms-2">Register</router-link>
        </li>

      </template>

      <template v-else>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" :class="toggleClass" @click.prevent="toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ store.user.name }}
          </a>
          <ul class="dropdown-menu" :class="toggleClass">
            <li><a href="#" class="dropdown-item" @click.prevent="logout">Logout</a></li>
          </ul>
        </li>
      </template>
        
      </ul>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </nav>
    
</template>


<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter()
const store = useAuthStore()
const isOpen = ref(false)

const logout = async () => {
  await store.handleLogout()
  isOpen.value = false;
  router.push({name: 'home' })
}


const toggle = () => isOpen.value = !isOpen.value;

const toggleClass = computed(() => isOpen.value === true ? 'show' : '')



</script>