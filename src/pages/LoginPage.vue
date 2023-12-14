<template>
    <div class="container-md">

    <div class="container-sm">
        <h1>Cloud Diary</h1>
         <h2>Please Sign In</h2>
    </div>
        
      <form class="px-4 py-3">
        <div class="mb-3">
          <label class="form-label">Email </label>
          <input class="form-control" 
          type="email" 
          placeholder="name@example.com" 
          />
        </div>

        <div>
        <label class="form-label" for="password">Password</label>
          <input
            class="form-control"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button class="btn btn-primary" type="submit">Sign in</button>
      </form>
    </div>
</template>
