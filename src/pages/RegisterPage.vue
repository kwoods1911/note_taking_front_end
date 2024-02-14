<template>
  <div class="container-md">
    <div class="container-sm">
      <h2>Register Account</h2>
    </div>

    <form class="px-4 py-3">
      <div class="mb-3">
        <label class="form-label">Name </label>
        <input 
        class="form-control" 
        type="text" 
        placeholder="John Doe" 
        />
      </div>
      <div class="form-floating mb-2">
        <label class="form-label">Email </label>
        <input 
        class="form-control" 
        type="email" 
        placeholder="name@example.com" 
        />
      </div>

      <div class="form-floating mb-2">
        <label class="form-label">Confirm Email</label>
        
        <input 
        class="form-control" 
        type="email" 
        placeholder="name@example.com" 
        />
      </div>

      <div class="form-floating mb-3">
        <label class="form-label" for="password">Password</label>
        <input
          class="form-control"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <div class="form-floating mb-3">
        <label class="form-label" for="password">Confirmation Password</label>
        <input
          class="form-control"
          type="password"
          id="password_confirmation"
          placeholder="Password"
        />
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </form>
  </div>
</template>


<script setup>

</script>