<template>
  <div>
    <TopMenu></TopMenu>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import TopMenu from './common/TopMenu'
import jwtToken from './../helpers/JWT'
import { mapActions } from 'vuex'
export default {
  components: {
    TopMenu
  },
  methods: {
    ...mapActions('authUser', ['getAuthUser'])
  },
  created() {
    if (jwtToken.getToken()) {
      this.getAuthUser()
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translate3d(100px, 0, 0);
  opacity: 0;
}
</style>


