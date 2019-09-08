<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <router-link
          to="/"
          class="navbar-brand"
        >Vue-SPA</router-link>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link
            class="navbar-link"
            to="/login"
          >登录</router-link>
        </li>
        <li>
          <router-link
            class="navbar-link"
            to="/register"
          >注册</router-link>
        </li>

      </ul>

    </div>
  </nav>
</template>

<script>
export default {

}
</script>

