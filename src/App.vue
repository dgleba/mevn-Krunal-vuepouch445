<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="tbd--collapse">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link">Create Post</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts" class="nav-link">Posts</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style></style>

<script>
export default {};
</script>
