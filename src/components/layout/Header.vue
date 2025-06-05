<script setup></script>

<template>
  <header>
    <ul class="nav-links">
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/article">部落格</router-link></li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.nav-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  a {
    font-size: 28px;
    font-weight: 700;
    color: #000000;
  }
}
</style>
