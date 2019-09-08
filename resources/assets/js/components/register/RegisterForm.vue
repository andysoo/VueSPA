<template>
  <form
    class="form-horizontal"
    @submit.prevent="register"
  >

    <div class="form-group">
      <label
        for="name"
        class="col-md-4 control-label"
      >用户名</label>

      <div class="col-md-6">
        <ValidationProvider
          name="用户名"
          rules="min:4"
          v-slot="{ errors }"
        >
          <input
            id="name"
            type="text"
            class="form-control"
            name="name"
            v-model="name"
            required
            autofocus
          >
          <span style="color:red;">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
    </div>

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
      <label
        for="password-confirm"
        class="col-md-4 control-label"
      >确认密码</label>

      <div class="col-md-6">
        <ValidationProvider
          name="确认密码"
          rules="confirmed:confirmation"
          v-slot="{ errors }"
        >
          <input
            id="password-confirm"
            type="password"
            class="form-control"
            name="password_confirmation"
            v-model="confirmation"
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
          注册
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      password: '',
      email: '',
      confirmation: ''
    }
  },

  methods: {
    register() {
      let formData = {
        name: this.name,
        password: this.password,
        email: this.email
      }
      axios.post('/api/register', formData).then(response => {
        this.$router.push({ name: 'confirm' })
      })
    }
  }
}
</script>

