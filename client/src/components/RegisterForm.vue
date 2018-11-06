<template>
  <v-layout pa-4>
    <v-flex xs12 sm6 offset-sm3>
      <v-alert
        transition="fade-transition"
        v-if="error"
        dismissible
        type="error"
        v-model="error">
        {{ error }}
      </v-alert>
      <v-card transition="slide-y-transition">
        <v-card-title primary-title>
          <div>
            <div class="headline">Register</div>
          </div>
        </v-card-title>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  required
                  type="email"
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                  name="email"
                  box>
                </v-text-field>
                <v-text-field
                  required
                  type="password"
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  name="password"
                  box>
                </v-text-field>
                <v-btn
                  dark
                  :disabled="!valid"
                  flat
                  color="accent"
                  @click="submit">
                  Submit
                </v-btn>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      error: null,
      valid: false,
      email: 'test1@test.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '111111',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be greater or equal to 6 characters'
      ]
    }
  },
  methods: {
    async submit (e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        try {
          await AuthService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
