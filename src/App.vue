<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">CSS Layers</RouterLink>
        <RouterLink to="/snap-scroll">Snap Scroll</RouterLink>
        <RouterLink to="/stop-parent-scroll">Stop parent Scroll</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav a {
    margin:5px 5px;
    padding: 5px 5px;
  }
</style>