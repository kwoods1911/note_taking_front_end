<template>
    <div class="container-md">

    <div class="container-sm">
        <!-- <h1>Cloud Diary</h1> -->
         <h2>Please Sign In</h2>
    </div>
        
      <form class="px-4 py-3" @submit.prevent="handleSubmit">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" :class="{ 'is-invalid': errors.email && errors.email[0] }" id="email" v-model="form.email" placeholder="name@example.com" />
          <label class="form-label">Email </label>
          <div class="invalid-feedback" v-if="errors.email && errors.email[0]">
            {{ errors.email && errors.email[0] }}
          </div>
        </div>

        <div class="form-floating mb-3">
          <input type="password" class="form-control" :class="{ 'is-invalid': errors.password && errors.password[0] }" id="password" v-model="form.password" placeholder="Password" />
        <label class="form-label" for="password">Password</label>
          <div class="invalid-feedback" v-if="errors.password && errors.password[0]">
                  {{ errors.password && errors.password[0] }}
          </div>
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

const { isLoggedIn, errors} = storeToRefs(store)
const { handleLogin } = store

const form = reactive({
  email: '',
  password: ''
})

const handleSubmit = async () => {
  await handleLogin(form)
  if(isLoggedIn.value){
    router.push({ name: 'notes' })
  }
}


</script>
