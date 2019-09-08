<template>
  <form
    class="form-horizontal"
    @submit.prevent="login"
  >

    <div class="form-group">
      <label
        for="email"
        class="col-md-4 control-label"
      >邮箱</label>

      <div class="col-md-6">
        <ValidationProvider
          name="邮箱"
          rules="min:6|email"
          v-slot="{ errors }"
        >
          <input
            id="email"
            type="email"
            class="form-control"
            name="email"
            required
            v-model="email"
          >
          <span style="color:red;">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="form-group">
      <label
        for="password"
        class="col-md-4 control-label"
      >密码</label>

      <div class="col-md-6">
        <ValidationProvider
          name="密码"
          rules="min:6"
          vid="confirmation"
          v-slot="{ errors }"
        >
          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            v-model="password"
            required
          >
          <span style="color:red;">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

    <div class="form-group">
      <div class="col-md-6 col-md-offset-4">
        <button
          type="submit"
          class="btn btn-primary"
        >
          登录
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import JWTToken from '../../helpers/JWT'
export default {
  data() {
    return {
      password: '',
      email: ''
    }
  },

  methods: {
    login() {
      let formData = {
        scope: '',
        password: this.password,
        username: this.email,
        client_id: "2",
        client_secret: 'f2EI87V6d5LnRCNpDEt5ckutlzoymqEElLzGt0rA',
        grant_type: "password"
      }
      axios.post('/oauth/token', formData).then(response => {
        JWTToken.setToken(response.data.access_token)
      })
    }
  }
}
</script>

