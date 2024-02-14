<template>
    <div class="container-md">

    <div class="container-sm">
        <!-- <h1>Cloud Diary</h1> -->
         <h2>Please Sign In</h2>
    </div>
        {{ form }}
      <form class="px-4 py-3" @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label">Email </label>
          <input class="form-control" 
          type="email" 
          placeholder="name@example.com" 
          v-model="form.email"
          />
        </div>

        <div>
        <label class="form-label" for="password">Password</label>
          <input
            class="form-control"
            type="password"
            id="password"
            placeholder="Password"
            v-model="form.password"
          />
        </div>
        <button class="btn btn-primary" type="submit">Sign in</button>
      </form>
    </div>
</template>



<script setup>

import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import {useAuthStore} from "../stores/auth";

const router = useRouter()
const store = useAuthStore()

const { isLoggedIn} = storeToRefs(store)
const { handleLogin } = store

const form = reactive({
  email: '',
  password: ''
})

const handleSubmit = async () => {
  await handleLogin(form)

  // if(isLoggedIn.value){
  //   router.push({ name: 'tasks' })
  // }
}


</script>
