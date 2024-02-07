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
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="btn btn-outline-secondary ms-2">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'register'}" class="btn btn-danger ms-2">Register</router-link>
        </li>
      </ul>

    

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </nav>
    
</template>
