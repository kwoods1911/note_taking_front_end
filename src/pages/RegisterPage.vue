<template>
  <div class="container-md">
    <div class="container-sm">
      <h2>Register Account</h2>
    </div>

    <h2 class="h3 mb-4 fw-normal"> Please sign up</h2>

    <form class="px-4 py-3" @submit.prevent="handleSubmit">
      <div class="form-floating mb-2">
        
        <input 
        id="name"
        v-model="form.name"
        class="form-control" 
        :class="{ 'is-invalid': errors.name && errors.name[0] }"
        type="text" 
        placeholder="John Doe" 
        />
        <label class="form-label">Name </label>
        <div class="invalid-feedback" v-if="errors.name && errors.name[0]">
                {{ errors.name && errors.name[0] }}
                </div>
      </div>
      <div class="form-floating mb-2">
        

        <input 
        class="form-control" 
        :class="{ 'is-invalid': errors.email && errors.email[0] }" 
        type="email" 
        v-model="form.email"
        placeholder="name@example.com" 
        />
        <label class="form-label">Email </label>
        <div class="invalid-feedback" v-if="errors.email && errors.email[0]">
                {{ errors.email && errors.email[0] }}
        </div>
      </div>

      <div class="form-floating mb-3">
        
        <input
          class="form-control"
          type="password"
          id="password"
          :class="{ 'is-invalid': errors.password && errors.password[0] }" 
          v-model="form.password"
          placeholder="Password"
        />
        <label class="form-label" for="password">Password</label>
        <div class="invalid-feedback" v-if="errors.password && errors.password[0]">
                {{ errors.password && errors.password[0] }}
        </div>
      </div>

      <div class="form-floating mb-3">
        
        <input
          class="form-control"
          type="password"
          id="password_confirmation"
          v-model="form.password_confirmation"
          placeholder="Password"
        />
        <label class="form-label" for="password">Confirmation Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </form>
  </div>
</template>


<script setup>

import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter()
const store = useAuthStore()
const { isLoggedIn, errors } = storeToRefs(store)
const { handleRegister } = store

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const handleSubmit = async () => {

  await handleRegister(form)
  if(isLoggedIn.value){
    router.push({name: 'notes'})
  }

}

</script>