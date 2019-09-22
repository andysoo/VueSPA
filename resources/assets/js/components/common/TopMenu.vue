<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <router-link
          to="/"
          class="navbar-brand"
        >Vue-SPA</router-link>
      </div>

      <ul
        class="nav navbar-nav navbar-right"
        v-if="!authenticated"
      >
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

      <ul
        class="nav navbar-nav navbar-right"
        v-if="authenticated"
      >
        <li>
          <router-link
            class="navbar-link"
            to="/profile"
          >个人中心</router-link>
        </li>

        <li>
          <a
            class="navbar-link"
            href="#"
          >退出</a>
        </li>

      </ul>

    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('authUser', ['authenticated'])
  }
}
</script>

