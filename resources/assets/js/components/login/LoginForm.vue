<template>
  <ValidationObserver
    ref="observer"
    tag="form"
    v-slot="{ invalid }"
  >
    <form
      class="form-horizontal"
      @submit.prevent="submit()"
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
            :disabled="invalid"
          >
            登录
          </button>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      password: '',
      email: ''
    }
  },
  methods: {
    ...mapActions('authUser', ['loginRequest', 'getAuthUser']),
    async login() {
      let formData = {
        password: this.password,
        email: this.email,
      }
      await this.loginRequest(formData)
      await this.getAuthUser().then(response => {
        this.$router.push({ name: 'profile' })
      })
    },
    async submit() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        this.login()
      }
    }
  }
}
</script>

